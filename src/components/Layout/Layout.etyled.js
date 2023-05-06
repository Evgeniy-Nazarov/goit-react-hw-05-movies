import { NavLink } from 'react-router-dom';
import styled from 'styled-components';


export const StyledLayoutHeader = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-left: 1rem;
    padding-right: 1rem;
    height: 5rem;
    background-color: orange;
    box-shadow: 0 0 10px rgba(0,0,0,0.5);
`;

export const StyledLayoutNav = styled.nav`
    display: flex;
    align-items: center;
    height: 100%;
`;

export const StyledNavLink = styled(NavLink)`
  color: black;
  text-decoration: none;
  margin-right: 1rem;
  font-weight: bold;
  font-size: 1.2rem;
  &.active {
    color: red;
    border-bottom: 1px solid red;
  }
`;

export const StyledLayoutMain = styled.main`
    padding: 1rem;
    background-color: #fff;
    min-height: calc(100vh - 5rem);
`;
