import React, { useState } from 'react';
import { Compass, MapPin, Users, Star, ArrowRight, Clock, Sparkles } from 'lucide-react';
import './CultureTours.style.scss';

const CultureTours = () => {
  const [selectedRegion, setSelectedRegion] = useState('All');

  const cultureTours = [
    {
      id: 1,
      title: 'Rajasthan Heritage Trail',
      image: 'https://images.unsplash.com/photo-1599661046289-e31897846e41?w=800&q=80',
      location: 'Jaipur, Udaipur, Jodhpur',
      duration: '8 Days',
      region: 'North',
      price: '₹45,000',
      rating: 4.9,
      reviews: 298,
      groupSize: '10-15'
    },
    {
      id: 2,
      title: 'Spiritual Varanasi',
      image: 'https://images.unsplash.com/photo-1561361513-2d000a50f0dc?w=800&q=80',
      location: 'Varanasi, UP',
      duration: '4 Days',
      region: 'North',
      price: '₹18,000',
      rating: 5.0,
      reviews: 412,
      groupSize: '8-12'
    },
    {
      id: 3,
      title: 'Kerala Cultural Journey',
      image: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=800&q=80',
      location: 'Kochi, Munnar, Alleppey',
      duration: '6 Days',
      region: 'South',
      price: '₹32,000',
      rating: 4.8,
      reviews: 356,
      groupSize: '10-12'
    },
    {
      id: 4,
      title: 'Tamil Nadu Temples',
      image: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=800&q=80',
      location: 'Chennai, Madurai',
      duration: '7 Days',
      region: 'South',
      price: '₹38,000',
      rating: 4.7,
      reviews: 289,
      groupSize: '12-15'
    },
    {
      id: 5,
      title: 'Kolkata Cultural Heritage',
      image: 'https://images.unsplash.com/photo-1558431382-27e303142255?w=800&q=80',
      location: 'Kolkata, WB',
      duration: '3 Days',
      region: 'East',
      price: '₹15,000',
      rating: 4.6,
      reviews: 234,
      groupSize: '8-10'
    },
    {
      id: 6,
      title: 'Goa Portuguese Legacy',
      image: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=800&q=80',
      location: 'Old Goa, Panjim',
      duration: '5 Days',
      region: 'West',
      price: '₹28,000',
      rating: 4.8,
      reviews: 312,
      groupSize: '8-12'
    }
  ];

  const regions = ['All', 'North', 'South', 'East', 'West'];

  const filteredTours = selectedRegion === 'All' 
    ? cultureTours 
    : cultureTours.filter(tour => tour.region === selectedRegion);

  return (
    <div className="culture-tours-page">
      <section className="culture-hero">
        <div className="hero-background" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=1920&q=80')" }}></div>
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <div className="hero-badge">
            <Sparkles size={18} />
            <span>CULTURE TOURS</span>
          </div>
          <h1 className="hero-title">Discover India's Rich Heritage</h1>
          <p className="hero-subtitle">Immerse yourself in ancient traditions, magnificent temples, and vibrant cultures</p>
        </div>
      </section>

      <section className="tours-section">
        <div className="tours-container">
          <div className="section-header">
            <div className="section-badge">CULTURAL JOURNEYS</div>
            <h2 className="section-title">Explore Cultural Treasures</h2>
            <p className="section-subtitle">Experience the authentic soul of India through its rich cultural tapestry</p>
          </div>

          <div className="region-filter">
            {regions.map((region) => (
              <button
                key={region}
                className={`filter-btn ${selectedRegion === region ? 'active' : ''}`}
                onClick={() => setSelectedRegion(region)}
              >
                {region}
              </button>
            ))}
          </div>

          <div className="tours-grid">
            {filteredTours.map((tour, index) => (
              <div key={tour.id} className="tour-card" style={{ '--index': index } as React.CSSProperties}>
                <div className="tour-image-wrapper">
                  <div className="tour-image" style={{ backgroundImage: `url(${tour.image})` }}></div>
                  <div className="region-badge">{tour.region} India</div>
                </div>
                <div className="tour-content">
                  <h3 className="tour-title">{tour.title}</h3>
                  <div className="tour-location">
                    <MapPin size={14} />
                    <span>{tour.location}</span>
                  </div>
                  
                  <div className="tour-meta">
                    <div className="meta-item">
                      <Clock size={14} />
                      <span>{tour.duration}</span>
                    </div>
                    <div className="meta-item">
                      <Users size={14} />
                      <span>{tour.groupSize}</span>
                    </div>
                  </div>

                  <div className="tour-rating">
                    <Star size={14} fill="currentColor" />
                    <span>{tour.rating}</span>
                    <span className="reviews">({tour.reviews})</span>
                  </div>

                  <div className="tour-footer">
                    <div className="price-section">
                      <span className="price-label">From</span>
                      <span className="price">{tour.price}</span>
                    </div>
                    <button className="book-btn">
                      <span>Book</span>
                      <ArrowRight size={16} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default CultureTours;
