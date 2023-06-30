import React, { useEffect, useState } from 'react';
import { fetchMovieDetails, fetchMovieCredits } from '../Api.js';
import { useParams, Link, Outlet } from 'react-router-dom';
import Cast from '../cast/Cast.js';
const MovieDetails = () => {
  const [movie, setMovie] = useState(null);
  const [cast, setCast] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const response = await fetchMovieDetails(id);
        setMovie(response.data);
      } catch (error) {
        console.log('error');
      }
    };

    fetchMovie();
  }, [id]);

  useEffect(() => {
    const fetchCast = async () => {
      try {
        const response = await fetchMovieCredits(id);
        setCast(response);
      } catch (error) {
        console.error('Помилка при отриманні акторського складу:', error);
      }
    };

    fetchCast();
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
      <Link to={`/Cast/${id}`}>Cast</Link>
      <Outlet />
      <Cast cast={cast} />
    </div>
  );
};

export default MovieDetails;
