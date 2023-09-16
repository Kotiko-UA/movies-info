import { getMovieByName } from 'components/Api';
import { FilmList } from 'components/FilmList/FilmList';
import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
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
        if (searcMovies.results.length === 0) {
          toast.error('we don`t found any movies');
          return;
        }
        setMoviesList(searcMovies.results);
      } catch (error) {
        console.log(error);
      }
    }

    getSearch();
  }, [movies]);

  const onSubmit = e => {
    e.preventDefault();
    if (e.target.elements.search.value === '')
      toast.error('need to type something to search!');

    setSearchParams({ query: e.target.elements.search.value });
  };
  const onInput = e => {
    setSearchVel(e.target.value);
  };
  return (
    <>
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
