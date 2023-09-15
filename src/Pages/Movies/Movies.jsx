import { getMovieByName } from 'components/Api';
import { FilmList } from 'components/FilmList/FilmList';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

const Movies = () => {
  const [searchVel, setSearchVel] = useState('');
  const [moviesList, setMoviesList] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const movies = searchParams.get('query') ?? '';

  useEffect(() => {
    if (movies === '') return;
    async function getSearch() {
      try {
        const searcMovies = await getMovieByName(movies);
        setMoviesList(searcMovies.results);
      } catch (error) {
        console.log(error);
      }
    }

    getSearch();
  }, [movies]);

  const onSubmit = e => {
    e.preventDefault();
    if (e.target.elements.search.value === '') alert('type some text');

    setSearchParams({ query: e.target.elements.search.value });
  };
  const onInput = e => {
    setSearchVel(e.target.value);
  };
  return (
    <>
      <div>Movies</div>
      <form onSubmit={onSubmit}>
        <input
          onChange={onInput}
          type="text"
          name="search"
          value={searchVel}
          autoComplete="off"
          autoFocus
          placeholder="Search movies"
        />
        <button type="submit">Search movie</button>
      </form>
      {moviesList.length > 0 && <FilmList movies={moviesList} />}
    </>
  );
};

export default Movies;
