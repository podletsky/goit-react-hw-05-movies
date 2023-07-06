import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './header/Header';
import Home from '../components/home/Home.js';
import Movies from '../components/movies/Movies';
import MovieDetails from '../components/movieDetails/MovieDetails';
import Cast from './cast/Cast';
import Reviews from '../components/reviews/Reviews.js';
import styles from '../components/home/home.module.css';
const App = () => {
  return (
    <div className={styles.container}>
      <Header />
      <Routes>
        <Route path="/component/Home" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movieDetails/:id" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
      </Routes>
    </div>
  );
};

export { App };
