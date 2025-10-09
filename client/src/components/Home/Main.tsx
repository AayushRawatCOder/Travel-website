import React, { useState, useEffect } from 'react';
import { MapPin, Calendar, ArrowRight, Star, Clock, ChevronLeft, ChevronRight, CheckCircle, Phone, User, DollarSign, Facebook, Twitter, Instagram } from 'lucide-react';
import './Main.style.scss';

const HomePage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [selectedTheme, setSelectedTheme] = useState(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const carouselImages = [
    { url: 'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=1920&q=80', title: 'Discover Incredible India', subtitle: 'Experience majestic mountains and serene landscapes', alt: 'Indian landscape' },
    { url: 'https://images.unsplash.com/photo-1548013146-13a21f08d0f7?w=1920&q=80', title: 'Explore Kerala Backwaters', subtitle: 'Immerse in lush tropical beauty and tranquil waters', alt: 'Kerala backwaters' },
    { url: 'https://images.unsplash.com/photo-1477587458883-47145ed94245?w=1920&q=80', title: 'Visit Royal Rajasthan', subtitle: 'Discover magnificent palaces and vibrant culture', alt: 'Rajasthan palace' },
    { url: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=1920&q=80', title: 'Relax in Paradise Goa', subtitle: 'Unwind on pristine beaches with stunning sunsets', alt: 'Goa beach sunset' },
  ];

  const destinations = [
    { name: 'Rajasthan', image: 'https://images.unsplash.com/photo-1599661046289-e31897846e41?w=600&q=80', price: '₹15,000', rating: 4.8, alt: 'Rajasthan desert fort' },
    { name: 'Kashmir', image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80', price: '₹20,000', rating: 4.9, alt: 'Kashmir valley mountains' },
    { name: 'Goa', image: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=600&q=80', price: '₹10,000', rating: 4.7, alt: 'Goa beach palm trees' },
    { name: 'Sikkim', image: 'https://images.unsplash.com/photo-1605649487212-47bdab064df7?w=600&q=80', price: '₹18,000', rating: 4.8, alt: 'Sikkim mountain peaks' },
    { name: 'Kerala', image: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=600&q=80', price: '₹12,000', rating: 4.9, alt: 'Kerala houseboat backwaters' },
    { name: 'Ladakh', image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80', price: '₹25,000', rating: 5.0, alt: 'Ladakh mountain landscape' },
    { name: 'Andaman', image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=600&q=80', price: '₹22,000', rating: 4.7, alt: 'Andaman crystal clear beach' },
    { name: 'Varanasi', image: 'https://images.unsplash.com/photo-1561361513-2d000a50f0dc?w=600&q=80', price: '₹8,000', rating: 4.6, alt: 'Varanasi river ghats evening' },
  ].map((dest, index) => ({ ...dest, index }));

  const packages = [
    { title: 'Ladakh Adventure', image: 'https://images.unsplash.com/photo-1589308078059-be1415eab4c3?w=600&q=80', price: '₹25,000', duration: '7 Days', highlights: ['Mountain bike expeditions', 'Ancient Buddhist monasteries', 'High altitude mountain passes'], theme: 'adventure', rating: 5.0, alt: 'Ladakh adventure biking' },
    { title: 'Kerala Backwaters', image: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=600&q=80', price: '₹15,000', duration: '5 Days', highlights: ['Luxury private houseboat', 'Traditional Ayurvedic spa', 'Beach resort relaxation'], theme: 'honeymoon', rating: 4.9, alt: 'Kerala romantic houseboat' },
    { title: 'Rajasthan Royals', image: 'https://images.unsplash.com/photo-1599661046289-e31897846e41?w=600&q=80', price: '₹20,000', duration: '8 Days', highlights: ['Heritage palace stay', 'Camel desert safari', 'Cultural dance performances'], theme: 'luxury', rating: 4.8, alt: 'Rajasthan luxury palace' },
    { title: 'Kashmir Paradise', image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80', price: '₹18,000', duration: '6 Days', highlights: ['Romantic Shikara boat rides', 'Mughal garden exploration', 'Snow skiing activities'], theme: 'honeymoon', rating: 4.9, alt: 'Kashmir dal lake paradise' },
    { title: 'Goa Beach Bliss', image: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=600&q=80', price: '₹12,000', duration: '4 Days', highlights: ['Beachside party experiences', 'Water sports adventures', 'Fresh seafood cuisine'], theme: 'adventure', rating: 4.7, alt: 'Goa beach sunset bliss' },
    { title: 'Sikkim Wildlife', image: 'https://images.unsplash.com/photo-1605649487212-47bdab064df7?w=600&q=80', price: '₹22,000', duration: '7 Days', highlights: ['National park safari tours', 'Mountain trekking trails', 'Bird watching expeditions'], theme: 'wildlife', rating: 4.8, alt: 'Sikkim wildlife sanctuary' },
    { title: 'Varanasi Spiritual', image: 'https://images.unsplash.com/photo-1561361513-2d000a50f0dc?w=600&q=80', price: '₹10,000', duration: '3 Days', highlights: ['Sacred Ganga aarti ceremony', 'Ancient temple pilgrimages', 'Sunrise boat rides'], theme: 'spiritual', rating: 4.6, alt: 'Varanasi spiritual ghats' },
    { title: 'Andaman Luxury', image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=600&q=80', price: '₹30,000', duration: '6 Days', highlights: ['5-star beachfront resort', 'Professional scuba diving', 'Private island hopping'], theme: 'luxury', rating: 4.9, alt: 'Andaman luxury resort beach' },
  ].map((pkg, index) => ({ ...pkg, index }));

  const filteredPackages = selectedTheme ? packages.filter(pkg => pkg.theme === selectedTheme) : packages;

  const themes = [
    { name: 'All', image: null, alt: null },
    { name: 'Adventure', image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&q=80', alt: 'Adventure in mountains' },
    { name: 'Spiritual', image: 'https://images.unsplash.com/photo-1561361513-2d000a50f0dc?w=400&q=80', alt: 'Spiritual temples India' },
    { name: 'Luxury', image: 'https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=400&q=80', alt: 'Luxury resort India' },
    { name: 'Honeymoon', image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=400&q=80', alt: 'Romantic honeymoon destination' },
    { name: 'Wildlife', image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=400&q=80', alt: 'Wildlife safari tiger' },
  ];

  const whyItems = [
    { icon: <Phone size={48} className="why-icon" />, title: '24/7 Support', desc: 'Round-the-clock assistance for complete peace of mind throughout your journey.' },
    { icon: <CheckCircle size={48} className="why-icon" />, title: 'Verified Hotels', desc: 'Handpicked and verified accommodations ensuring quality and comfort.' },
    { icon: <User size={48} className="why-icon" />, title: 'Expert Guides', desc: 'Professional local guides to enhance your travel experience.' },
    { icon: <DollarSign size={48} className="why-icon" />, title: 'Easy Refunds', desc: 'Hassle-free refund process for flexible and worry-free planning.' },
  ].map((item, index) => ({ ...item, index }));

  const testimonials = [
    { photo: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80', name: 'Priya Sharma', review: 'An absolutely unforgettable trip to Kerala! Every arrangement was perfect and the service exceeded expectations.', alt: 'Priya Sharma testimonial' },
    { photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80', name: 'Raj Patel', review: 'The Ladakh adventure was thrilling beyond words. Highly recommend their professional and attentive services.', alt: 'Raj Patel testimonial' },
    { photo: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80', name: 'Anita Verma', review: 'Spiritual journey to Varanasi was truly soul-touching. The guides were knowledgeable and respectful.', alt: 'Anita Verma testimonial' },
  ].map((test, index) => ({ ...test, index }));

  const blogs = [
    { title: 'Top 10 Hidden Gems in India', image: 'https://images.unsplash.com/photo-1548013146-13a21f08d0f7?w=600&q=80', excerpt: 'Discover lesser-known destinations across India that offer unique and authentic experiences.', alt: 'Hidden gems India exploration' },
    { title: 'Ultimate Guide to Kerala Backwaters', image: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=600&q=80', excerpt: 'Everything you need to know for planning the perfect backwater journey in Kerala.', alt: 'Kerala backwaters complete guide' },
    { title: 'Adventure Activities in Ladakh', image: 'https://images.unsplash.com/photo-1589308078059-be1415eab4c3?w=600&q=80', excerpt: 'From mountain biking to high-altitude trekking, explore the thrills that Ladakh offers.', alt: 'Ladakh adventure activities' },
  ].map((blog, index) => ({ ...blog, index }));

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
                  <MapPin className="input-icon" size={22} aria-hidden="true" />
                  <input
                    id="destination-input"
                    type="text"
                    placeholder="Where do you want to go?"
                    aria-label="Destination"
                  />
                </div>
              </div>
              <div className="input-group">
                <label htmlFor="date-input" className="sr-only">Date</label>
                <div className="input-wrapper">
                  <Calendar className="input-icon" size={22} aria-hidden="true" />
                  <input
                    id="date-input"
                    type="date"
                    aria-label="Travel date"
                  />
                </div>
              </div>
              <button className="search-btn" aria-label="Explore destinations">
                Explore <ArrowRight size={22} aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>
      </section>

      <section id="destinations" className="destinations-section" aria-label="Top destinations in India">
        <div className="section-header">
          <h2 className="section-title">Top Destinations</h2>
          <p className="section-subtitle">Discover India's most captivating and breathtaking places</p>
        </div>
        <div className="destinations-grid">
          {destinations.map((dest) => (
            <div key={dest.index} className="destination-card" style={{ '--index': dest.index } as React.CSSProperties}>
              <div className="card-image" style={{ backgroundImage: `url(${dest.image})` }} role="img" aria-label={dest.alt}></div>
              <div className="card-content">
                <h3 className="card-title">{dest.name}</h3>
                <div className="card-footer">
                  <div className="rating">
                    <Star size={20} fill="currentColor" aria-hidden="true" /> <span>{dest.rating}</span>
                  </div>
                  <span className="price">From {dest.price}</span>
                </div>
                <button className="view-btn" aria-label={`View packages for ${dest.name}`}>
                  View Packages <ArrowRight size={20} aria-hidden="true" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="themes-section" aria-label="Experience themes">
        <div className="section-header">
          <h2 className="section-title">Experience Themes</h2>
          <p className="section-subtitle">Choose your perfect travel style and adventure type</p>
        </div>
        <div className="themes-grid">
          {themes.map((theme, index) => (
            <div 
              key={theme.name} 
              className={`theme-card ${selectedTheme === (theme.name === 'All' ? null : theme.name.toLowerCase()) ? 'active' : ''}`} 
              onClick={() => setSelectedTheme(theme.name === 'All' ? null : theme.name.toLowerCase())}
              style={{ '--index': index } as React.CSSProperties}
            >
              {theme.image && (
                <div className="theme-image" style={{ backgroundImage: `url(${theme.image})` }} role="img" aria-label={theme.alt}></div>
              )}
              <div className="theme-content">
                <h3 className="theme-title">{theme.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="packages" className="packages-section" aria-label="Popular packages">
        <div className="section-header">
          <h2 className="section-title">Popular Packages</h2>
          <p className="section-subtitle">Handcrafted itineraries designed for memorable journeys</p>
        </div>
        <div className="packages-grid">
          {filteredPackages.map((pkg) => (
            <div key={pkg.index} className="package-card" style={{ '--index': pkg.index } as React.CSSProperties}>
              <div className="package-image" style={{ backgroundImage: `url(${pkg.image})` }} role="img" aria-label={pkg.alt}></div>
              <div className="package-content">
                <h3 className="package-title">{pkg.title}</h3>
                <div className="package-meta">
                  <div className="meta-item">
                    <Clock size={20} aria-hidden="true" /> {pkg.duration}
                  </div>
                  <div className="meta-item">
                    <Star size={20} fill="currentColor" aria-hidden="true" /> {pkg.rating}
                  </div>
                </div>
                <ul className="package-highlights">
                  {pkg.highlights.map((highlight, i) => (
                    <li key={i}><CheckCircle size={20} aria-hidden="true" /> {highlight}</li>
                  ))}
                </ul>
                <div className="package-footer">
                  <span className="package-price">{pkg.price}</span>
                </div>
                <button className="book-btn" aria-label={`Book ${pkg.title}`}>
                  Book Now <ArrowRight size={20} aria-hidden="true" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="why-section" aria-label="Why travel with us">
        <div className="section-header">
          <h2 className="section-title">Why Travel With Us</h2>
          <p className="section-subtitle">Experience the difference with our dedicated service in every journey</p>
        </div>
        <div className="why-grid">
          {whyItems.map((item) => (
            <div key={item.index} className="why-card" style={{ '--index': item.index } as React.CSSProperties}>
              <div className="why-content">
                {item.icon}
                <h3 className="why-title">{item.title}</h3>
                <p className="why-desc">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="testimonials-section" aria-label="Testimonials">
        <div className="section-header">
          <h2 className="section-title">What Our Travelers Say</h2>
          <p className="section-subtitle">Real stories and experiences from satisfied explorers</p>
        </div>
        <div className="testimonials-grid">
          {testimonials.map((test) => (
            <div key={test.index} className="testimonial-card" style={{ '--index': test.index } as React.CSSProperties}>
              <div className="testimonial-content">
                <img src={test.photo} alt={test.alt} className="testimonial-photo" />
                <p className="testimonial-review">"{test.review}"</p>
                <h4 className="testimonial-name">{test.name}</h4>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="blog-section" aria-label="Blog highlights">
        <div className="section-header">
          <h2 className="section-title">Blog Highlights</h2>
          <p className="section-subtitle">Latest travel guides, tips and inspiring stories</p>
        </div>
        <div className="blog-grid">
          {blogs.map((blog) => (
            <div key={blog.index} className="blog-card" style={{ '--index': blog.index } as React.CSSProperties}>
              <div className="blog-image" style={{ backgroundImage: `url(${blog.image})` }} role="img" aria-label={blog.alt}></div>
              <div className="blog-content">
                <h3 className="blog-title">{blog.title}</h3>
                <p className="blog-excerpt">{blog.excerpt}</p>
                <button className="read-btn" aria-label={`Read more about ${blog.title}`}>
                  Read More <ArrowRight size={20} aria-hidden="true" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="cta-section" aria-label="Call to action">
        <div className="section-header">
          <h2 className="section-title">Ready to Plan Your Dream Trip?</h2>
          <p className="section-subtitle">Get started today with our expert travel assistance</p>
        </div>
        <div className="cta-form">
          <input type="text" placeholder="Your Name" className="cta-input" aria-label="Name" />
          <input type="email" placeholder="Your Email" className="cta-input" aria-label="Email" />
          <input type="text" placeholder="Destination Interest" className="cta-input" aria-label="Destination Interest" />
          <button className="cta-btn" aria-label="Submit form">Submit</button>
        </div>
      </section>

      <footer className="footer" aria-label="Footer">
        <div className="footer-content">
          <div className="footer-section">
            <div className="footer-logo">
              <MapPin size={36} aria-hidden="true" />
              <span>IndiaWander</span>
            </div>
            <p>Your trusted partner for exploring the incredible beauty of India.</p>
            <div className="footer-social">
              <a href="#" aria-label="Facebook"><Facebook size={22} /></a>
              <a href="#" aria-label="Twitter"><Twitter size={22} /></a>
              <a href="#" aria-label="Instagram"><Instagram size={22} /></a>
            </div>
          </div>
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#destinations" aria-label="Destinations">Destinations</a></li>
              <li><a href="#packages" aria-label="Packages">Packages</a></li>
              <li><a href="#" aria-label="About Us">About Us</a></li>
              <li><a href="#" aria-label="Blog">Blog</a></li>
              <li><a href="#" aria-label="Contact">Contact</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Contact Info</h4>
            <p>Email: info@indiawander.com</p>
            <p>Phone: +91 123-456-7890</p>
            <p>Address: 123 Travel Street, Mumbai, India</p>
          </div>
          <div className="footer-section">
            <h4>Newsletter</h4>
            <p>Subscribe for exclusive deals and travel tips</p>
            <div className="newsletter">
              <input type="email" placeholder="Your email" aria-label="Email for newsletter" />
              <button aria-label="Subscribe to newsletter">Subscribe</button>
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
