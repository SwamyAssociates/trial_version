import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "./feedbackform.css";

const FeedbackForm = ({ onClose }) => {
  const form = useRef();
  const [submitted, setSubmitted] = useState(false);
  const [ratings, setRatings] = useState({
    quality: 0,
    pricing: 0,
    experience: 0,
    staff: 0,
  });

  const handleStarClick = (field, value) => {
    setRatings({ ...ratings, [field]: value });
  };

  const renderStars = (field) => {
    return [1, 2, 3, 4, 5].map((i) => (
      <span
        key={i}
        className={`star ${i <= ratings[field] ? "filled" : ""}`}
        onClick={() => handleStarClick(field, i)}
      >
        ★
      </span>
    ));
  };

  const sendEmail = (e) => {
    e.preventDefault();

    const formData = new FormData(form.current);
    formData.append("quality_rating", ratings.quality);
    formData.append("pricing_rating", ratings.pricing);
    formData.append("experience_rating", ratings.experience);
    formData.append("staff_rating", ratings.staff);

    emailjs
      .send("your_service_id", "your_template_id", Object.fromEntries(formData), "your_public_key")
      .then(() => {
        setSubmitted(true);
        setTimeout(() => onClose(), 3000);
      })
      .catch((error) => {
        console.error("EmailJS Error:", error.text);
      });
  };

  return (
    <div className="feedback-popup">
      <form ref={form} onSubmit={sendEmail} className="feedback-form">
        <h2>Feedback Form</h2>
        <input type="text" name="user_name" placeholder="Your Name" required />
        <input type="email" name="user_email" placeholder="Your Email" required />

        <label>Quality of Service</label>
        <div className="star-group">{renderStars("quality")}</div>

        <label>Pricing (Cost Effectiveness)</label>
        <div className="star-group">{renderStars("pricing")}</div>

        <label>Customer Experience</label>
        <div className="star-group">{renderStars("experience")}</div>

        <label>Staff Behaviour</label>
        <div className="star-group">{renderStars("staff")}</div>

        <textarea name="message" placeholder="Additional comments..." rows="4" />

        <div className="button-group">
          <button type="submit" className="feedback-btn">Submit</button>
          <button type="button" className="feedback-btn cancel" onClick={onClose}>Close</button>
        </div>

        {submitted && <p className="feedback-success">Thank you for your feedback!</p>}
      </form>
    </div>
  );
};

export default FeedbackForm;
