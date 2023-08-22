import React from "react";
import { NavLink } from "react-router-dom";

import classes from "./MainNavigation.module.css";

const MainNavigation = () => {
  const activeStyle = ({ isActive }) => {
    return isActive ? classes.active : undefined;
  };

  return (
    <header className={classes.header}>
      <nav>
        <ul className={classes.list}>
          <li>
            <NavLink to="/" className={activeStyle}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/products" className={activeStyle}>
              Products
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
