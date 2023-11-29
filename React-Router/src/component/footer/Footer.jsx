// Footer.jsx
import { NavLink } from 'react-router-dom';
import React from 'react';

const socialMediaSection = {
    display: 'flex',
    gap: '5px',
}
const Footer = () => {
  return (
    <footer className="footer mt-4" style={{borderTop: '1px solid beige', paddingTop: '20px'}}>
        <div className="container-fluid">
            <div className="row" style={{paddingLeft: '2rem'}}>
                <div className="col-md-4">
                    <h5>Contact Us</h5>
                    <address>
                        123 Tech Street<br />
                        Cityville, TECH 12345<br />
                        Email: <a href="mailto:info@technofaad.com">info@technofaad.com</a><br />
                        Phone: +1 (123) 456-7890
                    </address>
                </div>
                <div className="col-md-4">
                    <h5>Follow Us</h5>
                    <p>Connect with us on social media</p>
                    <section className='social-handles' style={socialMediaSection}>
                        <a href="/"> <i className="fab fa-facebook-square fa-2x"></i></a>
                        <a href="/"> <i className="fab fa-instagram-square fa-2x"></i></a>
                        <a href="#"> <i className="fab fa-twitter-square fa-2x"></i></a>
                        <a href="#"> <i className="fab fa-github-square fa-2x"></i></a>
                    </section>
                </div>
                <div className="col-md-4">
                    <h5>Important Links</h5>
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                        <NavLink to="/" className={({isActive})=> `nav-link pt-0 ${isActive? "active": ""}`} aria-current="page">
                            Home
                        </NavLink>
                        </li>
                        <li className="nav-item">
                        <NavLink to="/about" className={({isActive})=> `nav-link pt-0 ${isActive? "active": ""}`}>
                            About
                        </NavLink>
                        </li>
                        <li className="nav-item">
                        <NavLink to="/contact" className={({isActive})=> `nav-link pt-0 ${isActive? "active": ""}`}>
                            Contact
                        </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
            <hr />
            <p className="text-center">&copy; 2023 Your Company. All rights reserved.</p>
        </div>
    </footer> 
  );
};

export default Footer;
