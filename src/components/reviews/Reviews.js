import React, { useEffect, useState } from 'react';
import { fetchMovieReviews } from '../Api.js';
import { useParams } from 'react-router-dom';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await fetchMovieReviews(id);

        setReviews(response.data.results);
      } catch (error) {
        console.log('Error fetching movie reviews:', error);
      }
    };

    fetchReviews();
  }, [id]);

  return (
    <div>
      <h3>Reviews:</h3>
      {Array.isArray(reviews) && reviews.length > 0 ? (
        <ul>
          {reviews.map(review => (
            <li key={review.id}>
              <h4>{review.author}</h4>
              <p>{review.content}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No reviews available</p>
      )}
    </div>
  );
};

export default Reviews;
