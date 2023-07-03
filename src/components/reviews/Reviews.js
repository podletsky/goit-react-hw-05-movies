import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieReviews } from '../Api';

const Reviews = () => {
  const [reviews, setReviews] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await fetchMovieReviews(id);
        setReviews(response);
      } catch (error) {
        console.error('Error fetching reviews:', error);
      }
    };

    fetchReviews();
  }, [id]);

  if (!reviews) {
    return <div>Loading reviews...</div>;
  }

  return (
    <div>
      <h3>Cast</h3>
      {reviews.map(({ id: revId, popularity }) => {
        return (
          <div key={revId}>
            {/* Render cast information */}
            <p>{popularity}</p>
          </div>
        );
      })}
    </div>
  );
};
export default Reviews;
