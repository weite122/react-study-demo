/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";

class NavBar extends Component {
  render() {
    return (
      <nav className="navbar nav-light bg-light">
        <a className="navbar-brand" href="#">
          NavBar{" "}
          <span className="badge badge-pill badge-secondary">
            {this.props.totalCounters}
          </span>
        </a>
      </nav>
    );
  }
}

export default NavBar;
