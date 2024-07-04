import React from 'react';
import { Link } from 'react-router-dom';
import './bootstrap/dist/css/bootstrap.css';
import './Header.css';

const Header = () => {
  return (
    <header className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container d-flex justify-content-between">
        <Link className="navbar-brand text-white logo" to="/">LOGO</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav ">
            <li className="nav-item">
              <Link className="nav-link" to="/courses">Courses</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/gamified">Gamified</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/resources">Resources</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link btn btn-outline-primary sign-in-btn" to="/signin">Sign In</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link btn btn-primary text-white sign-up-btn" to="/signup">Sign Up</Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
