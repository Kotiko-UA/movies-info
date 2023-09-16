import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Filmotela, Header, StyledLink, Ul } from './Layout.styled';

const Layout = () => {
  return (
    <>
      <Header>
        <Filmotela to={'/'}>Filmoteka</Filmotela>
        <nav>
          <Ul>
            <li>
              <StyledLink to={'/'} end>
                Home
              </StyledLink>
            </li>
            <li>
              <StyledLink to={'/movies'} end>
                Movies
              </StyledLink>
            </li>
          </Ul>
        </nav>
      </Header>
      <Suspense>
        <Outlet />
      </Suspense>
    </>
  );
};

export default Layout;
