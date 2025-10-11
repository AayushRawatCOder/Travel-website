import React, { useState } from 'react';
import { Compass, MapPin, Users, Star, ArrowRight, Clock, Sparkles, Heart, TrendingUp, Landmark, Camera, Music } from 'lucide-react';
import './CulturalTours.scss';

interface Tour {
  id: number;
  title: string;
  image: string;
  location: string;
  duration: string;
  region: string;
  price: string;
  rating: number;
  reviews: number;
  groupSize: string;
  featured?: boolean;
  highlights?: string[];
}

const CulturalTours: React.FC = () => {
  const [selectedRegion, setSelectedRegion] = useState<string>('All');
  const [favorites, setFavorites] = useState<number[]>([]);

  const cultureTours: Tour[] = [
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
      groupSize: '10-15',
      featured: true,
      highlights: ['Royal Palaces', 'Desert Culture', 'Folk Dance']
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
      groupSize: '8-12',
      featured: true,
      highlights: ['Ganga Aarti', 'Ancient Temples', 'Boat Ride']
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
      groupSize: '10-12',
      highlights: ['Kathakali Dance', 'Backwaters', 'Spice Gardens']
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
      groupSize: '12-15',
      highlights: ['Temple Architecture', 'South Indian Cuisine', 'Classical Music']
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
      groupSize: '8-10',
      highlights: ['Colonial Architecture', 'Art Galleries', 'Bengali Cuisine']
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
      groupSize: '8-12',
      highlights: ['Portuguese Churches', 'Latin Quarter', 'Local Festivals']
    }
  ];

  const regions = ['All', 'North', 'South', 'East', 'West'];

  const filteredTours = selectedRegion === 'All' 
    ? cultureTours 
    : cultureTours.filter(tour => tour.region === selectedRegion);

  const toggleFavorite = (id: number) => {
    setFavorites(prev => 
      prev.includes(id) ? prev.filter(fav => fav !== id) : [...prev, id]
    );
  };

  return (
    <div className="culture-tours-page">
      <section className="culture-hero">
        <div className="hero-background" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=1920&q=80')" }}></div>
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <div className="hero-badge">
            <Sparkles size={20} />
            <span>CULTURE TOURS</span>
          </div>
          <h1 className="hero-title">Discover India's Rich Heritage</h1>
          <p className="hero-subtitle">Immerse yourself in ancient traditions, magnificent temples, and vibrant cultures</p>
          <div className="hero-features">
            <div className="feature-item">
              <Landmark size={24} />
              <span>Historic Sites</span>
            </div>
            <div className="feature-item">
              <Music size={24} />
              <span>Traditional Arts</span>
            </div>
            <div className="feature-item">
              <Camera size={24} />
              <span>Cultural Events</span>
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
              <Compass size={16} />
              <span>CULTURAL JOURNEYS</span>
            </div>
            <h2 className="section-title">Explore Cultural Treasures</h2>
            <p className="section-subtitle">Experience the authentic soul of India through its rich cultural tapestry and timeless traditions</p>
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

          <div className="results-info">
            <span className="results-count">
              Showing <span className="count-number">{filteredTours.length}</span> cultural tour{filteredTours.length !== 1 ? 's' : ''}
            </span>
          </div>

          <div className="tours-grid">
            {filteredTours.map((tour, index) => (
              <div key={tour.id} className="tour-card" style={{ '--index': index } as React.CSSProperties}>
                {tour.featured && (
                  <div className="featured-badge">
                    <TrendingUp size={14} />
                    <span>Most Popular</span>
                  </div>
                )}
                <div className="tour-image-wrapper">
                  <div className="tour-image" style={{ backgroundImage: `url(${tour.image})` }}></div>
                  <div className={`region-badge region-${tour.region.toLowerCase()}`}>
                    {tour.region} India
                  </div>
                  <button 
                    className={`favorite-btn ${favorites.includes(tour.id) ? 'active' : ''}`}
                    onClick={() => toggleFavorite(tour.id)}
                    aria-label="Add to favorites"
                  >
                    <Heart size={18} fill={favorites.includes(tour.id) ? 'currentColor' : 'none'} />
                  </button>
                  <div className="tour-overlay">
                    <button className="quick-view-btn">
                      <span>Explore Tour</span>
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

                  {tour.highlights && (
                    <div className="tour-highlights">
                      {tour.highlights.map((highlight, idx) => (
                        <span key={idx} className="highlight-tag">
                          <Sparkles size={12} />
                          {highlight}
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
          <div className="pattern-overlay"></div>
        </div>
        <div className="cta-content">
          <Sparkles size={48} className="cta-icon" />
          <h2 className="cta-title">Ready to Explore India's Heritage?</h2>
          <p className="cta-subtitle">Embark on a journey through time and discover the cultural wonders that make India truly incredible</p>
          <button className="cta-button">
            <span>View All Cultural Tours</span>
            <ArrowRight size={20} />
          </button>
        </div>
      </section>
    </div>
  );
};

export default CulturalTours;
