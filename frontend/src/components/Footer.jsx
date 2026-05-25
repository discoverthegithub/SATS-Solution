import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <div className="footer-mark">S</div>
            <p>SATS Solutions provides enterprise-grade technology services, driving digital transformation for forward-thinking organizations.</p>
          </div>
          <div className="footer-col">
            <h6>Services</h6>
            <ul>
              <li><Link to="/">Software Engineering</Link></li>
              <li><Link to="/">Cloud Infrastructure</Link></li>
              <li><Link to="/">Data & AI</Link></li>
              <li><Link to="/">ERP Implementation</Link></li>
            </ul>
          </div>
          <div className="footer-col">
            <h6>Company</h6>
            <ul>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/work">Case Studies</Link></li>
              <li><Link to="/blog">Insights</Link></li>
              <li><Link to="/careers">Careers</Link></li>
            </ul>
          </div>
          <div className="footer-col">
            <h6>Contact</h6>
            <ul>
              <li><Link to="/contact">Contact Us</Link></li>
              <li><a href="mailto:info@satssolutions.com">info@satssolutions.com</a></li>
              <li><a href="tel:+924231234567">+92 423 123 4567</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <span>&copy; 2026 SATS Solutions. All rights reserved.</span>
          <div className="social-links">
            <a href="#" className="social-link" aria-label="LinkedIn"><i className="ti ti-brand-linkedin"></i></a>
            <a href="#" className="social-link" aria-label="Twitter"><i className="ti ti-brand-twitter"></i></a>
            <a href="#" className="social-link" aria-label="Facebook"><i className="ti ti-brand-facebook"></i></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;


