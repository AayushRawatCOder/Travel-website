import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Clock, MessageCircle, Facebook, Twitter, Instagram, Linkedin, Globe, Calendar, CheckCircle } from 'lucide-react';
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

  const faqs = [
    {
      question: 'What is your cancellation policy?',
      answer: 'We offer flexible cancellation up to 30 days before departure with a full refund. Cancellations made 15-30 days before departure receive a 50% refund.'
    },
    {
      question: 'Do you offer customized travel packages?',
      answer: 'Yes! We specialize in creating personalized itineraries tailored to your preferences, budget, and travel style. Contact us to discuss your dream vacation.'
    },
    {
      question: 'What payment methods do you accept?',
      answer: 'We accept all major credit cards, debit cards, UPI, net banking, and offer EMI options for packages above ₹50,000.'
    },
    {
      question: 'Are your tour guides certified?',
      answer: 'Absolutely! All our tour guides are certified, experienced professionals with extensive local knowledge and multilingual capabilities.'
    },
  ];

  return (
    <div className="contact-page">
      <section className="contact-hero">
        <div className="hero-background" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=1920&q=80')" }}></div>
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <div className="hero-badge">CONTACT US</div>
          <h1 className="hero-title">Let's Plan Your Next Adventure</h1>
          <p className="hero-subtitle">Our travel experts are ready to help you create unforgettable memories</p>
        </div>
      </section>

      <section className="contact-us" aria-label="Contact Us">
        <div className="contact-container">
          <div className="contact-content">
            <div className="contact-sidebar">
              <div className="contact-info-card">
                <h3 className="info-card-title">Get In Touch</h3>
                <p className="info-card-subtitle">We're here to answer all your travel questions</p>

                <div className="contact-info">
                  <div className="info-item">
                    <div className="info-icon">
                      <MapPin size={24} aria-hidden="true" />
                    </div>
                    <div>
                      <h4>Office Address</h4>
                      <p>123 Wanderlust Lane, Travel City, Mumbai 400001</p>
                    </div>
                  </div>

                  <div className="info-item">
                    <div className="info-icon">
                      <Phone size={24} aria-hidden="true" />
                    </div>
                    <div>
                      <h4>Phone Number</h4>
                      <p>+91 123-456-7890</p>
                      <p>+91 098-765-4321</p>
                    </div>
                  </div>

                  <div className="info-item">
                    <div className="info-icon">
                      <Mail size={24} aria-hidden="true" />
                    </div>
                    <div>
                      <h4>Email Address</h4>
                      <p>info@indiawander.com</p>
                      <p>support@indiawander.com</p>
                    </div>
                  </div>

                  <div className="info-item">
                    <div className="info-icon">
                      <Clock size={24} aria-hidden="true" />
                    </div>
                    <div>
                      <h4>Office Hours</h4>
                      <p>Monday - Friday: 9:00 AM - 7:00 PM</p>
                      <p>Saturday: 10:00 AM - 5:00 PM</p>
                      <p>Sunday: Closed</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="social-card">
                <h3 className="social-title">Connect With Us</h3>
                <div className="social-links">
                  <a href="#" className="social-link" aria-label="Facebook">
                    <Facebook size={20} />
                  </a>
                  <a href="#" className="social-link" aria-label="Twitter">
                    <Twitter size={20} />
                  </a>
                  <a href="#" className="social-link" aria-label="Instagram">
                    <Instagram size={20} />
                  </a>
                  <a href="#" className="social-link" aria-label="LinkedIn">
                    <Linkedin size={20} />
                  </a>
                </div>
              </div>
            </div>

            <div className="contact-form-wrapper">
              <form onSubmit={handleSubmit} className="contact-form" aria-label="Contact form">
                <div className="form-header">
                  <MessageCircle size={32} />
                  <h3>Send Us a Message</h3>
                  <p>Fill out the form below and we'll get back to you within 24 hours</p>
                </div>

                <div className="form-row">
                  <div className="input-group">
                    <label htmlFor="name-input">Full Name</label>
                    <div className="input-wrapper">
                      <input
                        id="name-input"
                        type="text"
                        name="name"
                        placeholder="Enter your full name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        aria-label="Full Name"
                      />
                    </div>
                  </div>

                  <div className="input-group">
                    <label htmlFor="email-input">Email Address</label>
                    <div className="input-wrapper">
                      <input
                        id="email-input"
                        type="email"
                        name="email"
                        placeholder="Enter your email"
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
                    <label htmlFor="inquiry-type">Inquiry Type</label>
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
                    <label htmlFor="travel-date">Preferred Travel Date</label>
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
                  <label htmlFor="destination-input">Preferred Destination</label>
                  <div className="input-wrapper">
                    <input
                      id="destination-input"
                      type="text"
                      name="destination"
                      placeholder="e.g., Kerala, Rajasthan, Goa"
                      value={formData.destination}
                      onChange={handleChange}
                      aria-label="Preferred Destination"
                    />
                  </div>
                </div>

                <div className="input-group">
                  <label htmlFor="message-input">Your Message</label>
                  <div className="input-wrapper">
                    <textarea
                      id="message-input"
                      name="message"
                      placeholder="Tell us about your travel plans, preferences, and any special requirements..."
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      aria-label="Your Message"
                    />
                  </div>
                </div>

                <button type="submit" className="submit-btn" aria-label="Send Message">
                  <Send size={20} aria-hidden="true" />
                  <span>Send Message</span>
                </button>

                {status && (
                  <div className={`status-message ${status.includes('successfully') ? 'success' : 'error'}`}>
                    {status}
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>

      <section className="faq-section">
        <div className="faq-container">
          <div className="section-header">
            <div className="section-badge">FAQ</div>
            <h2 className="section-title">Frequently Asked Questions</h2>
            <p className="section-subtitle">Find quick answers to common questions about our services</p>
          </div>

          <div className="faq-grid">
            {faqs.map((faq, index) => (
              <div key={index} className="faq-card" style={{ '--faq-index': index } as React.CSSProperties}>
                <div className="faq-icon">
                  <CheckCircle size={24} />
                </div>
                <h3 className="faq-question">{faq.question}</h3>
                <p className="faq-answer">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="map-section">
        <div className="map-container">
          <div className="map-content">
            <div className="map-info">
              <div className="map-badge">
                <Globe size={20} />
                <span>VISIT OUR OFFICE</span>
              </div>
              <h2 className="map-title">Find Us Here</h2>
              <p className="map-description">Stop by our office for personalized travel planning assistance. Our expert team is ready to help you create your dream vacation.</p>
              <div className="map-features">
                <div className="map-feature">
                  <Calendar size={20} />
                  <span>Schedule a Visit</span>
                </div>
                <div className="map-feature">
                  <Phone size={20} />
                  <span>Call Ahead</span>
                </div>
              </div>
            </div>
            <div className="map-embed">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d241317.11609823277!2d72.74109995709657!3d19.082177784059642!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c6306644edc1%3A0x5da4ed8f8d648c69!2sMumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0, borderRadius: '20px' }}
                allowFullScreen
                loading="lazy"
                title="Office Location Map"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;