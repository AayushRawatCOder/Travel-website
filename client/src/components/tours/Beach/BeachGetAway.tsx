import React, { useState } from 'react';
import './BeachGetaway.scss';

interface Beach {
  id: number;
  name: string;
  location: string;
  duration: string;
  vibe: string;
  price: number;
  image: string;
  rating: number;
  reviews: number;
  activities: string[];
  bestFor: string[];
}

const BeachGetaways: React.FC = () => {
  const [filterVibe, setFilterVibe] = useState<string>('All');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  const beaches: Beach[] = [
    {
      id: 1,
      name: "Tropical Paradise - Andaman",
      location: "Havelock & Neil Island",
      duration: "6 Days / 5 Nights",
      vibe: "Adventure",
      price: 48999,
      image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&h=600&fit=crop",
      rating: 4.9,
      reviews: 678,
      activities: ["Scuba Diving", "Snorkeling", "Beach Hopping", "Water Sports"],
      bestFor: ["Couples", "Adventure Seekers"]
    },
    {
      id: 2,
      name: "Goa Beach Carnival",
      location: "North & South Goa",
      duration: "5 Days / 4 Nights",
      vibe: "Party",
      price: 28999,
      image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=800&h=600&fit=crop",
      rating: 4.7,
      reviews: 892,
      activities: ["Beach Parties", "Water Sports", "Nightlife", "Beach Shacks"],
      bestFor: ["Groups", "Party Lovers"]
    },
    {
      id: 3,
      name: "Serene Kerala Backwaters",
      location: "Kovalam & Varkala",
      duration: "5 Days / 4 Nights",
      vibe: "Relaxation",
      price: 35999,
      image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=800&h=600&fit=crop",
      rating: 4.8,
      reviews: 445,
      activities: ["Ayurveda Spa", "Yoga", "Beach Walks", "Houseboat"],
      bestFor: ["Couples", "Wellness Seekers"]
    },
    {
      id: 4,
      name: "Lakshadweep Crystal Waters",
      location: "Agatti & Bangaram",
      duration: "4 Days / 3 Nights",
      vibe: "Luxury",
      price: 62999,
      image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&h=600&fit=crop",
      rating: 4.9,
      reviews: 234,
      activities: ["Snorkeling", "Kayaking", "Lagoon Walks", "Island Tours"],
      bestFor: ["Honeymooners", "Luxury Travelers"]
    },
    {
      id: 5,
      name: "Pondicherry French Riviera",
      location: "Pondicherry",
      duration: "3 Days / 2 Nights",
      vibe: "Relaxation",
      price: 18999,
      image: "https://images.unsplash.com/photo-1586016950994-b7e83e2b0f86?w=800&h=600&fit=crop",
      rating: 4.6,
      reviews: 567,
      activities: ["Beach Cafes", "Cycling", "French Quarter Walk", "Auroville Visit"],
      bestFor: ["Solo Travelers", "Couples"]
    },
    {
      id: 6,
      name: "Gokarna Hippie Beaches",
      location: "Gokarna, Karnataka",
      duration: "4 Days / 3 Nights",
      vibe: "Relaxation",
      price: 22999,
      image: "https://images.unsplash.com/photo-1505142468610-359e7d316be0?w=800&h=600&fit=crop",
      rating: 4.7,
      reviews: 389,
      activities: ["Beach Trekking", "Cliff Camping", "Sunset Views", "Beach Cafes"],
      bestFor: ["Backpackers", "Nature Lovers"]
    },
    {
      id: 7,
      name: "Lakshadweep Adventure Week",
      location: "Multiple Islands",
      duration: "7 Days / 6 Nights",
      vibe: "Adventure",
      price: 72999,
      image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&h=600&fit=crop",
      rating: 4.9,
      reviews: 156,
      activities: ["Scuba Diving", "Deep Sea Fishing", "Island Hopping", "Coral Viewing"],
      bestFor: ["Adventure Groups", "Divers"]
    },
    {
      id: 8,
      name: "Mumbai Alibaug Weekend",
      location: "Alibaug, Maharashtra",
      duration: "2 Days / 1 Night",
      vibe: "Party",
      price: 14999,
      image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&h=600&fit=crop",
      rating: 4.5,
      reviews: 423,
      activities: ["Beach Resorts", "Water Sports", "Fort Visit", "Beachside Dining"],
      bestFor: ["Weekenders", "Families"]
    },
    {
      id: 9,
      name: "Luxury Maldives Style Andaman",
      location: "Radhanagar Beach",
      duration: "5 Days / 4 Nights",
      vibe: "Luxury",
      price: 58999,
      image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&h=600&fit=crop",
      rating: 4.9,
      reviews: 312,
      activities: ["Private Beach Access", "Spa Treatments", "Fine Dining", "Sunset Cruises"],
      bestFor: ["Honeymooners", "Luxury Couples"]
    }
  ];

  const filteredBeaches = beaches.filter(
    beach => filterVibe === 'All' || beach.vibe === filterVibe
  );

  return (
    <div className="beach-getaways-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1>Beach Getaways</h1>
          <p>Escape to Sun, Sand & Sea - India's Most Beautiful Coastal Destinations</p>
          <div className="hero-features">
            <span>🏖️ Pristine Beaches</span>
            <span>🌊 Water Activities</span>
            <span>☀️ Year-Round Sunshine</span>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="intro-section">
        <div className="container">
          <h2>Where Blue Meets Paradise</h2>
          <p>
            India's coastline stretches over 7,500 kilometers, offering everything from vibrant party beaches 
            to secluded tropical paradises. Whether you seek adventure in crystal-clear waters, relaxation on 
            pristine sands, or luxury in beachfront resorts, our beach getaways promise the perfect escape 
            from everyday life. Discover hidden coves, experience water sports, indulge in fresh seafood, and 
            let the ocean waves wash your worries away.
          </p>
        </div>
      </section>

      {/* Filters & View Toggle */}
      <section className="controls-section">
        <div className="container">
          <div className="controls-wrapper">
            <div className="vibe-filters">
              <span className="filter-label">Beach Vibe:</span>
              {['All', 'Adventure', 'Relaxation', 'Party', 'Luxury'].map(vibe => (
                <button
                  key={vibe}
                  className={`vibe-btn ${filterVibe === vibe ? 'active' : ''}`}
                  onClick={() => setFilterVibe(vibe)}
                >
                  {vibe}
                </button>
              ))}
            </div>
            <div className="view-toggle">
              <button
                className={viewMode === 'grid' ? 'active' : ''}
                onClick={() => setViewMode('grid')}
              >
                <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
                  <rect x="2" y="2" width="7" height="7" />
                  <rect x="11" y="2" width="7" height="7" />
                  <rect x="2" y="11" width="7" height="7" />
                  <rect x="11" y="11" width="7" height="7" />
                </svg>
              </button>
              <button
                className={viewMode === 'list' ? 'active' : ''}
                onClick={() => setViewMode('list')}
              >
                <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
                  <rect x="2" y="3" width="16" height="2" />
                  <rect x="2" y="9" width="16" height="2" />
                  <rect x="2" y="15" width="16" height="2" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Beach Cards */}
      <section className="beaches-section">
        <div className="container">
          <div className={`beaches-${viewMode}`}>
            {filteredBeaches.map(beach => (
              <div key={beach.id} className="beach-card">
                <div className="beach-image">
                  <img src={beach.image} alt={beach.name} />
                  <span className="vibe-badge">{beach.vibe}</span>
                </div>
                <div className="beach-content">
                  <div className="beach-header">
                    <h3>{beach.name}</h3>
                    <div className="rating">
                      <span className="stars">★ {beach.rating}</span>
                      <span className="reviews">({beach.reviews})</span>
                    </div>
                  </div>
                  <div className="beach-location">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                      <path d="M8 2C5.79 2 4 3.79 4 6c0 3 4 8 4 8s4-5 4-8c0-2.21-1.79-4-4-4zm0 5.5c-.83 0-1.5-.67-1.5-1.5S7.17 4.5 8 4.5 9.5 5.17 9.5 6 8.83 7.5 8 7.5z"/>
                    </svg>
                    {beach.location}
                  </div>
                  <div className="beach-duration">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                      <circle cx="8" cy="8" r="6" stroke="currentColor" fill="none"/>
                      <path d="M8 4v4l3 2" stroke="currentColor" fill="none"/>
                    </svg>
                    {beach.duration}
                  </div>
                  <div className="beach-activities">
                    <strong>Activities:</strong>
                    <div className="activity-tags">
                      {beach.activities.map((activity, index) => (
                        <span key={index} className="activity-tag">🌊 {activity}</span>
                      ))}
                    </div>
                  </div>
                  <div className="beach-bestfor">
                    <strong>Best For:</strong>
                    {beach.bestFor.map((type, index) => (
                      <span key={index} className="bestfor-tag">{type}</span>
                    ))}
                  </div>
                  <div className="beach-footer">
                    <div className="beach-price">
                      <span className="from">From</span>
                      <span className="amount">₹{beach.price.toLocaleString()}</span>
                      <span className="per">per person</span>
                    </div>
                    <button className="book-btn">Book Now</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Beach Activities */}
      <section className="activities-section">
        <div className="container">
          <h2>Popular Beach Activities</h2>
          <div className="activities-grid">
            <div className="activity-card">
              <div className="activity-icon">🤿</div>
              <h3>Scuba Diving</h3>
              <p>Explore vibrant coral reefs and marine life in crystal-clear waters</p>
            </div>
            <div className="activity-card">
              <div className="activity-icon">🏄‍♂️</div>
              <h3>Water Sports</h3>
              <p>Jet skiing, parasailing, banana boat rides and more thrills</p>
            </div>
            <div className="activity-card">
              <div className="activity-icon">🧘‍♀️</div>
              <h3>Beach Yoga</h3>
              <p>Practice mindfulness with sunrise yoga sessions on the sand</p>
            </div>
            <div className="activity-card">
              <div className="activity-icon">🍹</div>
              <h3>Beach Dining</h3>
              <p>Fresh seafood, sunset cocktails, and beachside barbecues</p>
            </div>
            <div className="activity-card">
              <div className="activity-icon">🚤</div>
              <h3>Island Hopping</h3>
              <p>Discover hidden beaches and untouched islands by boat</p>
            </div>
            <div className="activity-card">
              <div className="activity-icon">💆‍♀️</div>
              <h3>Spa & Wellness</h3>
              <p>Beachfront massages and traditional healing therapies</p>
            </div>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="included-section">
        <div className="container">
          <h2>What's Included in Our Beach Packages</h2>
          <div className="included-grid">
            <div className="included-item">
              <div className="check-icon">✓</div>
              <div className="included-text">
                <h4>Beachfront Accommodation</h4>
                <p>Handpicked resorts and hotels with ocean views</p>
              </div>
            </div>
            <div className="included-item">
              <div className="check-icon">✓</div>
              <div className="included-text">
                <h4>Meals & Beverages</h4>
                <p>Breakfast included, seafood specialties available</p>
              </div>
            </div>
            <div className="included-item">
              <div className="check-icon">✓</div>
              <div className="included-text">
                <h4>Airport Transfers</h4>
                <p>Comfortable pick-up and drop services</p>
              </div>
            </div>
            <div className="included-item">
              <div className="check-icon">✓</div>
              <div className="included-text">
                <h4>Water Activities</h4>
                <p>Complimentary snorkeling, kayaking equipment</p>
              </div>
            </div>
            <div className="included-item">
              <div className="check-icon">✓</div>
              <div className="included-text">
                <h4>Island Tours</h4>
                <p>Guided sightseeing and beach hopping excursions</p>
              </div>
            </div>
            <div className="included-item">
              <div className="check-icon">✓</div>
              <div className="included-text">
                <h4>24/7 Support</h4>
                <p>Round-the-clock assistance during your stay</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <div className="cta-content">
          <h2>Your Beach Paradise Awaits</h2>
          <p>Pack your swimsuit and sunscreen - it's time for the ultimate beach escape</p>
          <button className="cta-button">Find Your Perfect Beach</button>
        </div>
      </section>
    </div>
  );
};

export default BeachGetaways;