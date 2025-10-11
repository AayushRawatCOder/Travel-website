import React, { useState } from 'react';
import { Mountain, MapPin, Clock, Users, Star, ArrowRight, Shield, Award, Compass, Calendar, TrendingUp, Heart } from 'lucide-react';
import './AdventureTours.scss';

interface Tour {
  id: number;
  name: string;
  location: string;
  duration: string;
  difficulty: string;
  price: number;
  image: string;
  rating: number;
  reviews: number;
  groupSize: string;
  highlights: string[];
  bestTime: string;
  trending?: boolean;
}

const AdventureTours: React.FC = () => {
  const [filterDifficulty, setFilterDifficulty] = useState<string>('All');
  const [sortBy, setSortBy] = useState<string>('popular');
  const [favorites, setFavorites] = useState<number[]>([]);

  const tours: Tour[] = [
    {
      id: 1,
      name: "Leh-Ladakh Bike Expedition",
      location: "Ladakh, J&K",
      duration: "12 Days / 11 Nights",
      difficulty: "Extreme",
      price: 68999,
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop",
      rating: 4.9,
      reviews: 245,
      groupSize: "8-12",
      highlights: ["Royal Enfield Ride", "Khardung La Pass", "Pangong Lake", "Nubra Valley"],
      bestTime: "June - September",
      trending: true
    },
    {
      id: 2,
      name: "Himalayan Trekking Adventure",
      location: "Manali to Spiti Valley",
      duration: "10 Days / 9 Nights",
      difficulty: "Hard",
      price: 45999,
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop",
      rating: 4.8,
      reviews: 189,
      groupSize: "10-15",
      highlights: ["Pin Parvati Trek", "High Altitude Camping", "Mountain Views", "Local Villages"],
      bestTime: "May - October",
      trending: true
    },
    {
      id: 3,
      name: "Rishikesh River Rafting",
      location: "Rishikesh, UK",
      duration: "3 Days / 2 Nights",
      difficulty: "Moderate",
      price: 12999,
      image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&h=600&fit=crop",
      rating: 4.7,
      reviews: 456,
      groupSize: "6-8",
      highlights: ["White Water Rafting", "Cliff Jumping", "Beach Camping", "Bonfire Nights"],
      bestTime: "September - November, March - May"
    },
    {
      id: 4,
      name: "Meghalaya Caves & Waterfalls",
      location: "Cherrapunji, Meghalaya",
      duration: "7 Days / 6 Nights",
      difficulty: "Moderate",
      price: 32999,
      image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=800&h=600&fit=crop",
      rating: 4.8,
      reviews: 167,
      groupSize: "8-10",
      highlights: ["Living Root Bridges", "Cave Exploration", "Nohkalikai Falls", "Mawlynnong Village"],
      bestTime: "October - April"
    },
    {
      id: 5,
      name: "Goa Water Sports Adventure",
      location: "North Goa",
      duration: "5 Days / 4 Nights",
      difficulty: "Easy",
      price: 24999,
      image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=800&h=600&fit=crop",
      rating: 4.6,
      reviews: 523,
      groupSize: "4-6",
      highlights: ["Parasailing", "Jet Skiing", "Scuba Diving", "Banana Boat Rides"],
      bestTime: "October - March"
    },
    {
      id: 6,
      name: "Rajasthan Desert Safari",
      location: "Jaisalmer, Rajasthan",
      duration: "4 Days / 3 Nights",
      difficulty: "Easy",
      price: 19999,
      image: "https://images.unsplash.com/photo-1599661046289-e31897846e41?w=800&h=600&fit=crop",
      rating: 4.7,
      reviews: 298,
      groupSize: "6-10",
      highlights: ["Camel Safari", "Desert Camping", "Sand Dunes", "Folk Performances"],
      bestTime: "November - February"
    }
  ];

  const filteredTours = tours
    .filter(tour => filterDifficulty === 'All' || tour.difficulty === filterDifficulty)
    .sort((a, b) => {
      if (sortBy === 'price-low') return a.price - b.price;
      if (sortBy === 'price-high') return b.price - a.price;
      if (sortBy === 'rating') return b.rating - a.rating;
      return b.reviews - a.reviews;
    });

  const toggleFavorite = (id: number) => {
    setFavorites(prev => 
      prev.includes(id) ? prev.filter(fav => fav !== id) : [...prev, id]
    );
  };

  return (
    <div className="adventure-tours-page">
      <section className="adventure-hero">
        <div className="hero-background" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=80')" }}></div>
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <div className="hero-badge">
            <Mountain size={20} />
            <span>ADVENTURE TOURS</span>
          </div>
          <h1 className="hero-title">Unleash Your Inner Explorer</h1>
          <p className="hero-subtitle">Experience thrilling adventures across India's most spectacular landscapes</p>
          <div className="hero-stats">
            <div className="stat">
              <span className="stat-number">50+</span>
              <span className="stat-label">Adventures</span>
            </div>
            <div className="stat">
              <span className="stat-number">15K+</span>
              <span className="stat-label">Adventurers</span>
            </div>
            <div className="stat">
              <span className="stat-number">4.8★</span>
              <span className="stat-label">Avg Rating</span>
            </div>
          </div>
        </div>
        <div className="hero-scroll-indicator">
          <div className="scroll-arrow"></div>
        </div>
      </section>

      <section className="intro-section">
        <div className="container">
          <h2 className="section-title">Discover India's Wild Side</h2>
          <p className="section-subtitle">From the Himalayas to tropical islands, our curated tours offer adrenaline-pumping experiences with expert guidance and unforgettable memories.</p>
        </div>
      </section>

      <section className="tours-section">
        <div className="tours-container">
          <div className="section-header">
            <div className="section-badge">
              <Compass size={16} />
              <span>EXPLORE ADVENTURES</span>
            </div>
            <h2 className="section-title">Choose Your Adventure</h2>
            <p className="section-subtitle">From easy trails to extreme expeditions, find your perfect challenge</p>
          </div>

          <div className="controls-wrapper">
            <div className="filter-group">
              <label>Difficulty Level:</label>
              <div className="difficulty-filter">
                {['All', 'Easy', 'Moderate', 'Hard', 'Extreme'].map(level => (
                  <button 
                    key={level} 
                    className={`filter-btn ${filterDifficulty === level ? 'active' : ''}`} 
                    onClick={() => setFilterDifficulty(level)}
                  >
                    {level}
                  </button>
                ))}
              </div>
            </div>
            <div className="sort-group">
              <label>Sort By:</label>
              <select value={sortBy} onChange={(e) => setSortBy(e.target.value)} className="sort-select">
                <option value="popular">Most Popular</option>
                <option value="rating">Highest Rated</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
              </select>
            </div>
          </div>

          <div className="results-count">
            Showing <span className="count-highlight">{filteredTours.length}</span> adventure{filteredTours.length !== 1 ? 's' : ''}
          </div>

          <div className="tours-grid">
            {filteredTours.map((tour, index) => (
              <div key={tour.id} className="tour-card" style={{ '--index': index } as React.CSSProperties}>
                {tour.trending && (
                  <div className="trending-badge">
                    <TrendingUp size={14} />
                    <span>Trending</span>
                  </div>
                )}
                <div className="tour-image-wrapper">
                  <div className="tour-image" style={{ backgroundImage: `url(${tour.image})` }}></div>
                  <div className={`difficulty-badge difficulty-${tour.difficulty.toLowerCase()}`}>
                    {tour.difficulty}
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
                      <span>Quick View</span>
                      <ArrowRight size={16} />
                    </button>
                  </div>
                </div>

                <div className="tour-content">
                  <div className="tour-header">
                    <h3 className="tour-title">{tour.name}</h3>
                    <div className="tour-rating">
                      <Star size={16} fill="currentColor" />
                      <span className="rating-value">{tour.rating}</span>
                      <span className="reviews">({tour.reviews})</span>
                    </div>
                  </div>

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

                  <div className="best-time">
                    <Calendar size={14} />
                    <span>Best: {tour.bestTime}</span>
                  </div>

                  <div className="tour-highlights">
                    {tour.highlights.map((highlight, idx) => (
                      <span key={idx} className="highlight-tag">
                        <span className="check-icon">✓</span>
                        {highlight}
                      </span>
                    ))}
                  </div>

                  <div className="tour-footer">
                    <div className="price-section">
                      <span className="price-label">Starting from</span>
                      <span className="price">₹{tour.price.toLocaleString()}</span>
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

      <section className="why-adventure-section">
        <div className="why-container">
          <div className="section-header">
            <div className="section-badge">
              <Shield size={16} />
              <span>WHY CHOOSE US</span>
            </div>
            <h2 className="section-title">Adventure With Confidence</h2>
            <p className="section-subtitle">Experience excellence in every journey with our commitment to safety, expertise, and unforgettable experiences</p>
          </div>
          <div className="why-grid">
            {[
              { 
                icon: <Shield size={36} />, 
                title: "Safety First", 
                description: "Certified guides, comprehensive insurance, and top-quality equipment for your peace of mind" 
              },
              { 
                icon: <Award size={36} />, 
                title: "Expert Team", 
                description: "Experienced professionals with deep local knowledge and passion for adventure" 
              },
              { 
                icon: <Compass size={36} />, 
                title: "Best Routes", 
                description: "Carefully curated trails and destinations for maximum adventure and breathtaking views" 
              },
              { 
                icon: <Users size={36} />, 
                title: "Small Groups", 
                description: "Intimate group sizes ensuring personalized attention and authentic experiences" 
              }
            ].map((item, index) => (
              <div key={index} className="why-card" style={{ '--card-index': index } as React.CSSProperties}>
                <div className="why-icon-wrapper">
                  <div className="why-icon">{item.icon}</div>
                </div>
                <h3 className="why-title">{item.title}</h3>
                <p className="why-description">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="cta-background"></div>
        <div className="cta-content">
          <h2 className="cta-title">Ready for Your Next Adventure?</h2>
          <p className="cta-subtitle">Join thousands of adventurers who've discovered India's wild beauty with us</p>
          <button className="cta-button">
            <span>Explore All Adventures</span>
            <ArrowRight size={20} />
          </button>
        </div>
      </section>
    </div>
  );
};

export default AdventureTours;
