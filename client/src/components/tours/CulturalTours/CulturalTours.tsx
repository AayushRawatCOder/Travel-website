import React, { useState } from 'react';
import './CulturalTours.scss';

interface Tour {
  id: number;
  name: string;
  location: string;
  duration: string;
  category: string;
  price: number;
  image: string;
  rating: number;
  reviews: number;
  highlights: string[];
  heritage: boolean;
}

const CulturalTours: React.FC = () => {
  const [filterCategory, setFilterCategory] = useState<string>('All');
  const [showHeritageOnly, setShowHeritageOnly] = useState<boolean>(false);

  const tours: Tour[] = [
    {
      id: 1,
      name: "Golden Triangle Heritage Tour",
      location: "Delhi, Agra & Jaipur",
      duration: "7 Days / 6 Nights",
      category: "Heritage",
      price: 42999,
      image: "https://images.unsplash.com/photo-1564507592333-c60657eea523?w=800&h=600&fit=crop",
      rating: 4.9,
      reviews: 567,
      highlights: ["Taj Mahal", "Red Fort", "Amber Fort", "Hawa Mahal"],
      heritage: true
    },
    {
      id: 2,
      name: "Spiritual Varanasi & Bodhgaya",
      location: "Varanasi & Bodhgaya",
      duration: "5 Days / 4 Nights",
      category: "Spiritual",
      price: 28999,
      image: "https://images.unsplash.com/photo-1561361513-2d000a50f0dc?w=800&h=600&fit=crop",
      rating: 4.8,
      reviews: 423,
      highlights: ["Ganga Aarti", "Ancient Temples", "Buddhist Sites", "Spiritual Rituals"],
      heritage: true
    },
    {
      id: 3,
      name: "Rajasthan Royal Experience",
      location: "Udaipur, Jodhpur & Jaisalmer",
      duration: "10 Days / 9 Nights",
      category: "Heritage",
      price: 58999,
      image: "https://images.unsplash.com/photo-1599661046289-e31897846e41?w=800&h=600&fit=crop",
      rating: 4.9,
      reviews: 389,
      highlights: ["City Palace", "Mehrangarh Fort", "Desert Safari", "Cultural Shows"],
      heritage: true
    },
    {
      id: 4,
      name: "Kerala Backwater Culture Trail",
      location: "Kochi, Alleppey & Kumarakom",
      duration: "6 Days / 5 Nights",
      category: "Cultural",
      price: 35999,
      image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=800&h=600&fit=crop",
      rating: 4.7,
      reviews: 312,
      highlights: ["Houseboat Stay", "Kathakali Dance", "Spice Plantations", "Village Tours"],
      heritage: false
    },
    {
      id: 5,
      name: "Hampi & Badami Temple Circuit",
      location: "Karnataka",
      duration: "5 Days / 4 Nights",
      category: "Heritage",
      price: 32999,
      image: "https://images.unsplash.com/photo-1609137144813-7d9921338f24?w=800&h=600&fit=crop",
      rating: 4.8,
      reviews: 245,
      highlights: ["Virupaksha Temple", "Stone Chariot", "Cave Temples", "Ancient Ruins"],
      heritage: true
    },
    {
      id: 6,
      name: "Kolkata Art & Literature Tour",
      location: "Kolkata, West Bengal",
      duration: "4 Days / 3 Nights",
      category: "Cultural",
      price: 22999,
      image: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800&h=600&fit=crop",
      rating: 4.6,
      reviews: 198,
      highlights: ["Indian Museum", "Victoria Memorial", "Tagore House", "Street Art"],
      heritage: false
    },
    {
      id: 7,
      name: "Tamil Nadu Temple Trail",
      location: "Chennai, Madurai & Thanjavur",
      duration: "8 Days / 7 Nights",
      category: "Spiritual",
      price: 38999,
      image: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=800&h=600&fit=crop",
      rating: 4.9,
      reviews: 334,
      highlights: ["Meenakshi Temple", "Brihadeeswarar Temple", "Classical Dance", "Local Cuisine"],
      heritage: true
    },
    {
      id: 8,
      name: "Khajuraho & Orchha Heritage",
      location: "Madhya Pradesh",
      duration: "4 Days / 3 Nights",
      category: "Heritage",
      price: 26999,
      image: "https://images.unsplash.com/photo-1587474260584-136574528ed5?w=800&h=600&fit=crop",
      rating: 4.7,
      reviews: 167,
      highlights: ["Erotic Temples", "Orchha Fort", "Light & Sound Show", "Temple Architecture"],
      heritage: true
    },
    {
      id: 9,
      name: "Buddhist Circuit Tour",
      location: "Bihar & Uttar Pradesh",
      duration: "9 Days / 8 Nights",
      category: "Spiritual",
      price: 44999,
      image: "https://images.unsplash.com/photo-1604999333679-b86d54738315?w=800&h=600&fit=crop",
      rating: 4.8,
      reviews: 289,
      highlights: ["Bodh Gaya", "Sarnath", "Kushinagar", "Meditation Sessions"],
      heritage: true
    },
    {
      id: 10,
      name: "Tribal Culture of Northeast",
      location: "Assam & Nagaland",
      duration: "7 Days / 6 Nights",
      category: "Cultural",
      price: 41999,
      image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=800&h=600&fit=crop",
      rating: 4.7,
      reviews: 156,
      highlights: ["Hornbill Festival", "Tribal Villages", "Tea Gardens", "Traditional Crafts"],
      heritage: false
    },
    {
      id: 11,
      name: "Mumbai Heritage Walk",
      location: "Mumbai, Maharashtra",
      duration: "3 Days / 2 Nights",
      category: "Heritage",
      price: 18999,
      image: "https://images.unsplash.com/photo-1567157577867-05ccb1388e66?w=800&h=600&fit=crop",
      rating: 4.5,
      reviews: 234,
      highlights: ["Gateway of India", "Elephanta Caves", "Colonial Architecture", "Bollywood Tour"],
      heritage: true
    },
    {
      id: 12,
      name: "Mysore Palace & Coorg Culture",
      location: "Karnataka",
      duration: "5 Days / 4 Nights",
      category: "Cultural",
      price: 31999,
      image: "https://images.unsplash.com/photo-1609137144813-7d9921338f24?w=800&h=600&fit=crop",
      rating: 4.8,
      reviews: 201,
      highlights: ["Mysore Palace", "Coffee Plantations", "Kodava Culture", "Local Festivals"],
      heritage: false
    }
  ];

  const filteredTours = tours
    .filter(tour => filterCategory === 'All' || tour.category === filterCategory)
    .filter(tour => !showHeritageOnly || tour.heritage);

  return (
    <div className="cultural-tours-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1>Cultural Tours</h1>
          <p>Immerse Yourself in India's Rich Heritage, Traditions & Spiritual Wisdom</p>
          <div className="hero-badges">
            <span className="badge">🏛️ UNESCO Sites</span>
            <span className="badge">🎭 Traditional Arts</span>
            <span className="badge">🙏 Spiritual Journeys</span>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="intro-section">
        <div className="container">
          <h2>Journey Through Time & Tradition</h2>
          <p>
            India's cultural tapestry is woven with threads of ancient civilizations, spiritual wisdom, 
            architectural marvels, and living traditions. Our cultural tours offer authentic experiences 
            that connect you with India's soul - from UNESCO World Heritage Sites to vibrant local festivals, 
            from sacred temples to traditional art forms. Walk through history, witness timeless rituals, 
            and discover the stories that have shaped one of the world's oldest civilizations.
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="filters-section">
        <div className="container">
          <div className="filters-wrapper">
            <div className="category-filters">
              <span className="filter-label">Category:</span>
              {['All', 'Heritage', 'Spiritual', 'Cultural'].map(category => (
                <button
                  key={category}
                  className={`filter-btn ${filterCategory === category ? 'active' : ''}`}
                  onClick={() => setFilterCategory(category)}
                >
                  {category}
                </button>
              ))}
            </div>
            <label className="heritage-toggle">
              <input
                type="checkbox"
                checked={showHeritageOnly}
                onChange={(e) => setShowHeritageOnly(e.target.checked)}
              />
              <span>UNESCO Heritage Sites Only</span>
            </label>
          </div>
          <div className="results-info">
            {filteredTours.length} tour{filteredTours.length !== 1 ? 's' : ''} available
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
                  <div className="tour-badges">
                    <span className="category-badge">{tour.category}</span>
                    {tour.heritage && <span className="heritage-badge">UNESCO</span>}
                  </div>
                </div>
                <div className="tour-content">
                  <div className="tour-header">
                    <h3>{tour.name}</h3>
                    <div className="tour-rating">
                      <span className="stars">★ {tour.rating}</span>
                      <span className="reviews">({tour.reviews})</span>
                    </div>
                  </div>
                  <div className="tour-location">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                      <path d="M8 2C5.79 2 4 3.79 4 6c0 3 4 8 4 8s4-5 4-8c0-2.21-1.79-4-4-4zm0 5.5c-.83 0-1.5-.67-1.5-1.5S7.17 4.5 8 4.5 9.5 5.17 9.5 6 8.83 7.5 8 7.5z"/>
                    </svg>
                    {tour.location}
                  </div>
                  <div className="tour-duration">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                      <circle cx="8" cy="8" r="6" stroke="currentColor" fill="none"/>
                      <path d="M8 4v4l3 2" stroke="currentColor" fill="none"/>
                    </svg>
                    {tour.duration}
                  </div>
                  <div className="tour-highlights">
                    {tour.highlights.map((highlight, index) => (
                      <span key={index} className="highlight">• {highlight}</span>
                    ))}
                  </div>
                  <div className="tour-footer">
                    <div className="tour-price">
                      <span className="from">From</span>
                      <span className="amount">₹{tour.price.toLocaleString()}</span>
                    </div>
                    <button className="book-btn">View Details</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cultural Experiences */}
      <section className="experiences-section">
        <div className="container">
          <h2>What Makes Our Cultural Tours Special</h2>
          <div className="experiences-grid">
            <div className="experience-card">
              <div className="exp-icon">👨‍🏫</div>
              <h3>Expert Historians</h3>
              <p>Guided by passionate historians and cultural experts who bring stories to life</p>
            </div>
            <div className="experience-card">
              <div className="exp-icon">🎨</div>
              <h3>Authentic Experiences</h3>
              <p>Participate in traditional ceremonies, local festivals, and artisan workshops</p>
            </div>
            <div className="experience-card">
              <div className="exp-icon">🏛️</div>
              <h3>Heritage Access</h3>
              <p>Special access to monuments, private tours, and meet local communities</p>
            </div>
            <div className="experience-card">
              <div className="exp-icon">🍛</div>
              <h3>Culinary Journey</h3>
              <p>Traditional meals, cooking classes, and authentic regional cuisines</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <div className="cta-content">
          <h2>Experience India's Living Heritage</h2>
          <p>Book your cultural journey today and create memories that transcend time</p>
          <button className="cta-button">Explore All Cultural Tours</button>
        </div>
      </section>
    </div>
  );
};

export default CulturalTours;