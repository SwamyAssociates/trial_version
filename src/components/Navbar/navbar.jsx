import React, { useState, useEffect, useRef } from 'react';
import './navbar.css';
import EnquiryForm from '../Contact/EnquiryForm';
import FeedbackForm from '../Contact/FeedbackForm';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showEnquiry, setShowEnquiry] = useState(false);
  const [showFeedback, setShowFeedback] = useState(false);
  const [showContact, setShowContact] = useState(false);
  const popupRef = useRef(null);

  const toggleMenu = () => setMenuOpen(prev => !prev);

  const handleEnquiryClick = () => {
    setShowEnquiry(true);
    setShowFeedback(false);
    setShowContact(false);
    setMenuOpen(false);
  };

  const handleFeedbackClick = () => {
    setShowFeedback(true);
    setShowEnquiry(false);
    setShowContact(false);
    setMenuOpen(false);
  };

  const handleContactClick = () => {
    setShowContact(true);
    setShowEnquiry(false);
    setShowFeedback(false);
    setMenuOpen(false);
  };

  const closePopup = () => {
    setShowEnquiry(false);
    setShowFeedback(false);
    setShowContact(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        popupRef.current &&
        !popupRef.current.contains(event.target) &&
        !event.target.classList.contains('menu-icon')
      ) {
        setMenuOpen(false);
      }
    };

    const handleEscape = (event) => {
      if (event.key === 'Escape') {
        setMenuOpen(false);
        closePopup();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleEscape);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscape);
    };
  }, []);

  return (
    <>
      <header className="navbar" role="banner">
        <div className="navbar-logo" tabIndex="0">
          <img
            src="/assets/logo.png"
            alt="Diesel Care Logo"
            className="navbar-logo-img"
          />
          <h1>Diesel Care</h1>
        </div>

        <nav className="navbar-links" role="navigation" aria-label="Primary">
          <ul className="navbar-list">
            <li><a href="#home">Home</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#about">About Us</a></li>
            <li><a href="#contact" onClick={handleContactClick}>Contact</a></li>
          </ul>
        </nav>

        <div className="navbar-buttons">
          <button className="btn-login" onClick={handleEnquiryClick}>Enquiry</button>
          <button className="btn-feedback" onClick={handleFeedbackClick}>Feedback</button>
        </div>

        <button
          className="menu-icon"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          onClick={toggleMenu}
        >
          <span>{menuOpen ? '✕' : '☰'}</span>
        </button>

        {menuOpen && (
          <div className="popup-overlay" role="dialog" aria-modal="true" id="mobile-menu">
            <nav className="popup-menu" ref={popupRef}>
              <ul>
                <li><a href="#home" onClick={toggleMenu}>Home</a></li>
                <li><a href="#services" onClick={toggleMenu}>Services</a></li>
                <li><a href="#about" onClick={toggleMenu}>About Us</a></li>
                <li><a href="#contact" onClick={handleContactClick}>Contact</a></li>
                <li><button className="btn-login" onClick={handleEnquiryClick}>Enquiry</button></li>
                <li><button className="btn-feedback" onClick={handleFeedbackClick}>Feedback</button></li>
              </ul>
            </nav>
          </div>
        )}
      </header>

      {showEnquiry && (
        <div className="modal-overlay" onClick={closePopup}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <EnquiryForm onClose={closePopup} />
          </div>
        </div>
      )}

      {showFeedback && (
        <div className="modal-overlay" onClick={closePopup}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <FeedbackForm onClose={closePopup} />
          </div>
        </div>
      )}

      {showContact && (
        <div className="modal-overlay" onClick={closePopup}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closePopup}>×</button>
            <h2>📞 Contact Diesel Care</h2>

            <p><strong>📍 Address:</strong><br />
              87/2, Palakkad Road, Next to Renault Showroom,<br />
              Pollachi, Tamil Nadu – 642001
            </p>

            <p><strong>🕒 Working Hours:</strong><br />
              Monday – Saturday, 9:00 AM – 6:00 PM
            </p>

            <hr />

            <h3>📱 Phone Directory</h3>
            <ul className="contact-emails">
              <li><strong>👨‍💼 Owner:</strong> <a href="tel:+919843044970">+91 98430 44970</a></li>
              <li><strong>🧰 Helpdesk:</strong> <a href="tel:+919943244970">+91 99432 44970</a></li>
              <li><strong>📋 Executive:</strong> <a href="tel:+919843544970">+91 98435 44970</a></li>
              <li><strong>🧑‍💼 Manager:</strong> <a href="tel:+919787744970">+91 97877 44970</a></li>
            </ul>

            <hr />

            <h3>📧 Email Support</h3>
            <ul className="contact-emails">
              <li>
                <strong>🔧 Service & Enquiry:</strong><br />
                <a href="mailto:dieselcare.helpdesk@gmail.com">dieselcare.helpdesk@gmail.com</a>
              </li>
              <li>
                <strong>🎯 Promotions & Campaigns:</strong><br />
                <a href="mailto:dieselcare.office@gmail.com">dieselcare.office@gmail.com</a>
              </li>
              <li>
                <strong>❗ Escalation:</strong><br />
                <a href="mailto:dieselcare@boschservicemail.com">dieselcare@boschservicemail.com</a>
              </li>
            </ul>

            <hr />

            <p><strong>📍 Google Maps:</strong><br />
              <a
                href="https://g.co/kgs/kUQWq7H"
                target="_blank"
                rel="noopener noreferrer"
              >
                Track our location on Google Maps
              </a>
            </p>

            <div className="map-container">
              <iframe
                title="Diesel Care Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3913.0086728706827!2d76.99000000000001!3d10.662000000000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba849d1f3c3c7e9%3A0x1234567890abcdef!2sDiesel%20Care!5e0!3m2!1sen!2sin!4v1719858375834"
                width="100%"
                height="250"
                style={{ border: 0, borderRadius: '8px', marginTop: '1rem' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
