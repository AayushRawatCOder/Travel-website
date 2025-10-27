import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Target, Heart, Award, Users, Globe, TrendingUp, Star, CheckCircle, Phone, Mail, Shield, Mountain, Sparkles, ArrowRight, Camera, Map, Plane, Compass, Clock, Calendar, ThumbsUp, Quote, Snowflake, Sun, Palmtree, Wind, Eye, Briefcase, Layers, ChevronRight } from 'lucide-react';
import './About.style.scss';
import founderImg from '../../assets/Images/founder and ceo.jpg'

const AboutPage = () => {
  const navigate = useNavigate();
  const [activeValue, setActiveValue] = useState(0);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://static.elfsight.com/platform/platform.js';
    script.async = true;
    script.setAttribute('data-use-service-core', '');
    document.body.appendChild(script);

    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  const stats = [
    { icon: <Users size={40} />, number: '5,000+', label: 'Happy Travelers', color: '#0891b2', suffix: '' },
    { icon: <Globe size={40} />, number: '50+', label: 'Destinations Covered', color: '#f97316', suffix: '' },
    { icon: <Award size={40} />, number: '12+', label: 'Years of Excellence', color: '#f43f5e', suffix: '' },
    { icon: <Star size={40} />, number: '4.8', label: 'Customer Rating', color: '#f59e0b', suffix: '/5' },
  ];

  const values = [
    {
      icon: <Heart size={48} />,
      title: 'Passion for Travel',
      description: 'We live and breathe the Himalayas. Our deep-rooted connection with Kashmir and Ladakh enables us to craft authentic, soul-stirring experiences that go beyond ordinary tourism.',
      color: '#f43f5e',
    },
    {
      icon: <Shield size={48} />,
      title: 'Trust & Safety',
      description: 'Your safety is paramount. We partner with verified accommodations, licensed guides, and trusted local service providers, ensuring the highest standards across every journey.',
      color: '#10b981',
    },
    {
      icon: <Sparkles size={48} />,
      title: 'Unique Experiences',
      description: 'From hidden monasteries to pristine alpine lakes, we curate immersive encounters with local cultures, breathtaking landscapes, and unforgettable adventures.',
      color: '#c026d3',
    },
    {
      icon: <Target size={48} />,
      title: 'Customer First',
      description: 'Every traveler deserves a personalized journey. We craft bespoke itineraries reflecting your dreams, backed by 24/7 dedicated support throughout your adventure.',
      color: '#0891b2',
    },
  ];

  const services = [
    {
      icon: <Heart size={32} />,
      title: 'Honeymoon Packages',
      description: 'Romantic escapes through Kashmir valleys and Ladakh landscapes',
      features: ['Private accommodations', 'Couple activities', 'Scenic locations', 'Romantic dinners'],
      color: '#f43f5e'
    },
    {
      icon: <Users size={32} />,
      title: 'Family Tours',
      description: 'Safe, enjoyable adventures for all ages across the Himalayas',
      features: ['Kid-friendly activities', 'Comfortable stays', 'Local cuisine', 'Cultural experiences'],
      color: '#10b981'
    },
    {
      icon: <Briefcase size={32} />,
      title: 'Corporate Packages',
      description: 'Team-building retreats in stunning mountain settings',
      features: ['Group activities', 'Conference facilities', 'Adventure sports', 'Networking events'],
      color: '#0891b2'
    },
    {
      icon: <Mountain size={32} />,
      title: 'Trekking Adventures',
      description: 'Challenging treks through pristine Himalayan wilderness',
      features: ['Expert guides', 'Quality equipment', 'Safety first', 'Multiple routes'],
      color: '#f97316'
    },
  ];

  const destinations = [
    {
      name: 'Srinagar',
      image: 'https://images.unsplash.com/photo-1568849676085-51415703900f?w=800&q=80',
      description: 'Dal Lake, Mughal Gardens, Houseboats',
      season: 'Mar - Oct',
      icon: <Palmtree size={24} />
    },
    {
      name: 'Gulmarg',
      image: 'https://images.unsplash.com/photo-1605649487212-47bdab064df7?w=800&q=80',
      description: 'Skiing, Gondola, Meadows',
      season: 'Dec - Mar',
      icon: <Snowflake size={24} />
    },
    {
      name: 'Pahalgam',
      image: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=800&q=80',
      description: 'Betaab Valley, Aru Valley, Lidder River',
      season: 'Apr - Sep',
      icon: <Sun size={24} />
    },
    {
      name: 'Leh',
      image: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=800&q=80',
      description: 'Monasteries, Markets, Palace',
      season: 'May - Sep',
      icon: <Mountain size={24} />
    },
    {
      name: 'Nubra Valley',
      image: 'https://images.unsplash.com/photo-1605649487212-47bdab064df7?w=800&q=80',
      description: 'Sand Dunes, Bactrian Camels, Monasteries',
      season: 'Jun - Sep',
      icon: <Wind size={24} />
    },
    {
      name: 'Pangong Lake',
      image: 'https://images.unsplash.com/photo-1568849676085-51415703900f?w=800&q=80',
      description: 'Crystal Blue Waters, Camping',
      season: 'May - Sep',
      icon: <Eye size={24} />
    },
  ];

  const milestones = [
    { 
      year: '2013', 
      title: 'The Beginning', 
      description: 'Dilawar Hussain founded Curiosity Tour and Travels in the heart of Kashmir with a passionate dream to showcase the region\'s authentic beauty.',
      icon: <Plane size={28} /> 
    },
    { 
      year: '2015', 
      title: 'Expanding Horizons', 
      description: 'Extended services to Ladakh, offering comprehensive Himalayan experiences across both regions.',
      icon: <Map size={28} /> 
    },
    { 
      year: '2017', 
      title: 'Recognition', 
      description: 'Earned local tourism board recognition for excellence in sustainable and responsible travel practices.',
      icon: <Award size={28} /> 
    },
    { 
      year: '2019', 
      title: 'Adventure Specialist', 
      description: 'Launched specialized trekking and adventure packages with certified mountain guides.',
      icon: <Mountain size={28} /> 
    },
    { 
      year: '2022', 
      title: 'Digital Transformation', 
      description: 'Comprehensive online booking platform launched, making trip planning seamless for travelers worldwide.',
      icon: <Globe size={28} /> 
    },
    { 
      year: '2025', 
      title: 'Industry Leader', 
      description: 'Serving 5,000+ travelers annually, recognized as Kashmir & Ladakh\'s trusted travel partner.',
      icon: <TrendingUp size={28} /> 
    },
  ];

  const achievements = [
    { icon: <Award size={32} />, title: 'Kashmir Tourism Excellence', org: 'J&K Tourism Board' },
    { icon: <Star size={32} />, title: 'Top Rated Agency 2024', org: 'Google Reviews' },
    { icon: <Shield size={32} />, title: 'Trusted Travel Partner', org: 'Verified by travelers' },
    { icon: <Heart size={32} />, title: 'Sustainable Tourism', org: 'Eco-Friendly Practices' },
  ];

  const whyChooseUs = [
    {
      icon: <Map size={32} />,
      title: 'Local Expertise',
      description: 'Born and raised in Jammu & Kashmir, we offer insider knowledge'
    },
    {
      icon: <Clock size={32} />,
      title: '24/7 Support',
      description: 'Round-the-clock assistance throughout your journey'
    },
    {
      icon: <CheckCircle size={32} />,
      title: 'Best Price Guarantee',
      description: 'Competitive rates with no hidden charges'
    },
    {
      icon: <ThumbsUp size={32} />,
      title: 'Verified Reviews',
      description: '4.8/5 rating from 1000+ satisfied travelers'
    },
    {
      icon: <Shield size={32} />,
      title: 'Safety First',
      description: 'Comprehensive insurance and safety measures'
    },
    {
      icon: <Layers size={32} />,
      title: 'Customization',
      description: 'Tailor-made itineraries matching your preferences'
    },
  ];

  return (
    <div className="about-page">
      <section className="about-hero">
        <div className="hero-background" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=80')" }}></div>
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <div className="hero-badge">
            <Compass size={18} />
            <span>ABOUT US</span>
          </div>
          <h1 className="hero-title">Your Gateway to<br />Kashmir & Ladakh</h1>
          <p className="hero-subtitle">Crafting unforgettable Himalayan journeys since 2013. Experience the magic of Kashmir's valleys and Ladakh's high-altitude deserts with local experts who call these mountains home.</p>
        </div>
        <div className="hero-scroll">
          <span>Scroll to explore</span>
          <div className="scroll-line"></div>
        </div>
      </section>

      <section className="stats-section">
        <div className="stats-grid">
          {stats.map((stat, index) => (
            <div key={index} className="stat-card" style={{ '--stat-color': stat.color } as React.CSSProperties}>
              <div className="stat-icon">{stat.icon}</div>
              <div className="stat-number">{stat.number}{stat.suffix}</div>
              <div className="stat-label">{stat.label}</div>
              <div className="stat-pulse"></div>
            </div>
          ))}
        </div>
      </section>

      <section className="founder-section">
        <div className="founder-container">
          <div className="founder-image-wrapper">
            <div className="founder-image" style={{ backgroundImage: `url(${founderImg})` }}>
              <div className="founder-overlay"></div>
            </div>
            <div className="founder-badge">
              <Award size={24} />
            </div>
            <div className="founder-quote">
              <Quote size={32} />
            </div>
          </div>
          <div className="founder-content">
            <div className="section-badge">
              <Mountain size={14} />
              <span>FOUNDER & CEO</span>
            </div>
            <h2 className="founder-name">Dilawar Hussain</h2>
            <p className="founder-tagline">Your Travel Planner For Kashmir & Ladakh</p>
            
            <div className="founder-quote-text">
              <Quote size={20} />
              <p>"I believe every traveler deserves to experience the raw, untouched beauty of the Himalayas. My mission is to share the magic of my homeland with the world, creating journeys that transform lives."</p>
            </div>

            <div className="founder-specialties">
              <div className="specialty-item">
                <Heart size={20} />
                <div>
                  <h4>Honeymoon Tours</h4>
                  <span>Romantic escapes</span>
                </div>
              </div>
              <div className="specialty-item">
                <Users size={20} />
                <div>
                  <h4>Family Packages</h4>
                  <span>Safe adventures</span>
                </div>
              </div>
              <div className="specialty-item">
                <Briefcase size={20} />
                <div>
                  <h4>Corporate Tours</h4>
                  <span>Team building</span>
                </div>
              </div>
              <div className="specialty-item">
                <Mountain size={20} />
                <div>
                  <h4>Trekking</h4>
                  <span>Mountain adventures</span>
                </div>
              </div>
            </div>

            <div className="founder-description">
              <p>Based in the heart of Magam, Jammu & Kashmir, Dilawar Hussain brings over a decade of expertise in crafting exceptional Himalayan experiences. As a local born and raised amidst these majestic mountains, he possesses an intimate understanding of the region's hidden gems, cultural nuances, and seasonal rhythms.</p>
              <p>His passion for sustainable tourism and deep respect for local communities ensures that every journey not only creates unforgettable memories but also contributes positively to the region's development.</p>
            </div>

            <div className="founder-credentials">
              <div className="credential-item">
                <CheckCircle size={18} />
                <span>Licensed Tour Operator</span>
              </div>
              <div className="credential-item">
                <CheckCircle size={18} />
                <span>12+ Years Experience</span>
              </div>
              <div className="credential-item">
                <CheckCircle size={18} />
                <span>Certified Mountain Guide</span>
              </div>
            </div>

            <div className="founder-location">
              <Map size={18} />
              <div>
                <span className="location-label">Based in</span>
                <span className="location-name">Magam, Jammu & Kashmir</span>
              </div>
            </div>

            <div className="founder-contact">
              <a href="tel:+917006612065" className="contact-btn">
                <Phone size={18} />
                <span>Call</span>
              </a>
              <a href="mailto:info@curiositytours.in" className="contact-btn">
                <Mail size={18} />
                <span>Send Email</span>
              </a>
            </div>

          </div>
        </div>
      </section>

      <section className="story-section">
        <div className="story-content">
          <div className="story-text">
            <div className="section-badge">
              <Globe size={14} />
              <span>OUR STORY</span>
            </div>
            <h2 className="section-title">A Journey Born from Passion</h2>
            <p className="story-paragraph">Founded a decade ago by Dilawar Hussain in the heart of Kashmir, Curiosity Tour and Travels has grown from a passionate dream into a trusted name in experiential travel. What began as a small venture rooted in love for the valley has blossomed into a company known for crafting unforgettable journeys across the majestic landscapes of Kashmir.</p>
            <p className="story-paragraph">Over the years, we've guided thousands of travelers—from solo wanderers to families and honeymooners—through snow-capped peaks, serene lakes, vibrant bazaars, and hidden cultural gems. Each trip is a story, and every smiling face we've served is a chapter in our legacy.</p>
            <p className="story-paragraph">Our strength lies in personalized itineraries, local expertise, and a commitment to making every moment magical. Whether it's a sunrise shikara ride or a trek through alpine meadows, we ensure your curiosity is rewarded with wonder.</p>
            <p className="story-paragraph">At Curiosity Tour and Travels, we don't just take you places—we create memories that last a lifetime.</p>
            <div className="story-features">
              <div className="feature-item">
                <CheckCircle size={20} />
                <span>100% Personalized Itineraries</span>
              </div>
              <div className="feature-item">
                <CheckCircle size={20} />
                <span>24/7 Emergency Support</span>
              </div>
              <div className="feature-item">
                <CheckCircle size={20} />
                <span>Locally Owned & Operated</span>
              </div>
              <div className="feature-item">
                <CheckCircle size={20} />
                <span>Sustainable Tourism Practices</span>
              </div>
              <div className="feature-item">
                <CheckCircle size={20} />
                <span>Verified Local Partners</span>
              </div>
              <div className="feature-item">
                <CheckCircle size={20} />
                <span>Best Price Guarantee</span>
              </div>
            </div>
          </div>
          <div className="story-images">
            <div className="story-image main" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80')" }}>
              <div className="image-caption">Kashmir Valley</div>
            </div>
            <div className="story-image secondary" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=800&q=80')" }}>
              <div className="image-caption">Ladakh Peaks</div>
            </div>
            <div className="story-badge">
              <Mountain size={32} />
              <span>Est. 2013</span>
            </div>
          </div>
        </div>
      </section>

      <section className="services-section">
        <div className="section-header">
          <div className="section-badge">
            <Sparkles size={14} />
            <span>OUR SERVICES</span>
          </div>
          <h2 className="section-title">Tailored Experiences for Every Traveler</h2>
          <p className="section-subtitle">From romantic honeymoons to thrilling treks, we craft journeys that match your dreams</p>
        </div>
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card" style={{ '--service-color': service.color } as React.CSSProperties}>
              <div className="service-icon" style={{ background: `linear-gradient(135deg, ${service.color}, ${service.color}dd)` }}>
                {service.icon}
              </div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
              <ul className="service-features">
                {service.features.map((feature, idx) => (
                  <li key={idx}>
                    <ChevronRight size={16} />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <button className="service-btn">
                <span>Learn More</span>
                <ArrowRight size={16} />
              </button>
            </div>
          ))}
        </div>
      </section>

      <section className="destinations-section">
        <div className="section-header">
          <div className="section-badge">
            <Compass size={14} />
            <span>TOP DESTINATIONS</span>
          </div>
          <h2 className="section-title">Explore Kashmir & Ladakh</h2>
          <p className="section-subtitle">Discover the breathtaking landscapes and rich cultures of the Himalayas</p>
        </div>
        <div className="destinations-grid">
          {destinations.map((destination, index) => (
            <div key={index} className="destination-card">
              <div className="destination-image" style={{ backgroundImage: `url(${destination.image})` }}>
                <div className="destination-overlay"></div>
                <div className="destination-season">
                  <Calendar size={14} />
                  <span>{destination.season}</span>
                </div>
              </div>
              <div className="destination-content">
                <div className="destination-icon">{destination.icon}</div>
                <h3 className="destination-name">{destination.name}</h3>
                <p className="destination-description">{destination.description}</p>
                <button className="destination-btn">
                  <span>Explore</span>
                  <ArrowRight size={14} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="values-section">
        <div className="section-header">
          <div className="section-badge">
            <Heart size={14} />
            <span>OUR VALUES</span>
          </div>
          <h2 className="section-title">What Drives Us Forward</h2>
          <p className="section-subtitle">Core principles that shape every journey we create</p>
        </div>
        <div className="values-grid">
          {values.map((value, index) => (
            <div 
              key={index} 
              className={`value-card ${activeValue === index ? 'active' : ''}`}
              onMouseEnter={() => setActiveValue(index)}
              style={{ '--value-color': value.color } as React.CSSProperties}
            >
              <div className="value-icon" style={{ color: value.color }}>{value.icon}</div>
              <h3 className="value-title">{value.title}</h3>
              <p className="value-description">{value.description}</p>
              <div className="value-number">{(index + 1).toString().padStart(2, '0')}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="why-choose-section">
        <div className="why-choose-content">
          <div className="section-header">
            <div className="section-badge">
              <Star size={14} />
              <span>WHY CHOOSE US</span>
            </div>
            <h2 className="section-title">What Sets Us Apart</h2>
            <p className="section-subtitle">Experience the difference of traveling with true local experts</p>
          </div>
          <div className="why-choose-grid">
            {whyChooseUs.map((item, index) => (
              <div key={index} className="why-item">
                <div className="why-icon">{item.icon}</div>
                <div className="why-text">
                  <h4>{item.title}</h4>
                  <p>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="timeline-section">
        <div className="section-header">
          <div className="section-badge">
            <Clock size={14} />
            <span>OUR JOURNEY</span>
          </div>
          <h2 className="section-title">Milestones That Define Us</h2>
          <p className="section-subtitle">Over a decade of innovation, growth, and unforgettable experiences</p>
        </div>
        <div className="timeline">
          {milestones.map((milestone, index) => (
            <div key={index} className="timeline-item" style={{ '--timeline-index': index } as React.CSSProperties}>
              <div className="timeline-year">{milestone.year}</div>
              <div className="timeline-connector">
                <div className="timeline-dot"></div>
                <div className="timeline-line"></div>
              </div>
              <div className="timeline-content">
                <div className="timeline-icon">{milestone.icon}</div>
                <h3 className="timeline-title">{milestone.title}</h3>
                <p className="timeline-description">{milestone.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="achievements-section">
        <div className="section-header">
          <div className="section-badge">
            <Award size={14} />
            <span>RECOGNITION</span>
          </div>
          <h2 className="section-title">Awards & Achievements</h2>
          <p className="section-subtitle">Honored for our commitment to excellence and sustainable tourism</p>
        </div>
        <div className="achievements-grid">
          {achievements.map((achievement, index) => (
            <div key={index} className="achievement-card" style={{ '--achievement-index': index } as React.CSSProperties}>
              <div className="achievement-icon">{achievement.icon}</div>
              <h3 className="achievement-title">{achievement.title}</h3>
              <p className="achievement-org">{achievement.org}</p>
              <div className="achievement-shine"></div>
            </div>
          ))}
        </div>
      </section>

      <section className="reviews-section">
        <div className="section-header">
          <div className="section-badge">
            <Star size={14} />
            <span>CUSTOMER REVIEWS</span>
          </div>
          <h2 className="section-title">What Our Travelers Say</h2>
          <p className="section-subtitle">Authentic reviews from our happy customers on Google</p>
        </div>
        <div className="reviews-container">
          <div 
            className="elfsight-app-c99f0272-00e3-41ef-8033-3d7f6155d682" 
            data-elfsight-app-lazy
          ></div>
        </div>
      </section>

      <section className="cta-section">
        <div className="cta-background" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=80')" }}></div>
        <div className="cta-overlay"></div>
        <div className="cta-content">
          <div className="cta-icon">
            <Camera size={56} />
          </div>
          <h2 className="cta-title">Ready for Your Himalayan Adventure?</h2>
          <p className="cta-subtitle">Let us create a personalized journey through Kashmir & Ladakh tailored just for you. Our local experts are ready to bring your dreams to life.</p>
          <div className="cta-buttons">
            <button className="cta-btn primary" onClick={() => navigate('/contact')}>
              <Calendar size={20} />
              <span>Plan Your Trip</span>
              <ArrowRight size={20} />
            </button>
            <a href="tel:+917006612065" className="cta-btn secondary">
              <Phone size={20} />
              <span>+917006612065</span>
            </a>
          </div>
          <div className="cta-features">
            <div className="cta-feature">
              <CheckCircle size={18} />
              <span>Free Consultation</span>
            </div>
            <div className="cta-feature">
              <CheckCircle size={18} />
              <span>Custom Itineraries</span>
            </div>
            <div className="cta-feature">
              <CheckCircle size={18} />
              <span>Best Price Guarantee</span>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default AboutPage;
