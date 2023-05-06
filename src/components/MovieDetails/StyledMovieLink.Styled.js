import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const StyledMovieDetails = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1rem;
`;

export const StyledMovieDetailsGoBack = styled(Link)`
    display: inline-block;
    width: 100%;
    padding: 0.5rem;
    margin-bottom: 1rem;
    border: 1px solid #0077FF;
    border-radius: 4px;
    background-color: #0077FF;
    color: #fff;
    font-size: 1rem;
    text-decoration: none;
    text-align: center;
    cursor: pointer;
    &:hover {
        background-color: #006FE6;
    }
    &:focus {
        outline: none;
        border-color: #006FE6;
    }
`;

export const StyledMovieDetailsImg = styled.img`
    display: block;
    width: 100%;
    max-width: 300px;
    margin-bottom: 1rem;
`;

export const StyledMovieDetailsH1 = styled.h1`
    text-align: center;
    font-size: 2rem;
    margin-bottom: 1rem;
`;

export const StyledMovieDetailsP = styled.p`
    text-align: center;
    font-size: 1.2rem;
    margin-bottom: 1rem;
`;

export const StyledMovieDetailsH2 = styled.h2`
    text-align: center;
    font-size: 1.5rem;
    margin-bottom: 1rem;
`;

export const StyledMovieDetailsH3 = styled.h3`
    text-align: center;
    font-size: 1.2rem;
    margin-bottom: 1rem;
`;

export const StyledMovieDetailsUl = styled.ul`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    padding: 0;
    margin: 0;
    list-style: none;
`;

export const StyledMovieDetailsLi = styled.li`
    display: flex;
    flex-direction: column;
    margin-bottom: 1rem;
    margin-right: 1rem;
    text-decoration: none;
    color: black;
    font-size: 1.2rem;
    &:hover {
        color: red;
    }
`;

export const StyledMovieDetailsLink = styled(Link)`
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

