import styled from 'styled-components';

export const StyledReviews = styled.ul`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    padding: 0;
    margin: 0;
    list-style: none;
`;

export const StyledReviewsLi = styled.li`

    display: flex;
    flex-direction: column;
    margin-bottom: 1rem;
    margin-right: 1rem;
    text-decoration: none;
    color: black;
    font-size: 1.2rem;
`;

export const StyledReviewsH3 = styled.h3`
    text-align: center;
    font-size: 1.5rem;
    margin-bottom: 1rem;
`;

export const StyledReviewsP = styled.p`
    text-align: center;
    font-size: 1.2rem;
    margin-bottom: 1rem;
`;