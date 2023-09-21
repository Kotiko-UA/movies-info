import { getMovieReviews } from 'components/Api';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Author, HasReview, Name, Text, Ul } from './Reviews.stuled';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);
  const [hasReview, setHasReview] = useState(true);

  useEffect(() => {
    const controller = new AbortController();
    async function getReviews() {
      try {
        if (!movieId) return;
        const revData = await getMovieReviews(movieId, controller.signal);
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
    return () => controller.abort();
  }, [movieId]);
  return (
    <div>
      {!hasReview && <HasReview>movie don`t have any reviews :(</HasReview>}
      <Ul>
        {reviews.length > 0 &&
          reviews.map(author => (
            <li key={author.id}>
              <Author>Author: </Author>
              <Name>{author.author}</Name>
              <Text>{author.content}</Text>
            </li>
          ))}
      </Ul>
    </div>
  );
};
export default Reviews;
