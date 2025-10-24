import React, { useState } from "react";
import { FaEnvelope, FaMapMarkerAlt, FaPhone } from "react-icons/fa";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // You can connect API, EmailJS, etc. here
  };
  return (
    <div className="bg-theme">
    <div className="contact-section">
        <div className="container-fluid">
      <div className="row">
      {/* LEFT SIDE */}
      <div className="col-md-4">
      <div className="contact-info">
        <h2 className="contact-title">Schedule a free consultation</h2>

        <div className="contact-details">
          <div className="contact-item">
            <FaEnvelope className="contact-icon" />
            <div>
            <p className="label">Email Address</p>
            <a className="value" href="mailto:vanshikakoshti1999@gmail.com">vanshikakoshti1999@gmail.com</a>
            </div>
          </div>

          <div className="contact-item">
            <FaMapMarkerAlt className="contact-icon" />
            <div>
            <p className="label">Current Address</p>
            <a className="value">Ahmedabad, Gujarat, India.</a>
            </div>
          </div>

          <div className="contact-item">
            <FaPhone className="contact-icon" />
            <div>
            <p className="label">Phone No</p>
            <a className="value">Call : +91 12345 6782</a>
            </div>
          </div>
        </div>
      </div>
    </div>
      {/* RIGHT SIDE */}
      <div className="col-md-8">
      <div className="contact-form">
        <h5 className="sub-heading">Contact Me</h5>
        <h2 className="form-title">Let’s build something together</h2>

        <form onSubmit={handleSubmit}>
          <div className="form-row">
            <input
              type="text"
              name="name"
              placeholder="Full name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email address"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-row">
            <input
              type="text"
              name="phone"
              placeholder="Phone number"
              value={formData.phone}
              onChange={handleChange}
            />
            <select
              name="service"
              value={formData.service}
              onChange={handleChange}
            >
              <option value="">— Please choose an option —</option>
              <option value="web">Web Development</option>
              <option value="design">UI/UX Design</option>
              <option value="marketing">Marketing</option>
            </select>
          </div>

          <textarea
            name="message"
            placeholder="Message"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>

          <button type="submit" className="submit-btn">
            Send Your Message
          </button>
        </form>
      </div>
      </div>
      </div>
      </div>
    </div>
    </div>
  );
};

