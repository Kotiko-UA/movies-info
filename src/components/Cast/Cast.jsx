import { getMovieCredits } from 'components/Api';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { H2, Li, P, Wrapper, WrapperCast } from './Cast.styled';
const defaultImg =
  'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';

const Cast = () => {
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
    <Wrapper>
      <WrapperCast>
        {cast.length > 0 &&
          cast.map(actor => {
            return (
              <Li key={actor.id}>
                <img
                  loading="lazy"
                  width={100}
                  height={150}
                  src={
                    actor.profile_path
                      ? `https://image.tmdb.org/t/p/w500${actor.profile_path}`
                      : `${defaultImg}`
                  }
                  alt={actor.name}
                />
                <H2>{actor.name}</H2>
                <P>{actor.character}</P>
              </Li>
            );
          })}
      </WrapperCast>
    </Wrapper>
  );
};
export default Cast;
