import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "./enquiryform.css";

const EnquiryForm = ({ onClose }) => {
  const form = useRef();
  const [submitted, setSubmitted] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "your_service_id",
        "your_template_id",
        form.current,
        "your_public_key"
      )
      .then(() => {
        setSubmitted(true);
        setTimeout(() => onClose(), 3000);
      })
      .catch((error) => {
        console.error("EmailJS Error:", error.text);
      });
  };

  return (
    <div className="enquiry-popup">
      <form ref={form} onSubmit={sendEmail} className="enquiry-form">
        <h2>Enquiry Form</h2>
        <input type="text" name="user_name" placeholder="Your Name" required />
        <input type="email" name="user_email" placeholder="Your Email" required />
        <input type="text" name="subject" placeholder="Subject" />
        <textarea name="message" placeholder="Your message..." rows="5" required />

        <div className="button-group">
          <button type="submit" className="enquiry-btn">Send</button>
          <button type="button" className="enquiry-btn cancel" onClick={onClose}>Close</button>
        </div>

        {submitted && <p className="enquiry-success">Enquiry sent successfully!</p>}
      </form>
    </div>
  );
};

export default EnquiryForm;
