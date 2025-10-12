import React, { useState } from 'react';
import { Waves, MapPin, Users, Star, ArrowRight, Clock } from 'lucide-react';
import './BeachGetaway.style.scss';

const BeachGetaway = () => {
  const [selectedType, setSelectedType] = useState('All');

  const beachTours = [
    {
      id: 1,
      title: 'Goa Beach Paradise',
      image: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=800&q=80',
      location: 'North & South Goa',
      duration: '5 Days',
      type: 'Luxury',
      price: '₹28,000',
      rating: 4.8,
      reviews: 456,
      groupSize: '8-12'
    },
    {
      id: 2,
      title: 'Andaman Island Escape',
      image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&q=80',
      location: 'Havelock, Neil Island',
      duration: '7 Days',
      type: 'Adventure',
      price: '₹42,000',
      rating: 4.9,
      reviews: 389,
      groupSize: '6-10'
    },
    {
      id: 3,
      title: 'Kerala Beaches',
      image: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=800&q=80',
      location: 'Kovalam, Varkala',
      duration: '4 Days',
      type: 'Relaxation',
      price: '₹22,000',
      rating: 4.7,
      reviews: 312,
      groupSize: '10-15'
    },
    {
      id: 4,
      title: 'Lakshadweep Paradise',
      image: 'https://images.unsplash.com/photo-1506929562872-bb421503ef21?w=800&q=80',
      location: 'Agatti, Bangaram',
      duration: '6 Days',
      type: 'Luxury',
      price: '₹65,000',
      rating: 5.0,
      reviews: 198,
      groupSize: '6-8'
    },
    {
      id: 5,
      title: 'Gokarna Beach Trek',
      image: 'https://images.unsplash.com/photo-1471922694854-ff1b63b20054?w=800&q=80',
      location: 'Gokarna, Karnataka',
      duration: '3 Days',
      type: 'Adventure',
      price: '₹15,000',
      rating: 4.6,
      reviews: 267,
      groupSize: '8-10'
    },
    {
      id: 6,
      title: 'Pondicherry Coast',
      image: 'https://images.unsplash.com/photo-1483683804023-6ccdb62f86ef?w=800&q=80',
      location: 'Pondicherry, TN',
      duration: '3 Days',
      type: 'Relaxation',
      price: '₹18,000',
      rating: 4.7,
      reviews: 298,
      groupSize: '8-12'
    }
  ];

  const types = ['All', 'Luxury', 'Adventure', 'Relaxation'];

  const filteredTours = selectedType === 'All' 
    ? beachTours 
    : beachTours.filter(tour => tour.type === selectedType);

  return (
    <div className="beach-getaway-page">
      <section className="beach-hero">
        <div className="hero-background" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1920&q=80')" }}></div>
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <div className="hero-badge">
            <Waves size={18} />
            <span>BEACH GETAWAY</span>
          </div>
          <h1 className="hero-title">Tropical Beach Paradise</h1>
          <p className="hero-subtitle">Relax on pristine beaches with crystal clear waters and golden sands</p>
        </div>
      </section>

      <section className="tours-section">
        <div className="tours-container">
          <div className="section-header">
            <div className="section-badge">BEACH DESTINATIONS</div>
            <h2 className="section-title">Your Perfect Beach Escape</h2>
            <p className="section-subtitle">From secluded coves to vibrant beach towns, find your ideal coastal retreat</p>
          </div>

          <div className="type-filter">
            {types.map((type) => (
              <button
                key={type}
                className={`filter-btn ${selectedType === type ? 'active' : ''}`}
                onClick={() => setSelectedType(type)}
              >
                {type}
              </button>
            ))}
          </div>

          <div className="tours-grid">
            {filteredTours.map((tour, index) => (
              <div key={tour.id} className="tour-card" style={{ '--index': index } as React.CSSProperties}>
                <div className="tour-image-wrapper">
                  <div className="tour-image" style={{ backgroundImage: `url(${tour.image})` }}></div>
                  <div className="type-badge">{tour.type}</div>
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

export default BeachGetaway;
