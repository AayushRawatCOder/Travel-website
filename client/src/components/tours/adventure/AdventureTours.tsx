import React, { useState } from 'react';
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
  highlights: string[];
  bestTime: string;
}

const AdventureTours: React.FC = () => {
  const [filterDifficulty, setFilterDifficulty] = useState<string>('All');
  const [sortBy, setSortBy] = useState<string>('popular');

  const tours: Tour[] = [
    {
      id: 1,
      name: "Leh-Ladakh Bike Expedition",
      location: "Ladakh, Jammu & Kashmir",
      duration: "12 Days / 11 Nights",
      difficulty: "Hard",
      price: 68999,
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop",
      rating: 4.9,
      reviews: 234,
      highlights: ["Royal Enfield Ride", "Khardung La Pass", "Pangong Lake", "Nubra Valley"],
      bestTime: "June - September"
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
      highlights: ["Pin Parvati Trek", "High Altitude Camping", "Mountain Views", "Local Villages"],
      bestTime: "May - October"
    },
    {
      id: 3,
      name: "Rishikesh River Rafting",
      location: "Rishikesh, Uttarakhand",
      duration: "3 Days / 2 Nights",
      difficulty: "Medium",
      price: 12999,
      image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&h=600&fit=crop",
      rating: 4.7,
      reviews: 456,
      highlights: ["White Water Rafting", "Cliff Jumping", "Beach Camping", "Bonfire Nights"],
      bestTime: "September - November, March - May"
    },
    {
      id: 4,
      name: "Meghalaya Caves & Waterfalls",
      location: "Cherrapunji, Meghalaya",
      duration: "7 Days / 6 Nights",
      difficulty: "Medium",
      price: 32999,
      image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=800&h=600&fit=crop",
      rating: 4.8,
      reviews: 167,
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
      highlights: ["Camel Safari", "Desert Camping", "Sand Dunes", "Folk Performances"],
      bestTime: "November - February"
    },
    {
      id: 7,
      name: "Andaman Scuba Diving",
      location: "Havelock Island, Andaman",
      duration: "6 Days / 5 Nights",
      difficulty: "Medium",
      price: 42999,
      image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&h=600&fit=crop",
      rating: 4.9,
      reviews: 412,
      highlights: ["PADI Certification", "Coral Reefs", "Island Hopping", "Beach Activities"],
      bestTime: "October - May"
    },
    {
      id: 8,
      name: "Kashmir Skiing Expedition",
      location: "Gulmarg, Kashmir",
      duration: "5 Days / 4 Nights",
      difficulty: "Hard",
      price: 38999,
      image: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=800&h=600&fit=crop",
      rating: 4.8,
      reviews: 178,
      highlights: ["Skiing & Snowboarding", "Gondola Ride", "Snow Activities", "Mountain Views"],
      bestTime: "December - March"
    },
    {
      id: 9,
      name: "Zanskar Valley Winter Trek",
      location: "Zanskar, Ladakh",
      duration: "9 Days / 8 Nights",
      difficulty: "Hard",
      price: 52999,
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop",
      rating: 4.9,
      reviews: 145,
      highlights: ["Frozen River Trek", "Ice Climbing", "Monasteries", "Extreme Adventure"],
      bestTime: "January - February"
    }
  ];

  const filteredTours = tours
    .filter(tour => filterDifficulty === 'All' || tour.difficulty === filterDifficulty)
    .sort((a, b) => {
      if (sortBy === 'price-low') return a.price - b.price;
      if (sortBy === 'price-high') return b.price - a.price;
      if (sortBy === 'rating') return b.rating - a.rating;
      return b.reviews - a.reviews; // popular
    });

  const getDifficultyColor = (difficulty: string) => {
    switch(difficulty) {
      case 'Easy': return 'easy';
      case 'Medium': return 'medium';
      case 'Hard': return 'hard';
      default: return '';
    }
  };

  return (
    <div className="adventure-tours-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1>Adventure Tours</h1>
          <p>Unleash Your Inner Explorer with Thrilling Adventures Across India</p>
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
      </section>

      {/* Intro Section */}
      <section className="intro-section">
        <div className="container">
          <h2>Discover India's Wild Side</h2>
          <p>
            From the snow-capped peaks of the Himalayas to the azure waters of tropical islands, 
            India offers endless opportunities for adventure seekers. Our carefully curated adventure 
            tours combine adrenaline-pumping activities with safety, expert guidance, and unforgettable 
            experiences. Whether you're a seasoned adventurer or a first-timer, we have the perfect 
            expedition for you.
          </p>
        </div>
      </section>

      {/* Filters & Controls */}
      <section className="controls-section">
        <div className="container">
          <div className="controls-wrapper">
            <div className="filter-group">
              <label>Difficulty Level:</label>
              <div className="filter-buttons">
                {['All', 'Easy', 'Medium', 'Hard'].map(level => (
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
              <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
                <option value="popular">Most Popular</option>
                <option value="rating">Highest Rated</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
              </select>
            </div>
          </div>
          <div className="results-count">
            Showing {filteredTours.length} adventure{filteredTours.length !== 1 ? 's' : ''}
          </div>
        </div>
      </section>

      {/* Tours Grid */}
      <section className="tours-section">
        <div className="container">
          <div className="tours-grid">
            {filteredTours.map(tour => (
              <div key={tour.id} className="tour-card">
                <div className="tour-image">
                  <img src={tour.image} alt={tour.name} />
                  <span className={`difficulty-badge ${getDifficultyColor(tour.difficulty)}`}>
                    {tour.difficulty}
                  </span>
                  <div className="tour-overlay">
                    <button className="quick-view-btn">Quick View</button>
                  </div>
                </div>
                <div className="tour-content">
                  <div className="tour-header">
                    <h3>{tour.name}</h3>
                    <div className="tour-rating">
                      <span className="rating-star">★</span>
                      <span className="rating-value">{tour.rating}</span>
                      <span className="rating-reviews">({tour.reviews})</span>
                    </div>
                  </div>
                  <div className="tour-location">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                      <path d="M8 2C5.79 2 4 3.79 4 6c0 3 4 8 4 8s4-5 4-8c0-2.21-1.79-4-4-4zm0 5.5c-.83 0-1.5-.67-1.5-1.5S7.17 4.5 8 4.5 9.5 5.17 9.5 6 8.83 7.5 8 7.5z"/>
                    </svg>
                    {tour.location}
                  </div>
                  <div className="tour-meta">
                    <span className="meta-item">
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                        <circle cx="8" cy="8" r="6" stroke="currentColor" fill="none"/>
                        <path d="M8 4v4l3 2" stroke="currentColor" fill="none"/>
                      </svg>
                      {tour.duration}
                    </span>
                    <span className="meta-item">
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                        <path d="M8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12zm1-9H7v5h2V5z"/>
                      </svg>
                      {tour.bestTime}
                    </span>
                  </div>
                  <div className="tour-highlights">
                    {tour.highlights.map((highlight, index) => (
                      <span key={index} className="highlight-tag">✓ {highlight}</span>
                    ))}
                  </div>
                  <div className="tour-footer">
                    <div className="tour-price">
                      <span className="price-label">Starting from</span>
                      <span className="price-amount">₹{tour.price.toLocaleString()}</span>
                    </div>
                    <button className="book-btn">Book Now</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="why-choose-section">
        <div className="container">
          <h2>Why Choose Our Adventure Tours?</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">🏔️</div>
              <h3>Expert Guides</h3>
              <p>Certified professionals with years of experience and local knowledge</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🛡️</div>
              <h3>Safety First</h3>
              <p>Top-quality equipment and comprehensive safety protocols</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🌟</div>
              <h3>Small Groups</h3>
              <p>Intimate group sizes for personalized attention and better experiences</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">💯</div>
              <h3>All-Inclusive</h3>
              <p>No hidden costs - meals, equipment, permits all included</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="cta-content">
          <h2>Ready for Your Next Adventure?</h2>
          <p>Join thousands of adventurers who've discovered India's wild beauty with us</p>
          <button className="cta-button">Explore All Adventures</button>
        </div>
      </section>
    </div>
  );
};

export default AdventureTours;