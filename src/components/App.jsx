import React, { lazy, Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Header from './header/Header';
import styles from '../components/home/home.module.css';

const Home = lazy(() => import('../components/home/Home.js'));
const Movies = lazy(() => import('../components/movies/Movies'));
const MovieDetails = lazy(() =>
  import('../components/movieDetails/MovieDetails')
);
const Cast = lazy(() => import('./cast/Cast'));
const Reviews = lazy(() => import('../components/reviews/Reviews.js'));

const App = () => {
  return (
    <div className={styles.container}>
      <Header />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/component/Home" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movieDetails/:id" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>

          <Route path="*" element={<Navigate to="/component/Home" />} />
        </Routes>
      </Suspense>
    </div>
  );
};

export { App };