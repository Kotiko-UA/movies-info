import { getTrandingMovies } from 'components/Api';
import { FilmList } from 'components/FilmList/FilmList';
import { useEffect, useState } from 'react';

const Home = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    async function getTopMovie() {
      try {
        const moviesData = await getTrandingMovies();
        setMovies([...moviesData.results]);
      } catch (error) {
        console.log(error);
      }
    }
    getTopMovie();
  }, []);

  return (
    <>
      <h1>Tranding today</h1>

      {movies.length > 0 && <FilmList movies={movies} />}
    </>
  );
};

export default Home;
