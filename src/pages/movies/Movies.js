import React, { useEffect, useState } from 'react';
import { fetchMovies } from '/1/goit-react-hw-05-movies/src/service/Api';
import { Link } from 'react-router-dom';
import styles from '../movies/Movies.module.css';
const Movies = () => {
  const [inputValue, setInputValue] = useState('');
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    searchMovies();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [movies]);
  const searchMovies = async () => {
    try {
      const response = await fetchMovies(inputValue);

      if (Array.isArray(response.data.results)) {
        setMovies(response.data.results);
      } else {
      }
    } catch (error) {}
  };

  const handleInputChange = e => {
    setInputValue(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    searchMovies();
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
      </form>

      <ul>
        {movies.map(movie => (
          <li key={movie.id}>
            <Link to={`/movieDetails/${movie.id}`}>{movie.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Movies;
