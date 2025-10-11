import React, { useState } from 'react';
import { Mountain, Compass, TrendingUp, Users, Calendar, Star, ArrowRight, CheckCircle, MapPin, Clock, Award, Shield } from 'lucide-react';
import './AdventureTours.style.scss';

const AdventureTours = () => {
  const [selectedDifficulty, setSelectedDifficulty] = useState('All');

  const adventureTours = [
    {
      id: 1,
      title: 'Ladakh Bike Expedition',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80',
      location: 'Ladakh, J&K',
      duration: '10 Days',
      difficulty: 'Extreme',
      price: '₹65,000',
      rating: 4.9,
      reviews: 245,
      groupSize: '8-12'
    },
    {
      id: 2,
      title: 'Himalayan Trekking',
      image: 'https://images.unsplash.com/photo-1589308078059-be1415eab4c3?w=800&q=80',
      location: 'Manali to Leh',
      duration: '12 Days',
      difficulty: 'Hard',
      price: '₹48,000',
      rating: 4.8,
      reviews: 189,
      groupSize: '10-15'
    },
    {
      id: 3,
      title: 'Rishikesh Rafting',
      image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&q=80',
      location: 'Rishikesh, UK',
      duration: '3 Days',
      difficulty: 'Moderate',
      price: '₹12,000',
      rating: 4.7,
      reviews: 312,
      groupSize: '6-8'
    },
    {
      id: 4,
      title: 'Spiti Valley Expedition',
      image: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=800&q=80',
      location: 'Spiti, HP',
      duration: '8 Days',
      difficulty: 'Hard',
      price: '₹42,000',
      rating: 5.0,
      reviews: 156,
      groupSize: '8-10'
    },
    {
      id: 5,
      title: 'Paragliding Bir Billing',
      image: 'https://images.unsplash.com/photo-1564769625905-50e93615e769?w=800&q=80',
      location: 'Bir Billing, HP',
      duration: '2 Days',
      difficulty: 'Easy',
      price: '₹8,500',
      rating: 4.6,
      reviews: 198,
      groupSize: '4-6'
    },
    {
      id: 6,
      title: 'Scuba Diving Andaman',
      image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&q=80',
      location: 'Havelock, Andaman',
      duration: '5 Days',
      difficulty: 'Moderate',
      price: '₹35,000',
      rating: 4.9,
      reviews: 234,
      groupSize: '6-10'
    }
  ];

  const difficulties = ['All', 'Easy', 'Moderate', 'Hard', 'Extreme'];

  const filteredTours = selectedDifficulty === 'All' 
    ? adventureTours 
    : adventureTours.filter(tour => tour.difficulty === selectedDifficulty);

  const whyAdventure = [
    { icon: <Shield size={32} />, title: 'Safety First', description: 'Certified guides and equipment' },
    { icon: <Award size={32} />, title: 'Expert Team', description: 'Experienced professionals' },
    { icon: <Mountain size={32} />, title: 'Best Routes', description: 'Carefully selected trails' },
    { icon: <Users size={32} />, title: 'Small Groups', description: 'Personalized attention' }
  ];

  return (
    <div className="adventure-tours-page">
      <section className="adventure-hero">
        <div className="hero-background" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=80')" }}></div>
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <div className="hero-badge">
            <Mountain size={18} />
            <span>ADVENTURE TOURS</span>
          </div>
          <h1 className="hero-title">Unleash Your Inner Explorer</h1>
          <p className="hero-subtitle">Experience thrilling adventures across India's most spectacular landscapes</p>
        </div>
      </section>

      <section className="tours-section">
        <div className="tours-container">
          <div className="section-header">
            <div className="section-badge">EXPLORE ADVENTURES</div>
            <h2 className="section-title">Choose Your Adventure</h2>
            <p className="section-subtitle">From easy trails to extreme expeditions, find your perfect challenge</p>
          </div>

          <div className="difficulty-filter">
            {difficulties.map((difficulty) => (
              <button
                key={difficulty}
                className={`filter-btn ${selectedDifficulty === difficulty ? 'active' : ''}`}
                onClick={() => setSelectedDifficulty(difficulty)}
              >
                {difficulty}
              </button>
            ))}
          </div>

          <div className="tours-grid">
            {filteredTours.map((tour, index) => (
              <div key={tour.id} className="tour-card" style={{ '--index': index } as React.CSSProperties}>
                <div className="tour-image-wrapper">
                  <div className="tour-image" style={{ backgroundImage: `url(${tour.image})` }}></div>
                  <div className="difficulty-badge" data-difficulty={tour.difficulty.toLowerCase()}>
                    {tour.difficulty}
                  </div>
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

      {/* <section className="why-adventure-section">
        <div className="why-container">
          <div className="section-header">
            <div className="section-badge">WHY CHOOSE US</div>
            <h2 className="section-title">Adventure With Confidence</h2>
          </div>
          <div className="why-grid">
            {whyAdventure.map((item, index) => (
              <div key={index} className="why-card">
                <div className="why-icon">{item.icon}</div>
                <h3 className="why-title">{item.title}</h3>
                <p className="why-description">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section> */}
    </div>
  );
};

export default AdventureTours;
