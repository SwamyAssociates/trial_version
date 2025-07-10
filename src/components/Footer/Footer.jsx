import React from 'react';
import './footer.css';

const Footer = ({ onContactClick, onEnquiryClick, onFeedbackClick }) => {
  return (
    <footer className="footer">
      <div className="footer-container">
        
        {/* Contact Info */}
        <div className="footer-section">
          <h4>📞 Contact Us</h4>
          <ul>
            <li><strong>Email:</strong> <a href="mailto:dieselcare@boschservicemail.com">dieselcare@boschservicemail.com</a></li>
            <li><strong>Phone:</strong> <a href="tel:+919843544970">+91 98435 44970</a></li>
            <li><strong>Address:</strong><br />87/2, Palakkad Road, near Renault showroom, Pollachi</li>
          </ul>
        </div>

        {/* Navigation */}
        <div className="footer-section">
          <h4> Quick Links</h4>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#about">About Us</a></li>
            <li>
              <a href="#contact" onClick={(e) => {
                e.preventDefault();
                onContactClick();
              }}> Contact</a>
            </li>
            <li>
              <a href="#enquiry" onClick={(e) => {
                e.preventDefault();
                onEnquiryClick();
              }}> Enquiry</a>
            </li>
            <li>
              <a href="#feedback" onClick={(e) => {
                e.preventDefault();
                onFeedbackClick();
              }}> Feedback</a>
            </li>
          </ul>
        </div>

        {/* Brand + Social */}
        <div className="footer-section">
          <h3>Diesel Care</h3>
          <p className="footer-tagline">Your trusted partner in diesel engine diagnostics since 1989.</p>
          
          <div className="footer-social">
            <a href="https://www.youtube.com/@DieselCare-1989" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
              <i className="fab fa-youtube"></i>
            </a>
            <a href="https://www.facebook.com/dieselcaree" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="https://www.instagram.com/diesel.care" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://wa.me/919843544970" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
              <i className="fab fa-whatsapp"></i>
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Diesel Care. All rights reserved. | Powered by Swamy Business Ventures</p>
      </div>
    </footer>
  );
};

export default Footer;
