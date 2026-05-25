import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => setIsOpen(false);

  return (
    <>
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`} id="nav">
        <Link to="/" className="nav-brand" onClick={closeMenu}>
          <div className="nav-brand-icon">S</div>
          <span>SATS <em>Solutions</em></span>
        </Link>
        <div className="nav-links">
          <Link to="/" className={location.pathname === '/' ? 'active' : ''}>Services</Link>
          <Link to="/work" className={location.pathname === '/work' ? 'active' : ''}>Case Studies</Link>
          <Link to="/about" className={location.pathname === '/about' ? 'active' : ''}>Company</Link>
          <Link to="/blog" className={location.pathname === '/blog' ? 'active' : ''}>Insights</Link>
          <Link to="/careers" className={location.pathname === '/careers' ? 'active' : ''}>Careers</Link>
          <Link to="/contact" className={`nav-cta ${location.pathname === '/contact' ? 'active' : ''}`}>Contact Us</Link>
        </div>
        <button className="hamburger" id="hamburgerBtn" onClick={() => setIsOpen(true)} aria-label="Open menu">
          <i className="ti ti-menu-2"></i>
        </button>
      </nav>

      {/* Standard Proper Mobile Nav List */}
      <div className={`mobile-menu ${isOpen ? 'open' : ''}`} id="mobileMenu">
        <div className="mob-header">
          <Link to="/" className="nav-brand" onClick={closeMenu} style={{ fontSize: '1.2rem' }}>
            <div className="nav-brand-icon" style={{ width: '32px', height: '32px', fontSize: '14px' }}>S</div>
            <span>SATS <em>Solutions</em></span>
          </Link>
          <button className="mob-close" onClick={closeMenu} aria-label="Close">
            <i className="ti ti-x"></i>
          </button>
        </div>

        <div className="mob-nav-list">
          <Link to="/" className={`mob-nav-link ${location.pathname === '/' ? 'active' : ''}`} onClick={closeMenu}>
            Services <i className="ti ti-chevron-right"></i>
          </Link>
          <Link to="/work" className={`mob-nav-link ${location.pathname === '/work' ? 'active' : ''}`} onClick={closeMenu}>
            Case Studies <i className="ti ti-chevron-right"></i>
          </Link>
          <Link to="/about" className={`mob-nav-link ${location.pathname === '/about' ? 'active' : ''}`} onClick={closeMenu}>
            Company <i className="ti ti-chevron-right"></i>
          </Link>
          <Link to="/blog" className={`mob-nav-link ${location.pathname === '/blog' ? 'active' : ''}`} onClick={closeMenu}>
            Insights <i className="ti ti-chevron-right"></i>
          </Link>
          <Link to="/careers" className={`mob-nav-link ${location.pathname === '/careers' ? 'active' : ''}`} onClick={closeMenu}>
            Careers <i className="ti ti-chevron-right"></i>
          </Link>
          <Link to="/contact" className={`mob-nav-link ${location.pathname === '/contact' ? 'active' : ''}`} onClick={closeMenu}>
            Contact Us <i className="ti ti-chevron-right"></i>
          </Link>
        </div>

        <div className="mob-footer">
          <p>Connect with us</p>
          <div className="mob-social">
            <a href="mailto:info@satssolutions.com"><i className="ti ti-mail"></i></a>
            <a href="https://linkedin.com"><i className="ti ti-brand-linkedin"></i></a>
          </div>
        </div>
      </div>

      <div className={`mob-overlay ${isOpen ? 'open' : ''}`} onClick={closeMenu}></div>
    </>
  );
};

export default Navbar;


