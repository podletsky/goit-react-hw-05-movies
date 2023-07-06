import axios from 'axios';

const API_KEY = 'ec45ef77891571da539171d6a0a07d2c';

export const fetchTrend = async () => {
  try {
    const response = await axios.get(
      ` https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}`
    );
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error('Помилка при отриманні фільмів:', error);
    return null;
  }
};

export const fetchMovies = async searchMovies => {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${searchMovies}`
    );
    return response;
  } catch (error) {
    console.error('Помилка при отриманні фільмів:', error);
    return null;
  }
};

export const fetchMovieDetails = async id => {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`
    );

    return response;
  } catch (error) {
    console.error('Помилка при отриманні фільмів:', error);
    return null;
  }
};

export const fetchMovieCredits = async id => {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${API_KEY}`
    );

    return response.data;
  } catch (error) {
    console.error('Помилка при отриманні фільмів:', error);
    return null;
  }
};

export const fetchMovieReviews = async id => {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=${API_KEY}`
    );
    return response.data;
  } catch (error) {
    console.error('Помилка при отриманні фільмів:', error);
    return null;
  }
};
