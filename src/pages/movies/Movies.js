import React, { useEffect, useState, useCallback } from 'react';
import { fetchMovies } from '../../services/Api';
import {
  Link,
  useSearchParams,
  useLocation,
  useNavigate,
} from 'react-router-dom';
import styles from '../movies/Movies.module.css';

const Movies = () => {
  const [inputValue, setInputValue] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();
  const [movies, setMovies] = useState([]);
  const location = useLocation();
  const navigate = useNavigate();

  const searchMovies = useCallback(async () => {
    try {
      const response = await fetchMovies(searchParams.get('name'));

      if (Array.isArray(response?.data?.results)) {
        setMovies(response.data.results);
      } else {
        setMovies([]);
      }
    } catch (error) {
      console.log('Error fetching movies:', error);
      setMovies([]);
    }
  }, [searchParams]);

  useEffect(() => {
    if (!searchParams.has('name')) {
      return;
    }

    searchMovies();
  }, [searchParams, searchMovies, location]);

  const handleInputChange = e => {
    setInputValue(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    setSearchParams({ name: inputValue });
  };

  const handleClick = () => {
    navigate('/component/Home');
  };

  return (
    <>
      <div className={styles.boxForm}>
        <form className={styles.form} onSubmit={handleSubmit}>
          <input
            className={styles.input}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder=""
            value={inputValue}
            onChange={handleInputChange}
          />
          <button className={styles.buttonSearch} type="submit">
            Search
          </button>
        </form>

        <button
          className={styles.buttonBack}
          type="button"
          onClick={handleClick}
        >
          Go back
        </button>
      </div>
      {movies.length > 0 ? (
        <ul className={styles.listMovies}>
          {movies.map(movie => (
            <li key={movie.id}>
              <Link to={`/movieDetails/${movie.id}`} className={styles.link}>
                {movie.title}
              </Link>
            </li>
          ))}
        </ul>
      ) : (
        <h3>No movies found</h3>
      )}
    </>
  );
};

export default Movies;
