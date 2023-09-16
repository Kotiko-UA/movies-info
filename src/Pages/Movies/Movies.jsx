import { getMovieByName } from 'components/Api';
import { FilmList } from 'components/FilmList/FilmList';
import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { useSearchParams } from 'react-router-dom';
import {
  FormInput,
  MovieWrapper,
  SearchForm,
  SearchFormButton,
} from './Movies.styled';
import { BsSearch } from 'react-icons/bs';

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
      <SearchForm onSubmit={onSubmit}>
        <FormInput
          onChange={onInput}
          type="text"
          name="search"
          value={searchVel}
          autoComplete="off"
          autoFocus
          placeholder="Search movies"
        />
        <SearchFormButton type="submit">
          <BsSearch size={36} />
        </SearchFormButton>
      </SearchForm>
      {moviesList.length > 0 && (
        <MovieWrapper>
          <FilmList movies={moviesList} />
        </MovieWrapper>
      )}
    </>
  );
};

export default Movies;