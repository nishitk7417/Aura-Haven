import React from 'react';
import './Footer.css'; 
import { Link } from 'react-router-dom';

function Footer(props) {
  return (
    <footer className={`footer text-white bg-${props.mode} py-4`}>
      <div className="container" style={{background: props.mode==='dark'?'rgb(5,37,21)':'rgb(21,93,60)'}} >
        <div className="row ">
          <div className="col-lg-4 mb-3">
            <h5 className="fw-bold">About Aura Haven</h5>
            <p className="text-light">
              Aura Haven is your one-stop destination for wellness and relaxation. Experience our premium services tailored to rejuvenate your mind, body, and soul.
            </p>
          </div>

         
          <div className="col-lg-4 mb-3">
            <h5 className="fw-bold">Quick Links</h5>
            <ul className="list-unstyled">
              <li>
                <Link to="/" className="text-white text-decoration-none">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-white text-decoration-none">
                  About
                </Link>
              </li>
              <li>
                <Link to="/service" className="text-white text-decoration-none">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-white text-decoration-none">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/appointment" className="text-white text-decoration-none">
                  Book Appointment
                </Link>
              </li>
            </ul>
          </div>

          <div className="col-lg-4 mb-3">
            <h5 className="fw-bold">Contact Us</h5>
            <p>
              <strong>Address:</strong> 123 Main Street, Cityville, State 56789
            </p>
            <p>
              <strong>Email:</strong>{' '}
              <Link to="mailto:contact@aurahaven.com" className="text-white">
                contact@aurahaven.com
              </Link>
            </p>
            <p>
              <strong>Phone:</strong>{' '}
              <Link to="tel:+1234567890" className="text-white">
                +1 (234) 567-890
              </Link>
            </p>
            <div className="social-icons mt-3">
              <Link to="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white me-3">
                <i className="fab fa-facebook-f"></i>
              </Link>
              <Link to="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white me-3">
                <i className="fab fa-twitter"></i>
              </Link>
              <Link to="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white">
                <i className="fab fa-instagram"></i>
              </Link>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="text-center mt-4">
          <p className="mb-0">&copy; {new Date().getFullYear()} Aura Haven. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
