import { Routes, Route } from 'react-router-dom';
import Header from './header/Header';
import Home from '../components/home/Home';
import Movies from '../components/movies/Movies';
import MovieDetails from '../components/movieDetails/MovieDetails.js';
import Cast from './cast/Cast';
const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movieDetails/:id" element={<MovieDetails />} />
        <Route path="/Cast/:id" element={<Cast />} />
      </Routes>
    </div>
  );
};
export { App };
