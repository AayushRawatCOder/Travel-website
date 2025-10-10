import React, { useState } from 'react';
import './AboutUs.scss';
import FAQs from '../FAQ/FAQ';

interface TeamMember {
  id: number;
  name: string;
  role: string;
  image: string;
  bio: string;
  social: {
    linkedin?: string;
    twitter?: string;
    email?: string;
  };
}

interface Award {
  id: number;
  title: string;
  organization: string;
  year: string;
  icon: string;
}

interface Partner {
  id: number;
  name: string;
  logo: string;
  description: string;
}

const AboutUs: React.FC = () => {
  const [activeTeamMember, setActiveTeamMember] = useState<number | null>(null);

  const teamMembers: TeamMember[] = [
    {
      id: 1,
      name: "Rajesh Kumar",
      role: "Founder & CEO",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
      bio: "With 15 years of experience in travel industry, Rajesh founded our company with a vision to make authentic Indian travel accessible to everyone.",
      social: {
        linkedin: "#",
        twitter: "#",
        email: "rajesh@company.com"
      }
    },
    {
      id: 2,
      name: "Priya Sharma",
      role: "Head of Operations",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
      bio: "Priya ensures every journey runs smoothly with her exceptional organizational skills and passion for customer satisfaction.",
      social: {
        linkedin: "#",
        email: "priya@company.com"
      }
    },
    {
      id: 3,
      name: "Arjun Patel",
      role: "Travel Designer",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
      bio: "Arjun crafts unique itineraries that blend adventure, culture, and comfort, drawing from his extensive travels across India.",
      social: {
        linkedin: "#",
        twitter: "#",
        email: "arjun@company.com"
      }
    },
    {
      id: 4,
      name: "Meera Singh",
      role: "Customer Relations Manager",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
      bio: "Meera's dedication to customer care ensures that every traveler feels valued and supported throughout their journey.",
      social: {
        linkedin: "#",
        email: "meera@company.com"
      }
    },
    {
      id: 5,
      name: "Vikram Reddy",
      role: "Marketing Director",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
      bio: "Vikram brings creative strategies to showcase India's incredible destinations to travelers around the world.",
      social: {
        linkedin: "#",
        twitter: "#",
        email: "vikram@company.com"
      }
    },
    {
      id: 6,
      name: "Anjali Verma",
      role: "Sustainability Officer",
      image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&h=400&fit=crop",
      bio: "Anjali leads our eco-tourism initiatives, ensuring our travel practices protect and preserve India's natural beauty.",
      social: {
        linkedin: "#",
        email: "anjali@company.com"
      }
    }
  ];

  const awards: Award[] = [
    {
      id: 1,
      title: "Best Tour Operator",
      organization: "India Tourism Awards",
      year: "2024",
      icon: "🏆"
    },
    {
      id: 2,
      title: "Sustainable Tourism Excellence",
      organization: "Green Travel Council",
      year: "2023",
      icon: "🌱"
    },
    {
      id: 3,
      title: "Customer Choice Award",
      organization: "TripAdvisor",
      year: "2023",
      icon: "⭐"
    },
    {
      id: 4,
      title: "Innovation in Travel",
      organization: "Travel Industry Association",
      year: "2022",
      icon: "💡"
    }
  ];

  const partners: Partner[] = [
    {
      id: 1,
      name: "Indian Railways",
      logo: "🚂",
      description: "Official partner for seamless train travel"
    },
    {
      id: 2,
      name: "Tourism Ministry",
      logo: "🏛️",
      description: "Certified by Ministry of Tourism, India"
    },
    {
      id: 3,
      name: "Eco Hotels Network",
      logo: "🏨",
      description: "Sustainable accommodation partners"
    },
    {
      id: 4,
      name: "Local Artisan Cooperative",
      logo: "🎨",
      description: "Supporting local communities"
    },
    {
      id: 5,
      name: "Wildlife Conservation Trust",
      logo: "🐾",
      description: "Responsible wildlife tourism"
    },
    {
      id: 6,
      name: "Heritage Foundation",
      logo: "🏰",
      description: "Preserving cultural heritage sites"
    }
  ];

  const values = [
    {
      icon: "🌍",
      title: "Sustainable Travel",
      description: "We prioritize eco-friendly practices that minimize environmental impact and support conservation efforts."
    },
    {
      icon: "🤝",
      title: "Local-First Approach",
      description: "We partner with local communities, ensuring tourism benefits the people who call these destinations home."
    },
    {
      icon: "💖",
      title: "Customer-Centric",
      description: "Your satisfaction is our priority. We craft personalized experiences that exceed expectations."
    },
    {
      icon: "✨",
      title: "Authentic Experiences",
      description: "We create genuine connections with India's culture, traditions, and natural wonders."
    },
    {
      icon: "🛡️",
      title: "Safety & Trust",
      description: "Your safety and security are paramount in every aspect of our travel planning and execution."
    },
    {
      icon: "🎯",
      title: "Excellence",
      description: "We maintain the highest standards of quality in services, accommodations, and experiences."
    }
  ];

  return (
    <div className="about-us-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1>About Us</h1>
          <p>Crafting Unforgettable Journeys Across Incredible India</p>
        </div>
      </section>

      {/* Our Story */}
      <section className="story-section">
        <div className="container">
          <div className="story-content">
            <div className="story-text">
              <h2>Our Story</h2>
              <div className="story-paragraphs">
                <p>
                  Our journey began in 2010 when our founder, Rajesh Kumar, realized that travelers were missing 
                  out on the real magic of India. After years of working in the corporate travel sector, he saw 
                  an opportunity to create something different—a travel company that didn't just show tourists 
                  the usual landmarks, but helped them discover the soul of India.
                </p>
                <p>
                  What started as a small operation with just three people and a dream has grown into a thriving 
                  company with over 50 team members. But our core mission remains unchanged: to create authentic, 
                  sustainable, and transformative travel experiences that connect people with the incredible 
                  diversity of Indian culture, landscapes, and traditions.
                </p>
                <p>
                  Today, we've helped thousands of travelers from around the world discover India in ways they 
                  never imagined. From the snow-capped Himalayas to the tropical backwaters of Kerala, from 
                  ancient temples to modern cities, we've crafted journeys that leave lasting impressions and 
                  create lifelong memories.
                </p>
              </div>
            </div>
            <div className="story-image">
              <img src="https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=600&h=800&fit=crop" alt="Our Journey" />
              <div className="story-stats">
                <div className="stat-item">
                  <span className="stat-number">14+</span>
                  <span className="stat-label">Years Experience</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">10,000+</span>
                  <span className="stat-label">Happy Travelers</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">150+</span>
                  <span className="stat-label">Destinations</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="values-section">
        <div className="container">
          <h2>Our Mission & Values</h2>
          <p className="values-intro">
            We believe in travel that transforms both the traveler and the destinations they visit. 
            Our values guide every decision we make and every experience we create.
          </p>
          <div className="values-grid">
            {values.map((value, index) => (
              <div key={index} className="value-card">
                <div className="value-icon">{value.icon}</div>
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Meet Our Team */}
      <section className="team-section">
        <div className="container">
          <h2>Meet Our Team</h2>
          <p className="team-intro">
            Our passionate team of travel experts, designers, and customer care professionals work 
            tirelessly to make your dream vacation a reality.
          </p>
          <div className="team-grid">
            {teamMembers.map((member) => (
              <div 
                key={member.id} 
                className="team-card"
                onMouseEnter={() => setActiveTeamMember(member.id)}
                onMouseLeave={() => setActiveTeamMember(null)}
              >
                <div className="team-image">
                  <img src={member.image} alt={member.name} />
                  <div className={`team-overlay ${activeTeamMember === member.id ? 'active' : ''}`}>
                    <p className="team-bio">{member.bio}</p>
                    <div className="team-social">
                      {member.social.linkedin && (
                        <a href={member.social.linkedin} target="_blank" rel="noopener noreferrer">
                          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
                          </svg>
                        </a>
                      )}
                      {member.social.twitter && (
                        <a href={member.social.twitter} target="_blank" rel="noopener noreferrer">
                          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M22.46 6c-.85.38-1.78.64-2.75.76a4.86 4.86 0 0 0 2.12-2.68 9.7 9.7 0 0 1-3.08 1.18 4.86 4.86 0 0 0-8.29 4.43A13.8 13.8 0 0 1 3.46 4.7a4.86 4.86 0 0 0 1.5 6.48A4.85 4.85 0 0 1 2.8 10.7v.06a4.86 4.86 0 0 0 3.9 4.76 4.9 4.9 0 0 1-2.2.08 4.86 4.86 0 0 0 4.54 3.37A9.76 9.76 0 0 1 2 20.7a13.75 13.75 0 0 0 7.55 2.21c9.14 0 14.3-7.72 13.95-14.64A9.94 9.94 0 0 0 22.46 6z"/>
                          </svg>
                        </a>
                      )}
                      {member.social.email && (
                        <a href={`mailto:${member.social.email}`}>
                          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                          </svg>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
                <div className="team-info">
                  <h3>{member.name}</h3>
                  <p className="team-role">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Awards & Certifications */}
      <section className="awards-section">
        <div className="container">
          <h2>Awards & Certifications</h2>
          <p className="awards-intro">
            Our commitment to excellence has been recognized by industry leaders and satisfied customers alike.
          </p>
          <div className="awards-grid">
            {awards.map((award) => (
              <div key={award.id} className="award-card">
                <div className="award-icon">{award.icon}</div>
                <h3>{award.title}</h3>
                <p className="award-org">{award.organization}</p>
                <span className="award-year">{award.year}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners & Collaborations */}
      <section className="partners-section">
        <div className="container">
          <h2>Our Partners & Collaborations</h2>
          <p className="partners-intro">
            We work with trusted partners who share our commitment to quality, sustainability, and authentic experiences.
          </p>
          <div className="partners-grid">
            {partners.map((partner) => (
              <div key={partner.id} className="partner-card">
                <div className="partner-logo">{partner.logo}</div>
                <h3>{partner.name}</h3>
                <p>{partner.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="cta-section">
        <div className="cta-content">
          <h2>Ready to Start Your Journey?</h2>
          <p>Join thousands of satisfied travelers who have discovered India with us</p>
          <button className="cta-button">Explore Destinations</button>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;