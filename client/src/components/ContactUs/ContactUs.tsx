import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import './ContactUs.style.scss';
import axios from 'axios';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    inquiryType: 'general',
    travelDate: '',
    destination: '',
    message: '',
  });
  const [status, setStatus] = useState('');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/api/contact', formData);
      if (res.data.success) {
        setStatus('✅ Message sent successfully!');
        setFormData({
          name: '',
          email: '',
          inquiryType: 'general',
          travelDate: '',
          destination: '',
          message: '',
        });
      }
    } catch (err) {
      setStatus('❌ Failed to send message. Please try again.');
    }
  };

  return (
    <section className="contact-us" aria-label="Contact Us">
      <div className="contact-container">
        <div className="contact-header">
          <h2 className="section-title">Get In Touch</h2>
          <p className="section-subtitle">
            We're here to help you plan your dream vacation. Reach out with any questions or special requests!
          </p>
        </div>

        <div className="contact-content">
          <div className="contact-info">
            <div className="info-item">
              <MapPin size={28} aria-hidden="true" />
              <div>
                <h3>Address</h3>
                <p>123 Wanderlust Lane, Travel City, TC 12345</p>
              </div>
            </div>
            <div className="info-item">
              <Phone size={28} aria-hidden="true" />
              <div>
                <h3>Phone</h3>
                <p>+1 (800) 555-1234</p>
              </div>
            </div>
            <div className="info-item">
              <Mail size={28} aria-hidden="true" />
              <div>
                <h3>Email</h3>
                <p>support@wanderlust.com</p>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="contact-form" aria-label="Contact form">
            <div className="form-row">
              <div className="input-group">
                <label htmlFor="name-input" className="sr-only">
                  Full Name
                </label>
                <div className="input-wrapper">
                  <input
                    id="name-input"
                    type="text"
                    name="name"
                    placeholder="Full Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    aria-label="Full Name"
                  />
                </div>
              </div>

              <div className="input-group">
                <label htmlFor="email-input" className="sr-only">
                  Email Address
                </label>
                <div className="input-wrapper">
                  <input
                    id="email-input"
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    aria-label="Email Address"
                  />
                </div>
              </div>
            </div>

            <div className="form-row">
              <div className="input-group">
                <label htmlFor="inquiry-type" className="sr-only">
                  Inquiry Type
                </label>
                <div className="input-wrapper">
                  <select
                    id="inquiry-type"
                    name="inquiryType"
                    value={formData.inquiryType}
                    onChange={handleChange}
                    aria-label="Inquiry Type"
                  >
                    <option value="general">General Inquiry</option>
                    <option value="booking">Booking Assistance</option>
                    <option value="custom">Custom Travel Planning</option>
                    <option value="support">Customer Support</option>
                  </select>
                </div>
              </div>

              <div className="input-group">
                <label htmlFor="travel-date" className="sr-only">
                  Preferred Travel Date
                </label>
                <div className="input-wrapper">
                  <input
                    id="travel-date"
                    type="date"
                    name="travelDate"
                    value={formData.travelDate}
                    onChange={handleChange}
                    aria-label="Preferred Travel Date"
                  />
                </div>
              </div>
            </div>

            <div className="input-group">
              <label htmlFor="destination-input" className="sr-only">
                Preferred Destination
              </label>
              <div className="input-wrapper">
                <input
                  id="destination-input"
                  type="text"
                  name="destination"
                  placeholder="Preferred Destination (e.g., Paris, Bali)"
                  value={formData.destination}
                  onChange={handleChange}
                  aria-label="Preferred Destination"
                />
              </div>
            </div>

            <div className="input-group">
              <label htmlFor="message-input" className="sr-only">
                Your Message
              </label>
              <div className="input-wrapper">
                <textarea
                  id="message-input"
                  name="message"
                  placeholder="Tell us about your travel plans and preferences..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  aria-label="Your Message"
                />
              </div>
            </div>

            <button type="submit" className="submit-btn" aria-label="Send Message">
              <Send size={22} aria-hidden="true" /> Send Message
            </button>

            {status && (
              <p className={`status-message ${status.includes('successfully') ? 'success' : 'error'}`}>
                {status}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
