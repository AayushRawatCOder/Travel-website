import React, { useState, useEffect } from 'react';
import { Plane, Search, MapPin, Calendar, Users, ArrowRight, Star, Clock, ChevronLeft, ChevronRight } from 'lucide-react';
import './Main.style.scss';

const HomePage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [tripType, setTripType] = useState('flights');
  const [flightType, setFlightType] = useState('oneway');

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const carouselImages = [
    { url: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=1200', title: 'Discover Paradise', subtitle: 'Explore the most beautiful destinations', alt: 'Tropical beach with clear waters' },
    { url: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=1200', title: 'Adventure Awaits', subtitle: 'Create unforgettable memories', alt: 'Mountain landscape with a river' },
    { url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200', title: 'Beach Escapes', subtitle: 'Relax in tropical paradises', alt: 'Palm trees over a sandy beach' }
  ];

  const destinations = [
    { name: 'Santorini, Greece', image: 'https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?w=400', price: '$899', rating: 4.9, alt: 'White buildings in Santorini' },
    { name: 'Bali, Indonesia', image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=400', price: '$749', rating: 4.8, alt: 'Bali temple by the sea' },
    { name: 'Paris, France', image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=400', price: '$1,099', rating: 4.9, alt: 'Eiffel Tower at sunset' },
    { name: 'Dubai, UAE', image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=400', price: '$1,299', rating: 4.7, alt: 'Dubai skyline at night' },
    { name: 'Maldives', image: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=400', price: '$1,499', rating: 5.0, alt: 'Overwater bungalows in Maldives' },
    { name: 'Tokyo, Japan', image: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=400', price: '$999', rating: 4.8, alt: 'Tokyo cityscape with Mount Fuji' }
  ].map((dest, index) => ({ ...dest, index }));

  const hotDeals = [
    { title: 'Summer Beach Getaway', location: 'Caribbean Islands', image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=400', price: '$599', discount: '40% OFF', duration: '5 Days', alt: 'Caribbean beach with palm trees' },
    { title: 'Mountain Adventure', location: 'Swiss Alps', image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400', price: '$799', discount: '35% OFF', duration: '7 Days', alt: 'Snow-capped Swiss Alps' },
    { title: 'City Break Special', location: 'New York', image: 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=400', price: '$449', discount: '30% OFF', duration: '4 Days', alt: 'New York City skyline' }
  ].map((deal, index) => ({ ...deal, index }));

  const tourPackages = [
    { title: 'European Dream Tour', countries: '5 Countries', image: 'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=400', price: '$2,499', duration: '12 Days', rating: 4.9, alt: 'European architecture' },
    { title: 'Asian Cultural Experience', countries: '4 Countries', image: 'https://images.unsplash.com/photo-1480796927426-f609979314bd?w=400', price: '$1,899', duration: '10 Days', rating: 4.8, alt: 'Asian temple at sunset' },
    { title: 'African Safari Adventure', countries: '3 Countries', image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=400', price: '$3,299', duration: '14 Days', rating: 5.0, alt: 'African savanna with wildlife' },
    { title: 'South American Explorer', countries: '4 Countries', image: 'https://images.unsplash.com/photo-1483729558449-99ef09a8c325?w=400', price: '$2,799', duration: '11 Days', rating: 4.7, alt: 'South American ruins' }
  ].map((pkg, index) => ({ ...pkg, index }));

  return (
    <div className="homepage">
      <section className="hero-carousel" aria-label="Featured destinations">
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
  <div className="trip-tabs" role="tablist">
    {['flights', 'tours', 'hotels'].map((type) => (
      <button
        key={type}
        className={`tab ${tripType === type ? 'active' : ''}`}
        onClick={() => setTripType(type)}
        role="tab"
        aria-selected={tripType === type}
        aria-controls={`${type}-panel`}
      >
        {type === 'flights' && <Plane size={18} aria-hidden="true" />}
        {type !== 'flights' && <MapPin size={18} aria-hidden="true" />}
        {type.charAt(0).toUpperCase() + type.slice(1)}
      </button>
    ))}
  </div>

  {tripType === 'flights' && (
    <div className="flight-type-tabs" role="radiogroup" aria-label="Flight type selection">
      {['oneway', 'roundtrip', 'multicity'].map((type) => (
        <label key={type} className="radio-label">
          <input
            type="radio"
            checked={flightType === type}
            onChange={() => setFlightType(type)}
            name="flight-type"
            aria-label={type.charAt(0).toUpperCase() + type.slice(1).replace('city', ' City')}
          />
          <span>{type.charAt(0).toUpperCase() + type.slice(1).replace('city', ' City')}</span>
        </label>
      ))}
    </div>
  )}

  <div className="search-form">
    <div className="form-row">
      <div className="input-group">
        <label htmlFor="from-input" className="sr-only">From</label>
        <div className="input-wrapper">
          <Plane className="input-icon" size={18} aria-hidden="true" />
          <input
            id="from-input"
            type="text"
            placeholder="From (e.g., JFK)"
            defaultValue="JFK"
            aria-label="Departure airport"
          />
        </div>
      </div>

      <div className="input-group">
        <label htmlFor="to-input" className="sr-only">To</label>
        <div className="input-wrapper">
          <Plane className="input-icon landing" size={18} aria-hidden="true" />
          <input
            id="to-input"
            type="text"
            placeholder="To (e.g., LCY)"
            defaultValue="LCY"
            aria-label="Destination airport"
          />
        </div>
      </div>

      {/* <button className="swap-btn" aria-label="Swap departure and destination">
        <ArrowRight size={18} aria-hidden="true" />
      </button> */}

      <div className="input-group">
        <label htmlFor="date-input" className="sr-only">Journey date</label>
        <div className="input-wrapper">
          <Calendar className="input-icon" size={18} aria-hidden="true" />
          <input
            id="date-input"
            type="date"
            placeholder="Select date"
            aria-label="Travel date"
          />
        </div>
      </div>

      <div className="input-group">
        <label htmlFor="passenger-input" className="sr-only">Passenger, class</label>
        <div className="input-wrapper">
          <Users className="input-icon" size={18} aria-hidden="true" />
          <input
            id="passenger-input"
            type="text"
            placeholder="1, Business"
            defaultValue="1, Business"
            aria-label="Passenger count and class"
          />
        </div>
      </div>
    </div>

    <button className="search-btn" aria-label="Search for travel options">
      <Search size={18} aria-hidden="true" /> Search
    </button>
  </div>
</div>
      </section>

      <section id="destinations" className="destinations-section" aria-label="Top destinations">
        <div className="section-header">
          <h2 className="section-title">Top Destinations</h2>
          <p className="section-subtitle">Explore the world's most beautiful places</p>
        </div>
        <div className="destinations-grid">
          {destinations.map((dest) => (
            <div key={dest.index} className="destination-card" style={{ '--index': dest.index } as React.CSSProperties}>
              <div className="card-image" style={{ backgroundImage: `url(${dest.image})` }} role="img" aria-label={dest.alt}></div>
              <div className="card-content">
                <h3 className="card-title">{dest.name}</h3>
                <div className="card-footer">
                  <div className="rating">
                    <Star size={16} fill="currentColor" aria-hidden="true" /> <span>{dest.rating}</span>
                  </div>
                  <span className="price">From {dest.price}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="hot-deals-section" aria-label="Hot deals">
        <div className="section-header">
          <h2 className="section-title">Explore Our Hot Deals</h2>
          <p className="section-subtitle">Limited time offers you can't miss</p>
        </div>
        <div className="deals-grid">
          {hotDeals.map((deal) => (
            <div key={deal.index} className="deal-card" style={{ '--index': deal.index } as React.CSSProperties}>
              <div className="deal-image" style={{ backgroundImage: `url(${deal.image})` }} role="img" aria-label={deal.alt}>
                <span className="discount-badge">{deal.discount}</span>
              </div>
              <div className="deal-content">
                <h3 className="deal-title">{deal.title}</h3>
                <div className="deal-location">
                  <MapPin size={16} aria-hidden="true" /> {deal.location}
                </div>
                <div className="deal-footer">
                  <div className="deal-duration">
                    <Clock size={16} aria-hidden="true" /> {deal.duration}
                  </div>
                  <span className="deal-price">{deal.price}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="tours" className="tour-packages-section" aria-label="Best tour packages">
        <div className="section-header">
          <h2 className="section-title">Best Tour Packages</h2>
          <p className="section-subtitle">Curated experiences for unforgettable journeys</p>
        </div>
        <div className="packages-grid">
          {tourPackages.map((pkg) => (
            <div key={pkg.index} className="package-card" style={{ '--index': pkg.index } as React.CSSProperties}>
              <div className="package-image" style={{ backgroundImage: `url(${pkg.image})` }} role="img" aria-label={pkg.alt}>
                <div className="package-badge">{pkg.countries}</div>
              </div>
              <div className="package-content">
                <h3 className="package-title">{pkg.title}</h3>
                <div className="package-meta">
                  <div className="meta-item">
                    <Clock size={16} aria-hidden="true" /> {pkg.duration}
                  </div>
                  <div className="meta-item">
                    <Star size={16} fill="currentColor" aria-hidden="true" /> {pkg.rating}
                  </div>
                </div>
                <div className="package-footer">
                  <span className="package-price">{pkg.price}</span>
                  <button className="view-btn" aria-label={`View details for ${pkg.title}`}>
                    View Details <ArrowRight size={16} aria-hidden="true" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <footer className="footer" aria-label="Footer">
        <div className="footer-content">
          {[
            {
              title: 'Wanderlust',
              content: (
                <>
                  <div className="footer-logo">
                    <Plane size={32} aria-hidden="true" />
                    <span>Wanderlust</span>
                  </div>
                  <p>Your gateway to extraordinary travel experiences around the world.</p>
                </>
              ),
              index: 0,
            },
            {
              title: 'Quick Links',
              content: (
                <ul>
                  <li><a href="#" aria-label="About Us">About Us</a></li>
                  <li><a href="#" aria-label="Destinations">Destinations</a></li>
                  <li><a href="#" aria-label="Tour Packages">Tour Packages</a></li>
                  <li><a href="#" aria-label="Contact">Contact</a></li>
                </ul>
              ),
              index: 1,
            },
            {
              title: 'Support',
              content: (
                <ul>
                  <li><a href="#" aria-label="Help Center">Help Center</a></li>
                  <li><a href="#" aria-label="FAQs">FAQs</a></li>
                  <li><a href="#" aria-label="Terms of Service">Terms of Service</a></li>
                  <li><a href="#" aria-label="Privacy Policy">Privacy Policy</a></li>
                </ul>
              ),
              index: 2,
            },
            {
              title: 'Newsletter',
              content: (
                <>
                  <p>Subscribe for exclusive deals</p>
                  <div className="newsletter">
                    <input type="email" placeholder="Your email" aria-label="Email for newsletter" />
                    <button aria-label="Subscribe to newsletter">Subscribe</button>
                  </div>
                </>
              ),
              index: 3,
            },
          ].map((section) => (
            <div key={section.index} className="footer-section" style={{ '--index': section.index } as React.CSSProperties}>
              <h4>{section.title}</h4>
              {section.content}
            </div>
          ))}
        </div>
        <div className="footer-bottom">
          <p>&copy; 2025 Wanderlust. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;