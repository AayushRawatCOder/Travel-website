import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './DestinationDetail.style.scss';
import { destinations } from '../../../data/destinations';

interface Attraction {
  id: number;
  name: string;
  image: string;
  description: string;
}

interface TravelPackage {
  id: number;
  name: string;
  duration: string;
  price: number;
  image: string;
  highlights: string[];
}

interface SeasonalInfo {
  season: string;
  months: string;
  temperature: string;
  description: string;
  icon: string;
}

interface DestinationData {
  id: string;
  name: string;
  tagline: string;
  region: string;
  hero: string;
  overview: string[];
  attractions: Attraction[];
  packages: TravelPackage[];
  seasonalInfo: SeasonalInfo[];
  gallery: string[];
  tips: {
    dos: string[];
    donts: string[];
    localFood: string[];
  };
}

const DestinationDetail: React.FC = () => {
  const { destinationId } = useParams<{ destinationId: string }>();
  const navigate = useNavigate();
  const [currentAttractionIndex, setCurrentAttractionIndex] = useState(0);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [destinationData, setDestinationData] = useState<DestinationData | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    const foundDestination = destinations.find((dest) => dest.id === destinationId);
    if (destinationId && foundDestination) {
      setDestinationData(foundDestination);
      setIsLoading(false);
    } else {
      navigate('/destinations');
    }
  }, [destinationId, navigate]);

  const nextAttraction = () => {
    if (destinationData) {
      setCurrentAttractionIndex((prev) => (prev + 1) % destinationData.gallery.length);
    }
  };

  const prevAttraction = () => {
    if (destinationData) {
      setCurrentAttractionIndex((prev) =>
        (prev - 1 + destinationData.gallery.length) % destinationData.gallery.length
      );
    }
  };

  const handleBookTrip = () => {
    console.log('Book trip to:', destinationData?.name);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        prevAttraction();
      } else if (e.key === 'ArrowRight') {
        nextAttraction();
      } else if (e.key === 'Escape' && lightboxIndex !== null) {
        setLightboxIndex(null);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxIndex, destinationData]);

  const generateSlug = (name: string): string => {
    return name
      .toLowerCase()
      .replace(/\s+/g, '-') // Replace spaces with hyphens
      .replace(/[^a-z0-9-]/g, '') // Remove any non-alphanumeric except hyphens
      .replace(/^-|-$/g, ''); // Trim leading/trailing hyphens
  };

  const handleBookPackage = (pkg: TravelPackage) => {
    const packageSlug = generateSlug(pkg.name);
    navigate(`/booking/${packageSlug}`);
    console.log('Navigating to booking for package:', packageSlug);
  };

  if (destinationData?.packages.length === 0) {
    return null; // Don't render the section if there are no packages
  }

  if (isLoading) {
    return (
      <div className="destination-detail">
        <div className="loading-spinner"></div>
      </div>
    );
  }

  if (!destinationData) {
    return null;
  }

  const { name, tagline, region, hero, overview, attractions, packages, seasonalInfo, gallery, tips } = destinationData;

  return (
    <div className="destination-detail">
      <section className="hero-section" style={{ backgroundImage: `url(${hero})` }}>
        <div className="hero-overlay"></div>
        <button className="back-btn" onClick={() => navigate('/destinations')}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path d="M15 18l-6-6 6-6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          Back
        </button>
        <div className="hero-content">
          <span className="category-tag">{region}</span>
          <h1 className="hero-title">{name}</h1>
          <p className="hero-tagline">{tagline}</p>
          <div className="hero-meta">
            <div className="meta-item">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
              </svg>
              Location
            </div>
            <div className="meta-item">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
              </svg>
              {attractions.length} Attractions
            </div>
            <div className="meta-item">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M9 11H7v2h2v-2zm4 0h-2v2h2v-2zm4 0h-2v2h2v-2zm2-7h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V9h14v11z" />
              </svg>
              All Seasons
            </div>
          </div>
        </div>
      </section>

      <div className="content-wrapper">
        <section className="overview-section">
          <h2 className="section-heading">Discover {name}</h2>
          <div className="overview-content">
            {overview.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </section>

        <section className="attractions-section">
          <h2 className="section-heading">Top Attractions</h2>
          <div className="attractions-grid">
            {attractions.map((attraction) => (
              <div key={attraction.id} className="attraction-card">
                <div className="attraction-image" style={{ backgroundImage: `url(${attraction.image})` }}></div>
                <div className="attraction-content">
                  <h3>{attraction.name}</h3>
                  <p>{attraction.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="packages-section">
          <h2 className="section-heading">Travel Packages</h2>
          <div className="packages-grid">
            {packages.map((pkg) => (
              <div key={pkg.id} className="package-card">
                <div className="package-image" style={{ backgroundImage: `url(${pkg.image})` }}>
                  <div className="package-duration">{pkg.duration}</div>
                </div>
                <div className="package-info">
                  <h3>{pkg.name}</h3>
                  <div className="package-meta">
                    <div className="package-price">₹{pkg.price.toLocaleString()}</div>
                  </div>
                  <ul className="package-highlights">
                    {pkg.highlights.map((highlight, index) => (
                      <li key={index}>
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                          <path d="M20 6L9 17l-5-5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                  <button className="book-now-btn" onClick={() => handleBookPackage(pkg)}>
                    Book Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="seasonal-section">
          <h2 className="section-heading">Best Time to Visit</h2>
          <div className="seasonal-grid">
            {seasonalInfo.map((season, index) => (
              <div key={index} className="season-card">
                <div className="season-icon">{season.icon}</div>
                <h3>{season.season}</h3>
                <div className="season-months">{season.months}</div>
                <div className="season-temp">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path d="M14 14.76V3.5a2.5 2.5 0 0 0-5 0v11.26a4.5 4.5 0 1 0 5 0z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  {season.temperature}
                </div>
                <p>{season.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="gallery-section">
          <h2 className="section-heading">Photo Gallery</h2>
          <div className="gallery-viewer">
            <div className="main-image" style={{ backgroundImage: `url(${gallery[currentAttractionIndex]})` }}>
              <button className="gallery-nav prev" onClick={prevAttraction} aria-label="Previous image">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M15 18l-6-6 6-6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              <button className="gallery-nav next" onClick={nextAttraction} aria-label="Next image">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M9 18l6-6-6-6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>
            <div className="gallery-thumbnails">
              {gallery.slice(0, 6).map((image, index) => (
                <div
                  key={index}
                  className={`thumbnail ${index === currentAttractionIndex ? 'active' : ''}`}
                  style={{ backgroundImage: `url(${image})` }}
                  onClick={() => setCurrentAttractionIndex(index)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      setCurrentAttractionIndex(index);
                    }
                  }}
                  aria-label={`View gallery image ${index + 1}`}
                ></div>
              ))}
            </div>
          </div>
        </section>

        <section className="tips-section">
          <h2 className="section-heading">Travel Tips</h2>
          <div className="tips-grid">
            <div className="tips-card">
              <h3>✅ Things to Do</h3>
              <ul>
                {tips.dos.map((tip, index) => (
                  <li key={index}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path d="M20 6L9 17l-5-5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    {tip}
                  </li>
                ))}
              </ul>
            </div>
            <div className="tips-card">
              <h3>❌ Things to Avoid</h3>
              <ul>
                {tips.donts.map((tip, index) => (
                  <li key={index}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path d="M18 6L6 18M6 6l12 12" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    {tip}
                  </li>
                ))}
              </ul>
            </div>
            <div className="tips-card food-card">
              <h3>🍴 Must Try Food</h3>
              <ul>
                {tips.localFood.map((food, index) => (
                  <li key={index}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    {food}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="cta-section">
          <div className="cta-card">
            <h2>Ready for an Adventure?</h2>
            <p>Start planning your dream trip to {name} today</p>
            <button className="cta-button" onClick={handleBookTrip}>
              Book Your Journey
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="M5 12h14M12 5l7 7-7 7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        </section>
      </div>

      {lightboxIndex !== null && (
        <div
          className="lightbox"
          onClick={() => setLightboxIndex(null)}
          role="dialog"
          aria-modal="true"
          aria-label="Image gallery lightbox"
        >
          <button className="lightbox-close" onClick={() => setLightboxIndex(null)} aria-label="Close lightbox">
            ×
          </button>
          <img src={gallery[lightboxIndex]} alt={`Gallery ${lightboxIndex + 1}`} onClick={(e) => e.stopPropagation()} />
        </div>
      )}
    </div>
  );
};

export default DestinationDetail;