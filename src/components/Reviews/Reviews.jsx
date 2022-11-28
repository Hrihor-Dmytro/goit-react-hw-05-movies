import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import * as API from '../Services/Api';
import { useParams } from 'react-router-dom';
import { RewiewsHeader, RewiewsList, RewiewsBox } from './Rewiews.styled';
export const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();
  const [isReviewInfoLoaded, setIsReviewInfoLoaded] = useState(false);

  useEffect(() => {
    const loadReviews = async movieId => {
      try {
        const response = await API.getMovieByReviews(movieId);
        setReviews(response);
        setIsReviewInfoLoaded(true);
      } catch (error) {
        console.log(error.message);
      }
    };
    loadReviews(movieId);
  }, [movieId]);

  if (reviews.length === 0 && isReviewInfoLoaded) {
    return "We don't have any reviews for this movie.";
  }

  return (
    <RewiewsBox>
      {reviews.map(({ id, author, content }) => (
        <RewiewsList key={id}>
          <RewiewsHeader>Author: {author}</RewiewsHeader>
          <p>{content}</p>
        </RewiewsList>
      ))}
    </RewiewsBox>
  );
};

Reviews.propTypes = {
  reviewInfo: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      author: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
    })
  ),
};
