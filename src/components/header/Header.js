import { NavLink } from 'react-router-dom';

import React from 'react';
const Header = () => {
  return (
    <header
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      <nav>
        <NavLink to="/component/Home">Home</NavLink>
        <NavLink to="/Movies">Movies</NavLink>
      </nav>
    </header>
  );
};
export default Header;
