import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
          <a className="nav-item nav-link active" href="/">
            Home
          </a>
          <a className="nav-item nav-link" href="/Players-Win-Percentage">
            Win Percentage
          </a>
          <a className="nav-item nav-link" href="/Add-Match">
            Add Match          
          </a>
          <a className="nav-item nav-link" href="/Top-Players">
            League Toppers          
          </a>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
