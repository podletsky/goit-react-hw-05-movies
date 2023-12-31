import React, { useEffect, useState } from 'react';
import { fetchTrend } from '../../services/Api';
import { Link, useLocation } from 'react-router-dom';
import styles from '../home/home.module.css';
const Home = () => {
  const [movies, setMovies] = useState([]);
  const location = useLocation();

  useEffect(() => {
    const fetchMovieTrend = async () => {
      try {
        const response = await fetchTrend();
        setMovies(response.results);
      } catch (error) {
        console.log('Error fetching movie details:', error);
      }
    };

    fetchMovieTrend();
  }, []);

  return (
    <ul className={styles.listFilmTop}>
      {movies.map(movie => (
        <li key={movie.id}>
          <Link
            className={styles.item}
            to={`/movieDetails/${movie.id}`}
            state={{ from: location }}
          >
            {movie.original_title}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default Home;
