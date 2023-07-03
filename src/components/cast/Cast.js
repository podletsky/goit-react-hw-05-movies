import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieCredits } from '../Api';
const Cast = () => {
  const [cast, setCast] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchCast = async () => {
      try {
        const response = await fetchMovieCredits(id);
        setCast(response);
      } catch (error) {
        console.error('Error fetching cast:', error);
      }
    };

    fetchCast();
  }, [id]);

  if (!cast) {
    return <div>Loading cast...</div>;
  }

  return (
    <div>
      <h3>Cast</h3>
      {cast.cast.map(({ profile_path, id: castId, original_name }) => {
        if (!profile_path) {
          return null;
        }
        return (
          <div key={castId}>
            <img
              src={`https://image.tmdb.org/t/p/w300${profile_path}`}
              alt={original_name}
            />
            <p>{original_name}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Cast;
