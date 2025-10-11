import React, { useState } from 'react';
import { Mountain, Compass, Heart, Award, Globe, Camera, Waves, Sunrise, MapPin, Star, ArrowRight, Users, Clock, X, Quote, Calendar, TrendingUp, Sparkles } from 'lucide-react';
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
    color: '#0891b2',
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
    color: '#c026d3',
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
    color: '#f43f5e',
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
    color: '#14b8a6',
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
    color: '#06b6d4',
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
    color: '#f97316',
  },
];

const galleryImages = [
  { id: 1, image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&q=80', title: 'Himalayan Heights', location: 'Ladakh, India', category: 'Mountains' },
  { id: 2, image: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=1200&q=80', title: 'Backwater Serenity', location: 'Kerala, India', category: 'Nature' },
  { id: 3, image: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=1200&q=80', title: 'Golden Beaches', location: 'Goa, India', category: 'Beach' },
  { id: 4, image: 'https://images.unsplash.com/photo-1599661046289-e31897846e41?w=1200&q=80', title: 'Desert Wonders', location: 'Rajasthan, India', category: 'Desert' },
  { id: 5, image: 'https://images.unsplash.com/photo-1548013146-13a21f08d0f7?w=1200&q=80', title: 'Tropical Paradise', location: 'Andaman, India', category: 'Islands' },
  { id: 6, image: 'https://images.unsplash.com/photo-1561361513-2d000a50f0dc?w=1200&q=80', title: 'Spiritual Varanasi', location: 'Varanasi, India', category: 'Spiritual' },
  { id: 7, image: 'https://images.unsplash.com/photo-1605649487212-47bdab064df7?w=1200&q=80', title: 'Mountain Valleys', location: 'Sikkim, India', category: 'Mountains' },
  { id: 8, image: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=1200&q=80', title: 'Coastal Beauty', location: 'Tamil Nadu, India', category: 'Coast' },
  { id: 9, image: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=1200&q=80', title: 'Adventure Awaits', location: 'Himachal, India', category: 'Adventure' },
];

const travelerStories = [
  {
    id: 1,
    name: 'Priya & Rahul',
    location: 'Mumbai',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&q=80',
    story: 'Our Kerala honeymoon was pure magic. From houseboat stays to Ayurvedic massages, every moment was crafted perfectly. The guides were amazing and the experiences were truly authentic.',
    trip: 'Kerala Honeymoon Package',
    date: 'October 2024',
    rating: 5,
    photos: [
      'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=400&q=80',
      'https://images.unsplash.com/photo-1548013146-13a21f08d0f7?w=400&q=80',
      'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=400&q=80',
    ]
  },
  {
    id: 2,
    name: 'Arjun Singh',
    location: 'Delhi',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80',
    story: 'The Ladakh expedition was a dream come true! Challenging yet incredibly rewarding. The team ensured our safety while pushing us to achieve more. Breathtaking landscapes at every turn.',
    trip: 'Ladakh Adventure Expedition',
    date: 'September 2024',
    rating: 5,
    photos: [
      'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&q=80',
      'https://images.unsplash.com/photo-1589308078059-be1415eab4c3?w=400&q=80',
      'https://images.unsplash.com/photo-1605649487212-47bdab064df7?w=400&q=80',
    ]
  },
  {
    id: 3,
    name: 'Meera Desai',
    location: 'Bangalore',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=600&q=80',
    story: 'The spiritual journey to Varanasi was transformative. Witnessing the Ganga Aarti, exploring ancient temples, and connecting with local culture - it was a profound experience that I will cherish forever.',
    trip: 'Spiritual Varanasi Tour',
    date: 'August 2024',
    rating: 5,
    photos: [
      'https://images.unsplash.com/photo-1561361513-2d000a50f0dc?w=400&q=80',
      'https://images.unsplash.com/photo-1532274402911-5a369e4c4bb5?w=400&q=80',
      'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=400&q=80',
    ]
  },
];

const Experiences = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [hoveredCard, setHoveredCard] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [activeStory, setActiveStory] = useState(0);

  const categories = ['All', 'Adventure', 'Spiritual', 'Romance', 'Luxury', 'Wildlife', 'Photography', 'Beach', 'Cultural'];

  const filteredExperiences = selectedCategory === 'All' 
    ? experiencesData 
    : experiencesData.filter(exp => exp.category === selectedCategory);

  return (
    <div className="experiences-page">
      <section className="experiences-hero">
        <div className="hero-background" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=1920&q=80')" }}></div>
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <div className="hero-badge">EXPERIENCES</div>
          <h1 className="hero-title">Travel Stories & Adventures</h1>
          <p className="hero-subtitle">Explore breathtaking destinations through stunning visuals and authentic traveler stories</p>
        </div>
      </section>

      <section className="experiences-section">
        <div className="experiences-container">
          <div className="section-header">
            <div className="header-badge">
              <Sparkles size={18} />
              <span>POPULAR EXPERIENCES</span>
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
                    <div className="card-icon" style={{ background: `linear-gradient(135deg, ${experience.color}, rgba(249, 115, 22, 0.8))` }}>
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
                          ? `linear-gradient(135deg, ${experience.color}, rgba(249, 115, 22, 0.9))` 
                          : 'rgba(8, 145, 178, 0.1)'
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

      <section className="gallery-section">
        <div className="gallery-container">
          <div className="section-header">
            <div className="header-badge">
              <Camera size={18} />
              <span>PHOTO GALLERY</span>
            </div>
            <h2 className="section-title">Moments Captured Forever</h2>
            <p className="section-subtitle">Browse through stunning visuals from our travelers' incredible journeys</p>
          </div>

          <div className="gallery-grid">
            {galleryImages.map((item, index) => (
              <div 
                key={item.id} 
                className="gallery-item"
                style={{ '--gallery-index': index } as React.CSSProperties}
                onClick={() => setSelectedImage(item)}
              >
                <div className="gallery-image" style={{ backgroundImage: `url(${item.image})` }}></div>
                <div className="gallery-overlay">
                  <div className="gallery-info">
                    <h3 className="gallery-title">{item.title}</h3>
                    <p className="gallery-location">
                      <MapPin size={16} />
                      {item.location}
                    </p>
                  </div>
                  <div className="gallery-category">{item.category}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="stories-section">
        <div className="stories-container">
          <div className="section-header">
            <div className="header-badge">
              <Quote size={18} />
              <span>TRAVELER STORIES</span>
            </div>
            <h2 className="section-title">Real Journeys, Real Experiences</h2>
            <p className="section-subtitle">Hear from travelers who experienced the adventure of a lifetime</p>
          </div>

          <div className="stories-content">
            <div className="stories-navigation">
              {travelerStories.map((story, index) => (
                <button
                  key={story.id}
                  className={`story-nav-btn ${activeStory === index ? 'active' : ''}`}
                  onClick={() => setActiveStory(index)}
                >
                  <img src={story.image} alt={story.name} />
                  <div className="nav-info">
                    <span className="nav-name">{story.name}</span>
                    <span className="nav-trip">{story.trip}</span>
                  </div>
                </button>
              ))}
            </div>

            <div className="story-display">
              {travelerStories.map((story, index) => (
                <div 
                  key={story.id} 
                  className={`story-card ${activeStory === index ? 'active' : ''}`}
                >
                  <div className="story-header">
                    <img src={story.image} alt={story.name} className="story-avatar" />
                    <div className="story-meta">
                      <h3 className="story-name">{story.name}</h3>
                      <p className="story-location">{story.location}</p>
                      <div className="story-rating">
                        {[...Array(story.rating)].map((_, i) => (
                          <Star key={i} size={16} fill="currentColor" />
                        ))}
                      </div>
                    </div>
                    <div className="story-date">
                      <Calendar size={18} />
                      <span>{story.date}</span>
                    </div>
                  </div>

                  <div className="story-content">
                    <Quote className="quote-icon" size={40} />
                    <p className="story-text">{story.story}</p>
                    <div className="story-trip-badge">{story.trip}</div>
                  </div>

                  <div className="story-photos">
                    {story.photos.map((photo, photoIndex) => (
                      <div 
                        key={photoIndex} 
                        className="story-photo"
                        style={{ backgroundImage: `url(${photo})` }}
                        onClick={() => setSelectedImage({ image: photo, title: story.trip, location: story.name })}
                      ></div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="featured-destinations">
        <div className="featured-container">
          <div className="section-header">
            <div className="header-badge">
              <TrendingUp size={18} />
              <span>TRENDING NOW</span>
            </div>
            <h2 className="section-title">Featured Destinations</h2>
            <p className="section-subtitle">Explore the most sought-after locations this season</p>
          </div>

          <div className="featured-grid">
            <div className="featured-large" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&q=80')" }}>
              <div className="featured-overlay"></div>
              <div className="featured-content">
                <h3>Himalayan Adventure</h3>
                <p>Experience the majestic beauty of snow-capped peaks</p>
                <button className="featured-btn">
                  <span>Discover</span>
                  <ArrowRight size={20} />
                </button>
              </div>
            </div>

            <div className="featured-small" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=800&q=80')" }}>
              <div className="featured-overlay"></div>
              <div className="featured-content">
                <h3>Kerala Backwaters</h3>
                <p>Tranquil waterways & lush greenery</p>
                <button className="featured-btn">
                  <span>Explore</span>
                  <ArrowRight size={18} />
                </button>
              </div>
            </div>

            <div className="featured-small" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=800&q=80')" }}>
              <div className="featured-overlay"></div>
              <div className="featured-content">
                <h3>Goa Beaches</h3>
                <p>Golden sands & crystal waters</p>
                <button className="featured-btn">
                  <span>Explore</span>
                  <ArrowRight size={18} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {selectedImage && (
        <div className="lightbox" onClick={() => setSelectedImage(null)}>
          <button className="lightbox-close">
            <X size={32} />
          </button>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <img src={selectedImage.image} alt={selectedImage.title} />
            <div className="lightbox-info">
              <h3>{selectedImage.title}</h3>
              {selectedImage.location && <p>{selectedImage.location}</p>}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Experiences;
