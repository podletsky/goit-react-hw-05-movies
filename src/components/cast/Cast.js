import React from 'react';
import styles from '../cast/Cast.module.css';
// import { Outlet } from 'react-router-dom';
const Cast = ({ location }) => {
  const cast = location.state?.cast;
  if (!cast || !cast.cast) {
    return null;
  }

  const castArr = cast.cast;

  return (
    <div className={styles.cast_wrap}>
      {castArr.map(({ profile_path, id, original_name }) => {
        if (!profile_path) {
          return null;
        }
        return (
          <div key={id}>
            <img
              className={styles.author}
              src={`https://image.tmdb.org/t/p/w300${profile_path}`}
              alt={original_name}
            />
            <p>{original_name}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Cast;
