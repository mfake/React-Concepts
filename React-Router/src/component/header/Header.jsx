import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

import BrandLogo from '../../assets/logo.png'


const lightIcon = <i className="fas fa-sun"></i>;
const darkIcon = <i class="fas fa-moon"></i>;
const Header = () => {
  const [theme, setTheme] = useState('light');
  const themeIcon = theme === 'light' ? lightIcon : darkIcon;

  const themeChangeClick = () => {
    let newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.documentElement.setAttribute('data-bs-theme', newTheme);
  };
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
              <Link to="/signin" className="ml-auto btn btn-outline-secondary">
                <i className="fas fa-sign-in-alt"></i>
              </Link>
            </div>
            <div className="themSelect">
              <button className="btn btn-outline-secondary" type="button" aria-expanded="false"
              onClick={themeChangeClick}>
                {themeIcon}
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
