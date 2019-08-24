/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

const NavBar = ({totalCounters}) => {
  return (
    <nav className="navbar nav-light bg-light">
      <a className="navbar-brand" href="#">
        NavBar{" "}
        <span className="badge badge-pill badge-secondary">
          {totalCounters}
        </span>
      </a>
    </nav>
  );
};

export default NavBar;
