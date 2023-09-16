import { getMovieById } from 'components/Api';
import { Suspense, useEffect, useState } from 'react';
import { Outlet, useLocation, useParams } from 'react-router-dom';
import {
  FilmWrapper,
  H1,
  H2,
  InfoWrapper,
  P,
  Rating,
  StyledLink,
  StyledLinkList,
  Ul,
  Warning,
} from './MovieDetails.styled';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const [hasMovie, setHasMovie] = useState(true);
  const location = useLocation();
  const defaultImg =
    'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';
  const movieImg = movie?.poster_path
    ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    : defaultImg;

  useEffect(() => {
    if (!movieId) return;

    async function getSomMovie() {
      try {
        const movieData = await getMovieById(movieId);
        setMovie(movieData);
      } catch (error) {
        setHasMovie(false);
      }
    }

    getSomMovie();
  }, [movieId]);

  return (
    <>
      <StyledLink to={location?.state?.from ?? '/'}>Go back</StyledLink>
      {movie && (
        <FilmWrapper>
          <img width={300} height={450} src={movieImg} alt="poster" />
          <InfoWrapper>
            <H1>{movie.title || movie.name}</H1>
            <Rating>{movie.vote_average}</Rating>
            <H2>Overwiew</H2>
            <P>{movie.overview}</P>
            <H2>Genres</H2>
            <P>
              {movie.genres && movie.genres.map(genre => genre.name).join(', ')}
            </P>
          </InfoWrapper>
        </FilmWrapper>
      )}
      {movie && (
        <Ul>
          <li>
            <StyledLinkList to={`/movies/${movieId}/cast`}>Cast</StyledLinkList>
          </li>
          <li>
            <StyledLinkList to={`/movies/${movieId}/reviews`}>
              Reviews
            </StyledLinkList>
          </li>
        </Ul>
      )}
      {!hasMovie && (
        <Warning>
          Wow, something happened, press 'Go back' and try another movie!
        </Warning>
      )}
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default MovieDetails;
