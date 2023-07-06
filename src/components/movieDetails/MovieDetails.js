import React, { useEffect, useState } from 'react';
import { fetchMovieDetails } from '../Api.js';
import { useParams, Link, Outlet } from 'react-router-dom';
import styles from '../movieDetails/MovieDetails.module.css';

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
      <h2 className={styles.titleFilm}>{movie.title}</h2>
      <img
        className={styles.img}
        src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
        alt={movie.overview}
      />
      <div className={styles.boxText}>
        {movie.genres.map(genre => (
          <p className={styles.text} key={genre.id}>
            {genre.name}
          </p>
        ))}
      </div>
      <p className={styles.textOverviev}>{movie.overview}</p>
      <Link to={`/movieDetails/${id}/cast`}>Cast</Link>
      <Link to={`/movieDetails/${id}/reviews`}>Reviews</Link>

      <Outlet />
    </div>
  );
};

export default MovieDetails;
