import { getMovieReviews } from 'components/Api';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);
  const [hasReview, setHasReview] = useState(true);

  useEffect(() => {
    async function getReviews() {
      try {
        if (!movieId) return;
        const revData = await getMovieReviews(movieId);
        if (revData.results.length === 0) {
          setHasReview(false);
          return;
        }
        setReviews(revData.results);
      } catch (error) {
        console.log(error);
      }
    }
    getReviews();
  }, [movieId]);
  return (
    <div>
      {!hasReview && <div>movie don`t have any reviews</div>}
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
export default Reviews;
