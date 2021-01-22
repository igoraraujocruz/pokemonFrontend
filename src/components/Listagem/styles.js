import styled from 'styled-components';

 export const ListagemStyle = styled.div`
    h1 {
        text-align: center;
        margin-bottom: 20px;
        color: #fff;
    }
`;

export const SearchInput = styled.div`
    display: flex;
    justify-content: center;
    input {
        width: 20vw;
        height: 5vh;
        margin-bottom: 20px;
        border-radius: 2rem;
        padding: 1.5rem 2rem;
        border: none;
        font-family: 'Potta One', cursive;
    
    }
    &:focus {
        list-style-type: none;
    }
`;

export const Pokemons = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    align-items: center;

    li, h5 {
        list-style-type: none;
        text-align: center;
    }

    .nomePokemon{
        font-size: 15px;
        transition: 0.5s;
    }
    img {
        width: 100px;
        transition: 0.5s;
    }

`;

export const Container = styled.div`
    background: rgba(255, 255, 255, 0.8);
    border-radius: 20%;
    margin: 5px;
    transition: 0.5s;

    &:hover {
        background: rgba(255, 255, 255, 1);
    }
    &:hover .nomePokemon {
        font-size: 25px;
    }
`;