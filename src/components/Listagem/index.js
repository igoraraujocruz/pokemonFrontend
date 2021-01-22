import React, { useState, useEffect } from 'react';
import {ListagemStyle, Pokemons, Container, SearchInput} from './styles';
import axios from 'axios';

const Listagem = () => {
    const [repository, setRepository] =  useState([]);
    const [search, setSearch] = useState('');
    useEffect(() => {
        async function loadPokemon () {
            const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=100&offset=0');
            const repositoryData = response.data.results;
    
            const arrayOfPromises = repositoryData.map((eachResult) => {
                return axios.get(eachResult.url);
            });

            const arrayOfAxiosResults = await Promise.all(arrayOfPromises);
            

            const pokemonsData = arrayOfAxiosResults.map((response) => response.data);
            console.log(pokemonsData);
            setRepository(pokemonsData);
        }
            
            loadPokemon();
        }, []);

        const filteredPokemons = repository.filter(pok =>{
            return pok.name.toLowerCase().includes(search.toLowerCase())
        })

    return (
    <>
        <ListagemStyle><h1>Lista de Pokemons</h1></ListagemStyle>
        <SearchInput>
        <input type="text" placeholder="Digite o nome do pokemon" onChange={ e => setSearch(e.target.value)} />
        </SearchInput>
        <Pokemons>
            {filteredPokemons.map(pokemon => (
                    <Container>
                    <ul key={pokemon.name}>
                        <li className="nomePokemon">{pokemon.name}</li>
                        <img src={pokemon.sprites.front_default} alt="frente" />
                        <img src={pokemon.sprites.back_default} alt="frente" />
                        <h5>Habilidades:</h5>
                        {pokemon.abilities.map(skills => (
                            <li>{skills.ability.name}</li>
                        ))}
                        <h5>Tipo:</h5>
                        {pokemon.types.map(tipo =>(
                            <li>{tipo.type.name}</li>
                        ))}
                    </ul>
                    </Container>              
            ))}
        </Pokemons>
    </>
    )
};

export default Listagem;