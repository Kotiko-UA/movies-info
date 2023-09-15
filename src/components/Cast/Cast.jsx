import { getMovieCredits } from 'components/Api';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export const Cast = () => {
  const [cast, setCast] = useState([]);
  const { movieId } = useParams();
  useEffect(() => {
    if (!movieId) return;
    async function getCast() {
      try {
        const getDataCast = await getMovieCredits(movieId);
        setCast(getDataCast.cast);
      } catch (error) {
        console.log(error);
      }
    }
    getCast();
  }, [movieId]);

  return (
    <div>
      <ul>
        {cast.length > 0 &&
          cast.map(actor => {
            return (
              <li key={actor.id}>
                <img
                  loading="lazy"
                  width={100}
                  height={150}
                  src={`https://image.tmdb.org/t/p/w500${actor.profile_path}`}
                  alt={actor.name}
                />
                <div>
                  {' '}
                  <h2>{actor.name}</h2> - <p>{actor.character}</p>
                </div>
              </li>
            );
          })}
      </ul>
    </div>
  );
};
