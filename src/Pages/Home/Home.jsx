import { getTrandingMovies } from 'components/Api';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

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
      <ul>
        {movies.map(movie => {
          return (
            <li key={movie.id}>
              <Link to={`/movies/${movie.id}`}>
                {movie.title || movie.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Home;
