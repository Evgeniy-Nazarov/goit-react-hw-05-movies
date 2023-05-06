import { Loader } from 'components/Loader/Loader';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import {
  StyledLayoutHeader,
  StyledLayoutMain,
  StyledLayoutNav,
  StyledNavLink,
} from './Layout.etyled';

const Layout = () => {
  return (
    <>
      <StyledLayoutHeader>
        <StyledLayoutNav>
          <StyledNavLink to="">Home</StyledNavLink>
          <StyledNavLink to="/movies">Movies</StyledNavLink>
        </StyledLayoutNav>
      </StyledLayoutHeader>
      <StyledLayoutMain>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </StyledLayoutMain>
    </>
  );
};

export default Layout;
