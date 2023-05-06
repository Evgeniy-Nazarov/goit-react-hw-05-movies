import styled from 'styled-components';

export const StyledCast = styled.ul`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    padding: 0;
    margin: 0;
    list-style: none;
`;

export const StyledCastLi = styled.li`
    display: flex;
    flex-direction: column;
    margin-bottom: 1rem;
    margin-right: 1rem;
    text-decoration: none;
    color: black;
    font-size: 1.2rem;
`;

export const StyledCastImg = styled.img`
    width: 200px;
    height: 300px;
    object-fit: cover;
    border-radius: 5px;
    margin-bottom: 0.5rem;
`;

export const StyledCastH3 = styled.h3`
    text-align: center;
    font-size: 1.5rem;
    margin-bottom: 1rem;
    width: 200px;
`;

export const StyledCastP = styled.p`
    text-align: center;
    font-size: 1.2rem;
    margin-bottom: 1rem;
    width: 200px;
`;

