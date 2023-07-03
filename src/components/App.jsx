import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './header/Header';
import Home from '../components/home/Home';
import Movies from '../components/movies/Movies';
import MovieDetails from '../components/movieDetails/MovieDetails';
import Cast from './cast/Cast';
import Reviews from './reviews/Reviews';
const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="movies" element={<Movies />} />
        <Route path="movieDetails/:id" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />

          <Route path="/movieDetails/:id/reviews" component={Reviews} />
        </Route>
      </Routes>
    </div>
  );
};

export { App };
