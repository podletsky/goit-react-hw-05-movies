import React, { useEffect, useState } from 'react';
import { fetchMovies } from '../../services/Api';
import { Link, useSearchParams } from 'react-router-dom';
import styles from '../movies/Movies.module.css';

const Movies = () => {
  const [inputValue, setInputValue] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    if (!searchParams.has('name')) {
      return;
    }

    searchMovies();
  }, [searchParams]);

  const searchMovies = async () => {
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
  };

  const handleInputChange = e => {
    setInputValue(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    setSearchParams({ name: inputValue });
  };

  return (
    <>
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
        <button type="submit">Search</button>
      </form>

      <Link to={'/component/Home'}>
        <button>go back</button>
      </Link>

      {movies.length > 0 ? (
        <ul>
          {movies.map(movie => (
            <li key={movie.id}>
              <Link to={`/movieDetails/${movie.id}`}>{movie.title}</Link>
            </li>
          ))}
        </ul>
      ) : (
        <p>No movies found</p>
      )}
    </>
  );
};

export default Movies;
