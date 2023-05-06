import { Loader } from 'components/Loader/Loader';
import { Suspense } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import styled from 'styled-components';

const StyledNavLink = styled(NavLink)`
  color: black;
  text-decoration: none;
  margin-right: 1rem;
  font-weight: bold;
  font-size: 1.2rem;
  &.active {
    color: red;
  }
`;

const Layout = () => {
  return (
    <>
      <header>
        <nav>
          <StyledNavLink to="">Home</StyledNavLink>
          <StyledNavLink to="/movies">Movies</StyledNavLink>
        </nav>
      </header>
      <main>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};

export default Layout;
