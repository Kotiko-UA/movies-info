import { getMovieById } from 'components/Api';
import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { Link, NavLink, Outlet, useParams } from 'react-router-dom';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const defaultImg =
    'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';
  const movieImg = movie?.poster_path
    ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    : defaultImg;

  useEffect(() => {
    if (!movieId) return;
    try {
      async function getSomMovie() {
        const movieData = await getMovieById(movieId);
        console.log(movieData);
        setMovie(movieData);
      }

      getSomMovie();
    } catch (error) {
      if (error.code !== 'ERR_CANCELED') {
        toast.error('Wow! Something went wrong!');
      }
    }
  }, [movieId]);

  return (
    <>
      <Link to={'/'}>Go back</Link>
      {movie && (
        <div>
          <img width={300} height={450} src={movieImg} alt="poster" />
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
      {movie && (
        <ul>
          <li>
            <NavLink to={`/movies/${movieId}/cast`}>Cast</NavLink>
          </li>
          <li>
            <NavLink to={`/movies/${movieId}/reviews`}>Reviews</NavLink>
          </li>
        </ul>
      )}
      {!movie && <div>Wow, something happened, try another movie!</div>}

      <Outlet />
    </>
  );
};

export default MovieDetails;
