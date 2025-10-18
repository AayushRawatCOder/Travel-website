import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Clock, MessageCircle, Facebook, Instagram, Globe, CheckCircle } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
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
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const res = await axios.post('http://localhost:5000/api/contacts', formData);
      if (res.data.success) {
        setStatus('✅ Message sent successfully!');
        setFormData({ name: '', email: '', inquiryType: 'general', travelDate: '', destination: '', message: '' });
      }
    } catch (err) {
      setStatus('❌ Failed to send message. Please try again.');
    } finally {
      setIsLoading(false);
    }
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
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
                      <p>Rengrez Complex, First Floor</p>
                      <p>Near Jamia Masjid, Magam 193401</p>
                      <p>Kashmir, India</p>
                      <a 
                        href="https://maps.app.goo.gl/xBaZDeqhhhk4DRFU6?g_st=ipc" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="location-link"
                      >
                        View on Google Maps
                      </a>
                    </div>
                  </div>

                  <div className="info-item">
                    <div className="info-icon">
                      <Phone size={24} aria-hidden="true" />
                    </div>
                    <div>
                      <h4>Phone Numbers</h4>
                      <p>
                        <a href="tel:+919797718559">+91 97977 18559</a>
                      </p>
                      <p>
                        <a href="tel:+917006612065">+91 70066 12065</a>
                      </p>
                    </div>
                  </div>

                  <div className="info-item">
                    <div className="info-icon">
                      <Mail size={24} aria-hidden="true" />
                    </div>
                    <div>
                      <h4>Email Address</h4>
                      <p>
                        <a href="mailto:info@curiositytours.in">info@curiositytours.in</a>
                      </p>
                    </div>
                  </div>

                  <div className="info-item">
                    <div className="info-icon whatsapp-icon">
                      <FaWhatsapp size={24} aria-hidden="true" />
                    </div>
                    <div>
                      <h4>WhatsApp</h4>
                      <p>
                        <a 
                          href="http://wa.me/917006612065" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="whatsapp-link"
                        >
                          Chat with us on WhatsApp
                        </a>
                      </p>
                    </div>
                  </div>

                  <div className="info-item">
                    <div className="info-icon">
                      <Clock size={24} aria-hidden="true" />
                    </div>
                    <div>
                      <h4>Office Hours</h4>
                      <p>Monday - Saturday: 9:00 AM - 8:00 PM</p>
                      <p>Sunday: 10:00 AM - 6:00 PM</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="social-card">
                <h3 className="social-title">Connect With Us</h3>
                <div className="social-links">
                  <a 
                    href="https://www.facebook.com/share/16KFnrUrvv/?mibextid=wwXIfr" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="social-link facebook" 
                    aria-label="Facebook"
                  >
                    <Facebook size={20} />
                  </a>
                  <a 
                    href="https://www.instagram.com/curiosity_travels?igsh=MWRzMTRocTk0M204NA%3D%3D&utm_source=qr" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="social-link instagram" 
                    aria-label="Instagram"
                  >
                    <Instagram size={20} />
                  </a>
                  <a 
                    href="http://wa.me/917006612065" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="social-link whatsapp" 
                    aria-label="WhatsApp"
                  >
                    <FaWhatsapp size={20} />
                  </a>
                  <a 
                    href="mailto:info@curiositytours.in" 
                    className="social-link email" 
                    aria-label="Email"
                  >
                    <Mail size={20} />
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
                      placeholder="e.g., Kashmir, Gulmarg, Pahalgam"
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

                <button type="submit" className="submit-btn" aria-label="Send Message" disabled={isLoading}>
                  <Send size={20} aria-hidden="true" />
                  <span>{isLoading ? 'Sending...' : 'Send Message'}</span>
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
              <p className="map-description">Stop by our office for personalized travel planning assistance. Our expert team is ready to help you create your dream vacation to Kashmir and beyond.</p>
              <div className="map-features">
                <div className="map-feature">
                  <MapPin size={20} />
                  <span>Rengrez Complex, Magam</span>
                </div>
                <div className="map-feature">
                  <Phone size={20} />
                  <span>Call: +91 70066 12065</span>
                </div>
              </div>
              <a 
                href="https://maps.app.goo.gl/xBaZDeqhhhk4DRFU6?g_st=ipc" 
                target="_blank" 
                rel="noopener noreferrer"
                className="directions-btn"
              >
                <MapPin size={18} />
                <span>Get Directions</span>
              </a>
            </div>
            <div className="map-embed">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3307.8!2d74.6!3d34.0!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzTCsDAwJzAwLjAiTiA3NMKwMzYnMDAuMCJF!5e0!3m2!1sen!2sin!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0, borderRadius: '20px' }}
                allowFullScreen
                loading="lazy"
                title="Curiosity Tours Office Location"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;
