import React, { useState, useEffect } from 'react';
import { Target, Heart, Award, Users, Globe, TrendingUp, Star, CheckCircle, Phone, Mail, Linkedin, Twitter, Instagram, Shield, Mountain, Sparkles, ArrowRight, Camera, Map, Plane } from 'lucide-react';
import './About.style.scss';

const AboutPage = () => {
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
    { icon: <Users size={40} />, number: '50,00+', label: 'Happy Travelers', color: '#0891b2' },
    { icon: <Globe size={40} />, number: '50+', label: 'Destinations Covered', color: '#f97316' },
    { icon: <Award size={40} />, number: '12+', label: 'Years of Excellence', color: '#f43f5e' },
    { icon: <Star size={40} />, number: '4.8/5', label: 'Customer Rating', color: '#f59e0b' },
  ];

  const values = [
    {
      icon: <Heart size={48} />,
      title: 'Passion for Travel',
      description: 'We live and breathe travel. Our team is composed of passionate explorers who have traversed the globe, bringing firsthand knowledge and authentic experiences to every journey we craft.',
      color: '#f43f5e',
      image: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800&q=80'
    },
    {
      icon: <Shield size={48} />,
      title: 'Trust & Safety',
      description: 'Your safety and peace of mind are paramount. We partner with verified accommodations, licensed guides, and trusted service providers ensuring the highest standards.',
      color: '#10b981',
      image: 'https://images.unsplash.com/photo-1551632811-561732d1e306?w=800&q=80'
    },
    {
      icon: <Sparkles size={48} />,
      title: 'Unique Experiences',
      description: 'We go beyond typical tourist destinations to offer authentic, immersive experiences. From hidden local gems to exclusive cultural encounters.',
      color: '#c026d3',
      image: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=800&q=80'
    },
    {
      icon: <Target size={48} />,
      title: 'Customer First',
      description: 'Every traveler is unique, and so should be their journey. We craft personalized itineraries that reflect your individual style with 24/7 dedicated support.',
      color: '#0891b2',
      image: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=800&q=80'
    },
  ];

  const team = [
    {
      name: 'Arjun Mehta',
      role: 'Founder & CEO',
      image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=600&q=80',
      bio: 'Over 20 years in travel industry, bringing authentic experiences.',
      social: { linkedin: '#', twitter: '#', instagram: '#' }
    },
    {
      name: 'Priya Sharma',
      role: 'Head of Operations',
      image: 'https://images.unsplash.com/photo-1494790778202-cad84cf45f1d?w=600&q=80',
      bio: 'Exceptional organizational skills ensuring smooth journeys.',
      social: { linkedin: '#', twitter: '#', instagram: '#' }
    },
    {
      name: 'Vikram Singh',
      role: 'Travel Experience Designer',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80',
      bio: 'Crafts unique itineraries blending adventure and culture.',
      social: { linkedin: '#', twitter: '#', instagram: '#' }
    },
    {
      name: 'Ananya Reddy',
      role: 'Customer Relations Lead',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=600&q=80',
      bio: 'Ensures every traveler receives personalized care.',
      social: { linkedin: '#', twitter: '#', instagram: '#' }
    },
    {
      name: 'Rohan Kumar',
      role: 'Adventure Specialist',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600&q=80',
      bio: 'Expert in adventure travel and remote destinations.',
      social: { linkedin: '#', twitter: '#', instagram: '#' }
    },
    {
      name: 'Kavya Iyer',
      role: 'Cultural Experience Curator',
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=600&q=80',
      bio: 'Designs immersive cultural experiences and traditions.',
      social: { linkedin: '#', twitter: '#', instagram: '#' }
    },
  ];

  const milestones = [
    { year: '2000', title: 'The Beginning', description: 'Started as a small travel agency in Mumbai with a vision to transform Indian tourism.', icon: <Plane size={28} /> },
    { year: '2005', title: 'National Expansion', description: 'Expanded operations across 20 major Indian cities, serving thousands of travelers.', icon: <Map size={28} /> },
    { year: '2010', title: 'International Recognition', description: 'Awarded Best Travel Company in India by International Travel Awards.', icon: <Award size={28} /> },
    { year: '2015', title: 'Digital Transformation', description: 'Launched comprehensive online platform making travel planning seamless.', icon: <Globe size={28} /> },
    { year: '2020', title: 'Sustainable Travel', description: 'Introduced eco-friendly packages and partnered with conservation projects.', icon: <Mountain size={28} /> },
    { year: '2025', title: 'Industry Leadership', description: 'Serving 50,000+ travelers annually with innovative experiences.', icon: <TrendingUp size={28} /> },
  ];

  const achievements = [
    { icon: <Award size={32} />, title: 'Best Travel Company 2024', org: 'India Tourism Awards' },
    { icon: <Star size={32} />, title: 'Excellence in Service', org: 'Travel & Leisure Magazine' },
    { icon: <Shield size={32} />, title: 'Trusted Brand Award', org: 'Customer Choice Awards' },
    { icon: <Heart size={32} />, title: 'Sustainable Tourism Leader', org: 'Green Travel Council' },
  ];

  return (
    <div className="about-page">
      <section className="about-hero">
        <div className="hero-background" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=1920&q=80')" }}></div>
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <div className="hero-badge">ABOUT US</div>
          <h1 className="hero-title">Crafting Unforgettable Journeys Since 2000</h1>
          <p className="hero-subtitle">We believe travel is not just about destinations, but about the stories you create, the cultures you embrace, and the memories that last forever.</p>
          <div className="hero-buttons">
            <button className="hero-btn primary">
              <span>Explore Our Story</span>
              <ArrowRight size={20} />
            </button>
            <button className="hero-btn secondary">
              <span>Meet Our Team</span>
              <Users size={20} />
            </button>
          </div>
        </div>
      </section>

      <section className="stats-section">
        <div className="stats-grid">
          {stats.map((stat, index) => (
            <div key={index} className="stat-card" style={{ '--stat-color': stat.color } as React.CSSProperties}>
              <div className="stat-icon">{stat.icon}</div>
              <div className="stat-number">{stat.number}</div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="story-section">
        <div className="story-content">
          <div className="story-text">
            <div className="section-badge">OUR STORY</div>
            <h2 className="section-title">A Journey That Started With a Dream</h2>
            <p className="story-paragraph">In the year 2000, our founder Arjun Mehta embarked on a mission to revolutionize travel in India. Having explored countless destinations and witnessed the transformative power of authentic travel experiences, he envisioned a company that would go beyond conventional tourism.</p>
            <p className="story-paragraph">What started as a small office in Mumbai has grown into one of India's most trusted travel companies. We've helped over 50,000 travelers discover the magic of India and beyond, creating personalized journeys that resonate with their unique aspirations.</p>
            <p className="story-paragraph">Our philosophy is simple yet profound: every journey should be as unique as the traveler undertaking it. We don't just book trips; we craft experiences that inspire, enlighten, and transform.</p>
            <div className="story-features">
              <div className="feature-item">
                <CheckCircle size={20} />
                <span>Personalized Itineraries</span>
              </div>
              <div className="feature-item">
                <CheckCircle size={20} />
                <span>24/7 Travel Support</span>
              </div>
              <div className="feature-item">
                <CheckCircle size={20} />
                <span>Verified Partners</span>
              </div>
              <div className="feature-item">
                <CheckCircle size={20} />
                <span>Best Price Guarantee</span>
              </div>
            </div>
          </div>
          <div className="story-images">
            <div className="story-image main" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=800&q=80')" }}></div>
            <div className="story-image secondary" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1503220317375-aaad61436b1b?w=800&q=80')" }}></div>
          </div>
        </div>
      </section>

      <section className="values-section">
        <div className="section-header">
          <div className="section-badge">OUR VALUES</div>
          <h2 className="section-title">What Drives Us Forward</h2>
          <p className="section-subtitle">Our core values shape every journey we create and every relationship we build</p>
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
            </div>
          ))}
        </div>
      </section>

      <section className="timeline-section">
        <div className="section-header">
          <div className="section-badge">OUR JOURNEY</div>
          <h2 className="section-title">Milestones That Define Us</h2>
          <p className="section-subtitle">A quarter-century of innovation, growth, and unforgettable experiences</p>
        </div>
        <div className="timeline">
          {milestones.map((milestone, index) => (
            <div key={index} className="timeline-item" style={{ '--timeline-index': index } as React.CSSProperties}>
              <div className="timeline-icon">{milestone.icon}</div>
              <div className="timeline-content">
                <div className="timeline-year">{milestone.year}</div>
                <h3 className="timeline-title">{milestone.title}</h3>
                <p className="timeline-description">{milestone.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="team-section">
        <div className="section-header">
          <div className="section-badge">OUR TEAM</div>
          <h2 className="section-title">Meet the Experts Behind Your Journey</h2>
          <p className="section-subtitle">Passionate travel professionals dedicated to creating extraordinary experiences</p>
        </div>
        <div className="team-grid">
          {team.map((member, index) => (
            <div key={index} className="team-card" style={{ '--team-index': index } as React.CSSProperties}>
              <div className="team-image-wrapper">
                <div className="team-image" style={{ backgroundImage: `url(${member.image})` }}></div>
              </div>
              <div className="team-content">
                <h3 className="team-name">{member.name}</h3>
                <p className="team-role">{member.role}</p>
                <p className="team-bio">{member.bio}</p>
                <div className="team-social">
                  <a href={member.social.linkedin} aria-label="LinkedIn"><Linkedin size={16} /></a>
                  <a href={member.social.twitter} aria-label="Twitter"><Twitter size={16} /></a>
                  <a href={member.social.instagram} aria-label="Instagram"><Instagram size={16} /></a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="achievements-section">
        <div className="section-header">
          <div className="section-badge">RECOGNITION</div>
          <h2 className="section-title">Awards & Achievements</h2>
          <p className="section-subtitle">Honored by industry leaders for our commitment to excellence</p>
        </div>
        <div className="achievements-grid">
          {achievements.map((achievement, index) => (
            <div key={index} className="achievement-card" style={{ '--achievement-index': index } as React.CSSProperties}>
              <div className="achievement-icon">{achievement.icon}</div>
              <h3 className="achievement-title">{achievement.title}</h3>
              <p className="achievement-org">{achievement.org}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="reviews-section">
        <div className="section-header">
          <div className="section-badge">GOOGLE REVIEWS</div>
          <h2 className="section-title">What Our Travelers Say</h2>
          <p className="section-subtitle">Authentic reviews from our happy customers</p>
        </div>
        <div className="reviews-container">
          <div 
            className="elfsight-app-c99f0272-00e3-41ef-8033-3d7f6155d682" 
            data-elfsight-app-lazy
          ></div>
        </div>
      </section>

      <section className="cta-section">
        <div className="cta-content">
          <div className="cta-icon">
            <Camera size={56} />
          </div>
          <h2 className="cta-title">Ready to Start Your Adventure?</h2>
          <p className="cta-subtitle">Let us create a personalized journey tailored just for you. Our travel experts are ready to bring your dreams to life.</p>
          <div className="cta-buttons">
            <button className="cta-btn primary">
              <span>Plan Your Trip</span>
              <ArrowRight size={20} />
            </button>
            <button className="cta-btn secondary">
              <Phone size={20} />
              <span>Call Us Now</span>
            </button>
          </div>
          <div className="cta-contact">
            <div className="contact-item">
              <Phone size={18} />
              <span>+91 123-456-7890</span>
            </div>
            <div className="contact-item">
              <Mail size={18} />
              <span>info@indiawander.com</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
