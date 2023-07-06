import React, { useEffect, useState } from 'react';
import { fetchTrend } from 'components/Api';
import { Link } from 'react-router-dom';
import styles from '../home/home.module.css';
const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovieTrend = async () => {
      try {
        const response = await fetchTrend();
        console.log(response.results);
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
        <li>
          <Link className={styles.item} to={`/movieDetails/${movie.id}`}>
            {movie.original_title}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default Home;
