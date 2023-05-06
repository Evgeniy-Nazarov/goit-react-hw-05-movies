import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const StyledMovies = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    padding: 1rem;
`;

export const StyledMovieH1 = styled.h1`
    text-align: center;
    font-size: 2rem;
    margin-bottom: 1rem;
`;

export const StyledMovieInput = styled.input`
    display: block;
    width: 100%;
    padding: 0.5rem;
    margin-bottom: 1rem;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 1rem;
    &:focus {
        outline: none;
        border-color: #0077FF;
    }
`;

export const StyledMovieButton = styled.button`
    display: block;
    width: 100%;
    padding: 0.5rem;
    margin-bottom: 1rem;
    border: 1px solid #0077FF;
    border-radius: 4px;
    background-color: #0077FF;
    color: #fff;
    font-size: 1rem;
    cursor: pointer;
    &:hover {
        background-color: #006FE6;
    }
    &:focus {
        outline: none;
        border-color: #006FE6;
    }
`;

export const StyledMovieUl = styled.ul`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    padding: 0;
    margin: 0;
    list-style: none;
`;

export const StyledMovieLi = styled.li`
    display: flex;
    flex-direction: column;
    margin-bottom: 1rem;
    margin-right: 1rem;
    text-decoration: none;
    color: black;
    font-size: 1.2rem;
   width: 200px;
   font-size: 1.2rem;
   font-weight: bold;
`;

export const StyledMovieImg = styled.img`
    width: 200px;
    height: auto;
    margin-bottom: 0.5rem;
`;

export const StyledMovieA = styled.a`
    text-decoration: none;
    color: black;
    font-size: 1.2rem;
    }
`;

export const StyledMovieLink = styled(Link)`
    display: flex;
    flex-direction: column;
    margin-bottom: 1rem;
    text-decoration: none;
    color: black;
    font-size: 1.2rem;
    &:hover {
        color: red;
    }
`;