import { getTrandingMovies } from 'components/Api';
import { FilmList } from 'components/FilmList/FilmList';
import { useEffect, useState } from 'react';
import { H1, Main } from './Home.styled';

const Home = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    const controller = new AbortController();
    async function getTopMovie() {
      try {
        const moviesData = await getTrandingMovies(controller.signal);
        setMovies([...moviesData.results]);
      } catch (error) {
        console.log(error);
      }
    }
    getTopMovie();
    return () => controller.abort();
  }, []);

  return (
    <Main>
      <H1>Tranding today:</H1>

      {movies.length > 0 && <FilmList movies={movies} />}
    </Main>
  );
};

export default Home;
