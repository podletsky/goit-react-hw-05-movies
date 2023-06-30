import React from 'react';

const Cast = ({ cast }) => {
  console.log(cast);
  if (!cast || cast.length === 0) {
    return <div>No cast available</div>;
  }

  return (
    <div>
      {cast.map(el => (
        <img
          key={el.id}
          src={`https://image.tmdb.org/t/p/w200${el.profile_path}`}
          alt={el.name}
        />
      ))}
    </div>
  );
};

export default Cast;
