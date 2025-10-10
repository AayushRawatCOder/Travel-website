import React, { useState } from 'react';
import { Mountain, Compass, Heart, Award, Globe, Camera, Waves, Sunrise, MapPin, Star, ArrowRight, Users, Clock } from 'lucide-react';
import './Experiences.style.scss';

const experiencesData = [
  {
    id: 1,
    title: 'Mountain Adventures',
    icon: <Mountain size={40} />,
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80',
    description: 'Conquer peaks and explore breathtaking mountain trails with expert guides.',
    category: 'Adventure',
    rating: 4.9,
    reviews: 234,
    duration: '5-7 Days',
    groupSize: '8-12',
    price: '₹45,000',
    badge: 'Popular',
    color: '#ff6b35',
  },
  {
    id: 2,
    title: 'Spiritual Journeys',
    icon: <Compass size={40} />,
    image: 'https://images.unsplash.com/photo-1532274402911-5a369e4c4bb5?w=800&q=80',
    description: 'Find inner peace through ancient temples and meditation retreats.',
    category: 'Spiritual',
    rating: 5.0,
    reviews: 189,
    duration: '3-5 Days',
    groupSize: '6-10',
    price: '₹28,000',
    badge: 'Trending',
    color: '#a855f7',
  },
  {
    id: 3,
    title: 'Romantic Getaways',
    icon: <Heart size={40} />,
    image: 'https://images.unsplash.com/photo-1519046904884-53103b34b206?w=800&q=80',
    description: 'Create unforgettable memories in the most romantic destinations.',
    category: 'Romance',
    rating: 4.8,
    reviews: 312,
    duration: '4-6 Days',
    groupSize: '2',
    price: '₹55,000',
    badge: 'Exclusive',
    color: '#ec4899',
  },
  {
    id: 4,
    title: 'Luxury Experiences',
    icon: <Award size={40} />,
    image: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?w=800&q=80',
    description: 'Indulge in world-class luxury and premium hospitality services.',
    category: 'Luxury',
    rating: 4.9,
    reviews: 156,
    duration: '7-10 Days',
    groupSize: '4-6',
    price: '₹85,000',
    badge: 'Premium',
    color: '#f59e0b',
  },
  {
    id: 5,
    title: 'Wildlife Safaris',
    icon: <Globe size={40} />,
    image: 'https://images.unsplash.com/photo-1549366021-9f761d450615?w=800&q=80',
    description: 'Witness incredible wildlife in their natural habitats.',
    category: 'Wildlife',
    rating: 4.7,
    reviews: 198,
    duration: '6-8 Days',
    groupSize: '10-15',
    price: '₹42,000',
    badge: 'Bestseller',
    color: '#10b981',
  },
  {
    id: 6,
    title: 'Photography Tours',
    icon: <Camera size={40} />,
    image: 'https://images.unsplash.com/photo-1452421822248-d4c2b47f0c81?w=800&q=80',
    description: 'Capture stunning landscapes with professional photography guidance.',
    category: 'Photography',
    rating: 4.8,
    reviews: 167,
    duration: '5-7 Days',
    groupSize: '6-8',
    price: '₹38,000',
    badge: 'New',
    color: '#06d6a0',
  },
  {
    id: 7,
    title: 'Beach Paradise',
    icon: <Waves size={40} />,
    image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&q=80',
    description: 'Relax on pristine beaches with crystal clear turquoise waters.',
    category: 'Beach',
    rating: 4.9,
    reviews: 289,
    duration: '4-6 Days',
    groupSize: '8-12',
    price: '₹32,000',
    badge: 'Hot',
    color: '#4ecdc4',
  },
  {
    id: 8,
    title: 'Cultural Immersion',
    icon: <Sunrise size={40} />,
    image: 'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=800&q=80',
    description: 'Experience authentic local culture and traditional heritage.',
    category: 'Cultural',
    rating: 4.8,
    reviews: 221,
    duration: '6-9 Days',
    groupSize: '10-14',
    price: '₹35,000',
    badge: 'Featured',
    color: '#fb8500',
  },
];

const Experiences = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [hoveredCard, setHoveredCard] = useState(null);

  const categories = ['All', 'Adventure', 'Spiritual', 'Romance', 'Luxury', 'Wildlife', 'Photography', 'Beach', 'Cultural'];

  const filteredExperiences = selectedCategory === 'All' 
    ? experiencesData 
    : experiencesData.filter(exp => exp.category === selectedCategory);

  return (
    <section className="experiences-section" id="experiences">
      <div className="experiences-container">
        <div className="section-header">
          <div className="header-badge">
            <MapPin size={18} />
            <span>EXPERIENCES</span>
          </div>
          <h2 className="section-title">Unforgettable Adventures Await</h2>
          <p className="section-subtitle">
            Discover handcrafted experiences designed to create lasting memories and transform your journey
          </p>
        </div>

        <div className="category-filter">
          {categories.map((category) => (
            <button
              key={category}
              className={`filter-btn ${selectedCategory === category ? 'active' : ''}`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="experiences-grid">
          {filteredExperiences.map((experience, index) => (
            <div
              key={experience.id}
              className="experience-card"
              style={{ '--index': index, '--card-color': experience.color } as React.CSSProperties}
              onMouseEnter={() => setHoveredCard(experience.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="card-image-wrapper">
                <div 
                  className="card-image" 
                  style={{ backgroundImage: `url(${experience.image})` }}
                ></div>
                <div className="card-overlay"></div>
                <div className="card-badge" style={{ background: experience.color }}>
                  {experience.badge}
                </div>
                <div className="card-icon-wrapper">
                  <div className="card-icon" style={{ background: `linear-gradient(135deg, ${experience.color}, rgba(251, 133, 0, 0.8))` }}>
                    {experience.icon}
                  </div>
                </div>
              </div>

              <div className="card-content">
                <div className="card-category" style={{ color: experience.color }}>
                  {experience.category}
                </div>
                <h3 className="card-title">{experience.title}</h3>
                <p className="card-description">{experience.description}</p>

                <div className="card-stats">
                  <div className="stat-item">
                    <Clock size={16} />
                    <span>{experience.duration}</span>
                  </div>
                  <div className="stat-item">
                    <Users size={16} />
                    <span>{experience.groupSize}</span>
                  </div>
                  <div className="stat-item rating">
                    <Star size={16} fill="currentColor" />
                    <span>{experience.rating}</span>
                    <span className="reviews">({experience.reviews})</span>
                  </div>
                </div>

                <div className="card-footer">
                  <div className="price-section">
                    <span className="price-label">Starting from</span>
                    <span className="price">{experience.price}</span>
                  </div>
                  <button 
                    className="explore-btn"
                    style={{ 
                      background: hoveredCard === experience.id 
                        ? `linear-gradient(135deg, ${experience.color}, rgba(251, 133, 0, 0.9))` 
                        : 'rgba(255, 107, 53, 0.1)'
                    }}
                  >
                    <span>Explore</span>
                    <ArrowRight size={20} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experiences;
