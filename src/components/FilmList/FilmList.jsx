import { Li, StyledMovesLink, Ul } from 'Pages/Home/Home.styled';
import { useLocation } from 'react-router-dom';
export const FilmList = ({ movies, movieQuery }) => {
  const location = useLocation();
  const defaultImg =
    'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';

  return (
    <Ul>
      {movies.map(movie => {
        return (
          <Li key={movie.id}>
            <StyledMovesLink
              to={`/movies/${movie.id}`}
              state={{ from: location, movieQuery }}
            >
              <img
                width={300}
                height={450}
                src={
                  movie.poster_path
                    ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                    : defaultImg
                }
                alt="poster"
              />
              {movie.title || movie.name}
            </StyledMovesLink>
          </Li>
        );
      })}
    </Ul>
  );
};
