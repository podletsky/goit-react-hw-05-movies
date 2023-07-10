import { NavLink } from 'react-router-dom';
import styles from './Header.module.css';
import React from 'react';
const Header = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.navlinkBox}>
        <NavLink className={styles.navlink} to="/">
          Home
        </NavLink>
        <NavLink className={styles.navlink} to="/Movies">
          Movies
        </NavLink>
      </nav>
    </header>
  );
};
export default Header;
