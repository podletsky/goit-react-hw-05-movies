import React, { useEffect, useState } from 'react';
import { fetchMovieDetails } from '../Api.js';
import { useParams, Link, Outlet } from 'react-router-dom';

const MovieDetails = () => {
  const [movie, setMovie] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const response = await fetchMovieDetails(id);

        setMovie(response.data);
      } catch (error) {
        console.log('Error fetching movie details:', error);
      }
    };

    fetchMovie();
  }, [id]);

  if (!movie) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>{movie.title}</h2>
      <img
        src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
        alt={movie.overview}
      />
      {movie.genres.map(genre => (
        <p key={genre.id}>{genre.name}</p>
      ))}
      <p>{movie.overview}</p>
      <Link to={`/movieDetails/${id}/cast`}>Cast</Link>
      <Link to={`/movieDetails/${id}/reviews`}>Reviews</Link>

      <Outlet />
    </div>
  );
};

export default MovieDetails;
