import React, { useState } from 'react';
import { Waves, MapPin, Users, Star, ArrowRight, Clock, Anchor, Sunrise, Umbrella, Heart, TrendingUp } from 'lucide-react';
import './BeachGetAway.scss';

interface BeachTour {
  id: number;
  title: string;
  image: string;
  location: string;
  duration: string;
  type: string;
  price: string;
  rating: number;
  reviews: number;
  groupSize: string;
  featured?: boolean;
  activities?: string[];
}

const BeachGetaway: React.FC = () => {
  const [selectedType, setSelectedType] = useState<string>('All');
  const [favorites, setFavorites] = useState<number[]>([]);

  const beachTours: BeachTour[] = [
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
      groupSize: '8-12',
      featured: true,
      activities: ['Water Sports', 'Beach Parties', 'Nightlife']
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
      groupSize: '6-10',
      featured: true,
      activities: ['Scuba Diving', 'Snorkeling', 'Island Hopping']
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
      groupSize: '10-15',
      activities: ['Ayurveda Spa', 'Yoga', 'Beach Walks']
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
      groupSize: '6-8',
      activities: ['Kayaking', 'Glass Boat', 'Beach Resort']
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
      groupSize: '8-10',
      activities: ['Beach Trekking', 'Camping', 'Cliff Jumping']
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
      groupSize: '8-12',
      activities: ['Beach Cafes', 'French Quarter', 'Surfing']
    }
  ];

  const types = ['All', 'Luxury', 'Adventure', 'Relaxation'];

  const filteredTours = selectedType === 'All' 
    ? beachTours 
    : beachTours.filter(tour => tour.type === selectedType);

  const toggleFavorite = (id: number) => {
    setFavorites(prev => 
      prev.includes(id) ? prev.filter(fav => fav !== id) : [...prev, id]
    );
  };

  return (
    <div className="beach-getaway-page">
      <section className="beach-hero">
        <div className="hero-background" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1920&q=80')" }}></div>
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <div className="hero-badge">
            <Waves size={20} />
            <span>BEACH GETAWAY</span>
          </div>
          <h1 className="hero-title">Tropical Beach Paradise</h1>
          <p className="hero-subtitle">Relax on pristine beaches with crystal clear waters and golden sands</p>
          <div className="hero-features">
            <div className="feature-item">
              <Umbrella size={24} />
              <span>Premium Resorts</span>
            </div>
            <div className="feature-item">
              <Waves size={24} />
              <span>Water Activities</span>
            </div>
            <div className="feature-item">
              <Sunrise size={24} />
              <span>Sunset Views</span>
            </div>
          </div>
        </div>
        <div className="hero-scroll-indicator">
          <div className="scroll-arrow"></div>
        </div>
      </section>

      <section className="tours-section">
        <div className="tours-container">
          <div className="section-header">
            <div className="section-badge">
              <Anchor size={16} />
              <span>BEACH DESTINATIONS</span>
            </div>
            <h2 className="section-title">Your Perfect Beach Escape</h2>
            <p className="section-subtitle">From secluded coves to vibrant beach towns, find your ideal coastal retreat with unforgettable experiences</p>
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

          <div className="results-info">
            <span className="results-count">
              Showing <span className="count-number">{filteredTours.length}</span> beach destination{filteredTours.length !== 1 ? 's' : ''}
            </span>
          </div>

          <div className="tours-grid">
            {filteredTours.map((tour, index) => (
              <div key={tour.id} className="tour-card" style={{ '--index': index } as React.CSSProperties}>
                {tour.featured && (
                  <div className="featured-badge">
                    <TrendingUp size={14} />
                    <span>Popular</span>
                  </div>
                )}
                <div className="tour-image-wrapper">
                  <div className="tour-image" style={{ backgroundImage: `url(${tour.image})` }}></div>
                  <div className={`type-badge type-${tour.type.toLowerCase()}`}>{tour.type}</div>
                  <button 
                    className={`favorite-btn ${favorites.includes(tour.id) ? 'active' : ''}`}
                    onClick={() => toggleFavorite(tour.id)}
                    aria-label="Add to favorites"
                  >
                    <Heart size={18} fill={favorites.includes(tour.id) ? 'currentColor' : 'none'} />
                  </button>
                  <div className="tour-overlay">
                    <button className="quick-view-btn">
                      <span>View Details</span>
                      <ArrowRight size={16} />
                    </button>
                  </div>
                </div>
                <div className="tour-content">
                  <h3 className="tour-title">{tour.title}</h3>
                  <div className="tour-location">
                    <MapPin size={16} />
                    <span>{tour.location}</span>
                  </div>
                  
                  <div className="tour-meta">
                    <div className="meta-item">
                      <Clock size={15} />
                      <span>{tour.duration}</span>
                    </div>
                    <div className="meta-item">
                      <Users size={15} />
                      <span>{tour.groupSize} people</span>
                    </div>
                  </div>

                  <div className="tour-rating">
                    <Star size={16} fill="currentColor" />
                    <span className="rating-value">{tour.rating}</span>
                    <span className="reviews">({tour.reviews} reviews)</span>
                  </div>

                  {tour.activities && (
                    <div className="tour-activities">
                      {tour.activities.map((activity, idx) => (
                        <span key={idx} className="activity-tag">
                          <span className="dot"></span>
                          {activity}
                        </span>
                      ))}
                    </div>
                  )}

                  <div className="tour-footer">
                    <div className="price-section">
                      <span className="price-label">Starting from</span>
                      <span className="price">{tour.price}</span>
                      <span className="price-person">per person</span>
                    </div>
                    <button className="book-btn">
                      <span>Book Now</span>
                      <ArrowRight size={18} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="cta-background">
          <div className="wave-animation wave1"></div>
          <div className="wave-animation wave2"></div>
          <div className="wave-animation wave3"></div>
        </div>
        <div className="cta-content">
          <Waves size={48} className="cta-icon" />
          <h2 className="cta-title">Ready to Dip Your Toes?</h2>
          <p className="cta-subtitle">Discover more stunning beach destinations and create unforgettable memories by the sea</p>
          <button className="cta-button">
            <span>Explore All Beaches</span>
            <ArrowRight size={20} />
          </button>
        </div>
      </section>
    </div>
  );
};

export default BeachGetaway;
