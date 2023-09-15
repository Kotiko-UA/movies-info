import Home from 'Pages/Home/Home';
import MovieDetails from 'Pages/MovieDetails/MovieDetails';
import Movies from 'Pages/Movies/Movies';
import NotFound from 'Pages/NotFound/NotFound';
import { NavLink, Route, Routes } from 'react-router-dom';
import { Cast } from './Cast/Cast';
import { Reviews } from './Reviews/Reviews';

export const App = () => {
  return (
    <>
      <header>
        <nav>
          <ul>
            <li>
              <NavLink to={'/'} end>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to={'/movies'} end>
                Movies
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:movieId" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};
