import React from 'react';
import { Link, NavLink } from 'react-router-dom';

import BrandLogo from '../../assets/logo.png'

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand">
          <img src={BrandLogo} alt="Bootstrap" width="65" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink to="/" className={({isActive})=> `nav-link ${isActive? "active": ""}`} aria-current="page">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/about" className={({isActive})=> `nav-link ${isActive? "active": ""}`}>
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/contact" className={({isActive})=> `nav-link ${isActive? "active": ""}`}>
                Contact
              </NavLink>
            </li>
          </ul>

          <div className="d-flex" style={{ gap: '10px' }}>
            <div className="signin">
              <Link to="/signin" className="ml-auto">
                <i className="fas fa-sign-in-alt fa-2x"></i>
              </Link>
            </div>
            <div className="another-item">
              <div className="dropdown-center">
                <button
                  className="btn btn-secondary dropdown-toggle"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <i className="fas fa-sun"></i>
                </button>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#">
                      Light
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Dark
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
