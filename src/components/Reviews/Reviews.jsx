import { getMovieReviews } from 'components/Api';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    async function getReviews() {
      try {
        if (!movieId) return;
        const revData = await getMovieReviews(movieId);
        setReviews(revData.results);
      } catch (error) {
        console.log(error);
      }
    }
    getReviews();
  }, [movieId]);
  return (
    <div>
      <ul>
        {reviews.length > 0 &&
          reviews.map(author => (
            <li key={author.id}>
              <h2>Author: {author.author}</h2>
              <p>{author.content}</p>
            </li>
          ))}
      </ul>
    </div>
  );
};
