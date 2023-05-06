import { NavLink } from 'react-router-dom';
import styled from 'styled-components';


export const StyledLayoutHeader = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 1rem;
    height: 5rem;
    background-color: #fff;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

export const StyledLayoutNav = styled.nav`
    display: flex;
    align-items: center;
`;

export const StyledNavLink = styled(NavLink)`
  color: black;
  text-decoration: none;
  margin-right: 1rem;
  font-weight: bold;
  font-size: 1.2rem;
  &.active {
    color: red;
  }
`;

export const StyledLayoutMain = styled.main`
    padding: 1rem;
    background-color: #fff;
    min-height: calc(100vh - 5rem);
`;
