import React, { useState, useEffect } from 'react';
import { MapPin, Calendar, ArrowRight, Star, Clock, ChevronLeft, ChevronRight, CheckCircle, Phone, User, Shield, Heart, Mountain, Compass, Sparkles, Award, Facebook, Twitter, Instagram, Linkedin, Mail, Users, Headphones, Globe } from 'lucide-react';
import './Main.style.scss';
import { destinations } from '../../data/destinations';
import { useNavigate } from 'react-router-dom';


const HomePage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [selectedTheme, setSelectedTheme] = useState<string | null>(null);
  const [formData, setFormData] = useState({ name: '', email: '', interest: '' });

  const navigate = useNavigate();

  const handleExploreClick = (destinationId: string) => {
    navigate(`/destination/${destinationId}`);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const carouselImages = [
    { url: 'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=1920&q=80', title: 'Discover Incredible India', subtitle: 'Journey through majestic mountains and serene landscapes', alt: 'Indian landscape' },
    { url: 'https://images.unsplash.com/photo-1548013146-13a21f08d0f7?w=1920&q=80', title: 'Kerala Backwater Magic', subtitle: 'Immerse in tropical paradise and tranquil beauty', alt: 'Kerala backwaters' },
    { url: 'https://images.unsplash.com/photo-1477587458883-47145ed94245?w=1920&q=80', title: 'Royal Rajasthan Heritage', subtitle: 'Experience magnificent palaces and vibrant culture', alt: 'Rajasthan palace' },
    { url: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=1920&q=80', title: 'Goa Beach Paradise', subtitle: 'Relax on golden shores with breathtaking sunsets', alt: 'Goa beach sunset' },
  ];

  const packages = [
    { title: 'Ladakh Adventure', image: 'https://images.unsplash.com/photo-1589308078059-be1415eab4c3?w=600&q=80', price: '₹25,000', duration: '7 Days', highlights: ['Mountain bike expeditions', 'Ancient Buddhist monasteries', 'High altitude passes'], theme: 'adventure', rating: 5.0, badge: 'Bestseller', alt: 'Ladakh adventure biking' },
    { title: 'Kerala Romance', image: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=600&q=80', price: '₹15,000', duration: '5 Days', highlights: ['Luxury houseboat stay', 'Traditional Ayurvedic spa', 'Beach resort relaxation'], theme: 'honeymoon', rating: 4.9, badge: 'Premium', alt: 'Kerala romantic houseboat' },
    { title: 'Rajasthan Royals', image: 'https://images.unsplash.com/photo-1599661046289-e31897846e41?w=600&q=80', price: '₹20,000', duration: '8 Days', highlights: ['Heritage palace stay', 'Desert camel safari', 'Cultural performances'], theme: 'luxury', rating: 4.8, badge: 'Luxury', alt: 'Rajasthan luxury palace' },
    { title: 'Kashmir Paradise', image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80', price: '₹18,000', duration: '6 Days', highlights: ['Romantic Shikara rides', 'Mughal garden tours', 'Snow skiing adventure'], theme: 'honeymoon', rating: 4.9, badge: 'Popular', alt: 'Kashmir dal lake paradise' },
    { title: 'Goa Beach Escape', image: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=600&q=80', price: '₹12,000', duration: '4 Days', highlights: ['Beachside experiences', 'Water sports thrills', 'Fresh seafood dining'], theme: 'adventure', rating: 4.7, badge: 'Hot Deal', alt: 'Goa beach sunset bliss' },
    { title: 'Sikkim Wildlife', image: 'https://images.unsplash.com/photo-1605649487212-47bdab064df7?w=600&q=80', price: '₹22,000', duration: '7 Days', highlights: ['National park safaris', 'Mountain trekking trails', 'Bird watching tours'], theme: 'wildlife', rating: 4.8, badge: 'Eco-Friendly', alt: 'Sikkim wildlife sanctuary' },
    { title: 'Varanasi Spiritual', image: 'https://images.unsplash.com/photo-1561361513-2d000a50f0dc?w=600&q=80', price: '₹10,000', duration: '3 Days', highlights: ['Sacred Ganga aarti', 'Ancient temple visits', 'Sunrise boat rides'], theme: 'spiritual', rating: 4.6, badge: 'Cultural', alt: 'Varanasi spiritual ghats' },
    { title: 'Andaman Luxury', image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=600&q=80', price: '₹30,000', duration: '6 Days', highlights: ['5-star beach resort', 'Scuba diving sessions', 'Private island hopping'], theme: 'luxury', rating: 4.9, badge: 'Exclusive', alt: 'Andaman luxury resort beach' },
  ].map((pkg, index) => ({ ...pkg, index }));

  const filteredPackages = selectedTheme ? packages.filter(pkg => pkg.theme === selectedTheme) : packages;

  const themes = [
    { name: 'All', icon: <Sparkles size={28} />, color: 'gradient', alt: null, image: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=800&q=80' },
    { name: 'Adventure', icon: <Mountain size={28} />, color: '#ff6b35', alt: 'Adventure experiences', image: 'https://images.unsplash.com/photo-1551632811-561732d1e306?w=800&q=80' },
    { name: 'Spiritual', icon: <Compass size={28} />, color: '#a855f7', alt: 'Spiritual journeys', image: 'https://images.unsplash.com/photo-1532274402911-5a369e4c4bb5?w=800&q=80' },
    { name: 'Luxury', icon: <Award size={28} />, color: '#fbbf24', alt: 'Luxury getaways', image: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?w=800&q=80' },
    { name: 'Honeymoon', icon: <Heart size={28} />, color: '#ec4899', alt: 'Romantic destinations', image: 'https://images.unsplash.com/photo-1519046904884-53103b34b206?w=800&q=80' },
    { name: 'Wildlife', icon: <Globe size={28} />, color: '#10b981', alt: 'Wildlife adventures', image: 'https://images.unsplash.com/photo-1549366021-9f761d450615?w=800&q=80' },
  ];

  const whyItems = [
    { icon: <Headphones size={48} />, title: '24/7 Support', desc: 'Round-the-clock assistance for complete peace of mind throughout your journey.', color: '#0ea5e9', stat: '98% Satisfaction', image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=600&q=80' },
    { icon: <Shield size={48} />, title: 'Verified Hotels', desc: 'Handpicked and verified accommodations ensuring quality and comfort.', color: '#10b981', stat: '500+ Properties', image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&q=80' },
    { icon: <Users size={48} />, title: 'Expert Guides', desc: 'Professional local guides to enhance your travel experience.', color: '#a855f7', stat: '200+ Experts', image: 'https://images.unsplash.com/photo-1528543606781-2f6e6857f318?w=600&q=80' },
    { icon: <CheckCircle size={48} />, title: 'Easy Refunds', desc: 'Hassle-free refund process for flexible and worry-free planning.', color: '#f59e0b', stat: '100% Guarantee', image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&q=80' },
  ].map((item, index) => ({ ...item, index }));

  const testimonials = [
    { photo: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80', name: 'Priya Sharma', location: 'Mumbai', review: 'An absolutely unforgettable trip to Kerala! Every arrangement was perfect and the service exceeded all my expectations.', rating: 5, alt: 'Priya Sharma testimonial' },
    { photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80', name: 'Raj Patel', location: 'Delhi', review: 'The Ladakh adventure was thrilling beyond words. Highly recommend their professional and attentive services.', rating: 5, alt: 'Raj Patel testimonial' },
    { photo: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80', name: 'Anita Verma', location: 'Bangalore', review: 'Spiritual journey to Varanasi was truly soul-touching. The guides were knowledgeable and respectful.', rating: 5, alt: 'Anita Verma testimonial' },
  ].map((test, index) => ({ ...test, index }));

  const blogs = [
    { title: 'Hidden Gems of India', image: 'https://images.unsplash.com/photo-1548013146-13a21f08d0f7?w=600&q=80', excerpt: 'Discover lesser-known destinations across India that offer unique and authentic experiences.', date: 'March 15, 2025', category: 'Destinations', alt: 'Hidden gems India exploration' },
    { title: 'Kerala Backwaters Guide', image: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=600&q=80', excerpt: 'Everything you need to know for planning the perfect backwater journey in Kerala.', date: 'March 12, 2025', category: 'Travel Tips', alt: 'Kerala backwaters complete guide' },
    { title: 'Ladakh Adventures', image: 'https://images.unsplash.com/photo-1589308078059-be1415eab4c3?w=600&q=80', excerpt: 'From mountain biking to high-altitude trekking, explore the thrills that Ladakh offers.', date: 'March 10, 2025', category: 'Adventure', alt: 'Ladakh adventure activities' },
  ].map((blog, index) => ({ ...blog, index }));

  // Map destinations to include index
  const indexedDestinations = destinations.map((dest, index) => ({ ...dest, index }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <div className="homepage">
      <section className="hero-carousel" aria-label="Featured Indian destinations">
        <div className="carousel-container">
          {carouselImages.map((img, index) => (
            <div
              key={index}
              className={`carousel-slide ${index === currentSlide ? 'active' : ''}`}
              style={{ backgroundImage: `url(${img.url})` }}
              role="img"
              aria-label={img.alt}
            >
              <div className="carousel-overlay"></div>
              <div className="carousel-content">
                <div className="carousel-badge">EXPLORE INDIA</div>
                <h1 className="carousel-title">{img.title}</h1>
                <p className="carousel-subtitle">{img.subtitle}</p>
              </div>
            </div>
          ))}
          <button
            className="carousel-btn prev"
            onClick={() => setCurrentSlide((currentSlide - 1 + carouselImages.length) % carouselImages.length)}
            aria-label="Previous slide"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            className="carousel-btn next"
            onClick={() => setCurrentSlide((currentSlide + 1) % carouselImages.length)}
            aria-label="Next slide"
          >
            <ChevronRight size={24} />
          </button>
          <div className="carousel-dots" role="tablist">
            {carouselImages.map((_, index) => (
              <button
                key={index}
                className={`dot ${index === currentSlide ? 'active' : ''}`}
                onClick={() => setCurrentSlide(index)}
                aria-label={`Go to slide ${index + 1}`}
                role="tab"
                aria-selected={index === currentSlide}
              />
            ))}
          </div>
        </div>

        <div className="search-card" role="search">
          <div className="search-form">
            <div className="form-row">
              <div className="input-group">
                <label htmlFor="destination-input" className="sr-only">Destination</label>
                <div className="input-wrapper">
                  <MapPin className="input-icon" size={20} aria-hidden="true" />
                  <input
                    id="destination-input"
                    type="text"
                    placeholder="Where to?"
                    aria-label="Destination"
                  />
                </div>
              </div>
              <div className="input-group">
                <label htmlFor="date-input" className="sr-only">Date</label>
                <div className="input-wrapper">
                  <Calendar className="input-icon" size={20} aria-hidden="true" />
                  <input
                    id="date-input"
                    type="date"
                    aria-label="Travel date"
                  />
                </div>
              </div>
              <button className="search-btn" aria-label="Explore destinations">
                Explore <ArrowRight size={20} aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>
      </section>

      <section id="destinations" className="destinations-section" aria-label="Top destinations in India">
        <div className="section-header">
          <div className="section-badge">DESTINATIONS</div>
          <h2 className="section-title">Explore Top Destinations</h2>
          <p className="section-subtitle">Discover the majestic mountains of Ladakh and the paradise valleys of Kashmir</p>
        </div>
        <div className="destinations-grid">
          {indexedDestinations.map((dest) => (
            <div key={dest.index} className="destination-card" style={{ '--index': dest.index } as React.CSSProperties}>
              <div className="card-image-container">
                <div className="card-image" style={{ backgroundImage: `url(${dest.image || dest.hero})` }} role="img" aria-label={dest.alt || `Image of ${dest.name}`}></div>
                <div className="image-gradient"></div>
                <div className="category-badge">{dest.category || dest.region}</div>
                <div className="duration-badge">
                  <Clock size={14} />
                  {dest.duration || 'Varies'}
                </div>
              </div>
              <div className="card-body">
                <h3 className="destination-name">{dest.name}</h3>
                <p className="destination-desc">{dest.description || dest.tagline}</p>
                <div className="card-stats">
                  <div className="stat-rating">
                    <Star size={14} fill="currentColor" />
                    <span>{dest.rating || 'N/A'}</span>
                    <span className="review-count">({dest.reviews || 0})</span>
                  </div>
                </div>
                <div className="card-actions">
                  <div className="price-info">
                    <span className="from-text">From</span>
                    <span className="price-amount">{dest.price || 'Contact for pricing'}</span>
                  </div>
                  <button className="explore-btn" onClick={() => handleExploreClick(dest.id)}>
                    Explore
                    <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="themes-section" aria-label="Experience themes">
        <div className="section-header">
          <div className="section-badge">EXPERIENCES</div>
          <h2 className="section-title">Choose Your Adventure</h2>
          <p className="section-subtitle">Select your perfect travel style and discover tailored experiences</p>
        </div>
        <div className="themes-grid">
          {themes.map((theme, index) => (
            <div 
              key={theme.name} 
              className={`theme-card ${selectedTheme === (theme.name === 'All' ? null : theme.name.toLowerCase()) ? 'active' : ''}`} 
              onClick={() => setSelectedTheme(theme.name === 'All' ? null : theme.name.toLowerCase())}
              style={{ '--index': index, '--theme-color': theme.color } as React.CSSProperties}
            >
              <div className="theme-bg" style={{ backgroundImage: `url(${theme.image})` }}></div>
              <div className="theme-overlay"></div>
              <div className="theme-content">
                <div className="theme-icon">{theme.icon}</div>
                <h3 className="theme-title">{theme.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="packages" className="packages-section" aria-label="Popular packages">
        <div className="section-header">
          <div className="section-badge">PACKAGES</div>
          <h2 className="section-title">Featured Travel Packages</h2>
          <p className="section-subtitle">Handcrafted itineraries designed for unforgettable journeys</p>
        </div>
        <div className="packages-grid">
          {filteredPackages.map((pkg) => (
            <div key={pkg.index} className="package-card" style={{ '--index': pkg.index } as React.CSSProperties}>
              <div className="package-image-wrapper">
                <div className="package-image" style={{ backgroundImage: `url(${pkg.image})` }} role="img" aria-label={pkg.alt}></div>
                <div className="package-badge">{pkg.badge}</div>
              </div>
              <div className="package-content">
                <h3 className="package-title">{pkg.title}</h3>
                <div className="package-meta">
                  <div className="meta-item">
                    <Clock size={16} aria-hidden="true" />
                    <span>{pkg.duration}</span>
                  </div>
                  <div className="meta-item rating">
                    <Star size={16} fill="currentColor" aria-hidden="true" />
                    <span>{pkg.rating}</span>
                  </div>
                </div>
                <ul className="package-highlights">
                  {pkg.highlights.map((highlight, i) => (
                    <li key={i}>
                      <CheckCircle size={16} aria-hidden="true" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
                <div className="package-footer">
                  <div className="price-section">
                    <span className="price-label">From</span>
                    <span className="package-price">{pkg.price}</span>
                  </div>
                  <button className="book-btn" aria-label={`Book ${pkg.title}`}>
                    <span>Book Now</span>
                    <ArrowRight size={18} aria-hidden="true" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="why-section" aria-label="Why travel with us">
        <div className="section-header">
          <div className="section-badge">WHY CHOOSE US</div>
          <h2 className="section-title">Your Trusted Travel Partner</h2>
          <p className="section-subtitle">Experience excellence with our commitment to creating unforgettable journeys</p>
        </div>
        <div className="why-grid">
          {whyItems.map((item) => (
            <div key={item.index} className="why-card" style={{ '--index': item.index, '--icon-color': item.color } as React.CSSProperties}>
              <div className="why-image" style={{ backgroundImage: `url(${item.image})` }}></div>
              <div className="why-content-wrapper">
                <div className="why-icon-wrapper">
                  {item.icon}
                </div>
                <div className="why-content">
                  <h3 className="why-title">{item.title}</h3>
                  <p className="why-desc">{item.desc}</p>
                  <div className="why-stat">{item.stat}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="testimonials-section" aria-label="Testimonials">
        <div className="section-header">
          <div className="section-badge">TESTIMONIALS</div>
          <h2 className="section-title">Traveler Stories</h2>
          <p className="section-subtitle">Real experiences and feedback from our satisfied explorers</p>
        </div>
        <div className="testimonials-grid">
          {testimonials.map((test) => (
            <div key={test.index} className="testimonial-card" style={{ '--index': test.index } as React.CSSProperties}>
              <div className="testimonial-header">
                <img src={test.photo} alt={test.alt} className="testimonial-photo" />
                <div className="testimonial-info">
                  <h4 className="testimonial-name">{test.name}</h4>
                  <p className="testimonial-location">{test.location}</p>
                </div>
              </div>
              <div className="testimonial-rating">
                {[...Array(test.rating)].map((_, i) => (
                  <Star key={i} size={14} fill="currentColor" />
                ))}
              </div>
              <p className="testimonial-review">"{test.review}"</p>
            </div>
          ))}
        </div>
      </section>

      <section className="blog-section" aria-label="Blog highlights">
        <div className="section-header">
          <div className="section-badge">BLOG</div>
          <h2 className="section-title">Travel Insights</h2>
          <p className="section-subtitle">Latest guides, tips and inspiring stories from around India</p>
        </div>
        <div className="blog-grid">
          {blogs.map((blog) => (
            <div key={blog.index} className="blog-card" style={{ '--index': blog.index } as React.CSSProperties}>
              <div className="blog-image-wrapper">
                <div className="blog-image" style={{ backgroundImage: `url(${blog.image})` }} role="img" aria-label={blog.alt}></div>
                <div className="blog-category">{blog.category}</div>
              </div>
              <div className="blog-content">
                <div className="blog-date">{blog.date}</div>
                <h3 className="blog-title">{blog.title}</h3>
                <p className="blog-excerpt">{blog.excerpt}</p>
                <button className="read-btn" aria-label={`Read more about ${blog.title}`}>
                  <span>Read More</span>
                  <ArrowRight size={18} aria-hidden="true" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="cta-section" aria-label="Call to action">
        <div className="cta-content">
          <div className="section-header">
            <div className="section-badge light">GET STARTED</div>
            <h2 className="section-title">Ready for Your Dream Adventure?</h2>
            <p className="section-subtitle">Share your details and let our experts craft the perfect journey for you</p>
          </div>
          <div className="cta-form" onClick={handleSubmit}>
            <div className="input-group">
              <User className="form-icon" size={18} />
              <input 
                type="text" 
                placeholder="Your Name" 
                className="cta-input" 
                aria-label="Name"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
              />
            </div>
            <div className="input-group">
              <Mail className="form-icon" size={18} />
              <input 
                type="email" 
                placeholder="Your Email" 
                className="cta-input" 
                aria-label="Email"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
              />
            </div>
            <div className="input-group">
              <MapPin className="form-icon" size={18} />
              <input 
                type="text" 
                placeholder="Destination Interest" 
                className="cta-input" 
                aria-label="Destination Interest"
                value={formData.interest}
                onChange={(e) => setFormData({...formData, interest: e.target.value})}
              />
            </div>
            <button type="submit" className="cta-btn" aria-label="Submit form">
              <span>Start Planning</span>
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </section>

      <footer className="footer" aria-label="Footer">
        <div className="footer-content">
          <div className="footer-section brand">
            <div className="footer-logo">
              <MapPin size={32} aria-hidden="true" />
              <span>IndiaWander</span>
            </div>
            <p>Your trusted companion for exploring the incredible beauty and diversity of India.</p>
            <div className="footer-social">
              <a href="#" aria-label="Facebook"><Facebook size={18} /></a>
              <a href="#" aria-label="Twitter"><Twitter size={18} /></a>
              <a href="#" aria-label="Instagram"><Instagram size={18} /></a>
              <a href="#" aria-label="LinkedIn"><Linkedin size={18} /></a>
            </div>
          </div>
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#destinations">Destinations</a></li>
              <li><a href="#packages">Packages</a></li>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Blog</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Contact Info</h4>
            <ul className="contact-list">
              <li>
                <Mail size={16} />
                <span>info@indiawander.com</span>
              </li>
              <li>
                <Phone size={16} />
                <span>+91 123-456-7890</span>
              </li>
              <li>
                <MapPin size={16} />
                <span>Mumbai, Maharashtra</span>
              </li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Newsletter</h4>
            <p>Subscribe for exclusive deals and travel inspiration</p>
            <div className="newsletter">
              <input type="email" placeholder="Your email" aria-label="Email for newsletter" />
              <button aria-label="Subscribe to newsletter">
                <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2025 IndiaWander. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;