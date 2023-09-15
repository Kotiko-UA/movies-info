import { getMovieById } from 'components/Api';
import { useEffect, useState } from 'react';
import { Link, NavLink, Outlet, useParams } from 'react-router-dom';
const defaultImg =
  'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';
const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState({});

  useEffect(() => {
    if (!movieId) return;
    try {
      async function getSomMovie() {
        const movieData = await getMovieById(movieId);
        setMovie(movieData);
      }

      getSomMovie();
    } catch (error) {
      console.log(error);
    }
  }, [movieId]);

  return (
    <>
      <Link to={'/'}>Go back</Link>
      {movie && (
        <div>
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
          <h1>{movie.title || movie.name}</h1>
          <span>{movie.vote_average}</span>
          <h2>Overwiew</h2>
          <p>{movie.overview}</p>
          <h2>Genres</h2>
          <p>
            {movie.genres && movie.genres.map(genre => genre.name).join(' ')}
          </p>
        </div>
      )}

      <ul>
        <li>
          <NavLink>Cast</NavLink>
        </li>
        <li>
          <NavLink>Reviews</NavLink>
        </li>
      </ul>
      <Outlet />
    </>
  );
};

export default MovieDetails;
