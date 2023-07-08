import React, { useEffect, useState } from 'react';
import { fetchMovieDetails } from '/1/goit-react-hw-05-movies/src/service/Api';
import { useParams, Link, Outlet } from 'react-router-dom';
import styles from './MovieDetails.module.css';

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
      <div className={styles.castBox}>
        <Link className={styles.linkDetail} to={`/movieDetails/${id}/cast`}>
          Cast
        </Link>
        <Link className={styles.linkDetail} to={`/movieDetails/${id}/reviews`}>
          Reviews
        </Link>
      </div>
      <Outlet />
    </div>
  );
};

export default MovieDetails;
