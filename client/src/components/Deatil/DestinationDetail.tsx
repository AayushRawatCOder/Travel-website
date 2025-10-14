import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './DestinationDetail.scss';

// Import the dataById from your external file
import { dataById } from '../../data/index';

// --- Interfaces (Keep these) ---
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
// -------------------------------

// =========================================================================
//                             NEW PackagesSection Component
// =========================================================================

// interface PackagesSectionProps {
//   packages: TravelPackage[];
//   destinationName: string;
// }

// // NOTE: This component should ideally be in a separate file (e.g., PackagesSection.tsx)
// const PackagesSection: React.FC<PackagesSectionProps> = ({ packages, destinationName }) => {
//   const navigate = useNavigate();

//   const handleBookPackage = (packageId: number) => {
//     // Navigate to a specific booking page for the package
//     navigate(`/booking/${packageId}`);
//     console.log('Navigating to booking for package:', packageId);
//   };

//   if (packages.length === 0) {
//     return null; // Don't render the section if there are no packages
//   }

//   return (
//     <section className="packages-section">
//       <div className="container">
//         <h2>Travel Packages for {destinationName.split('-')[0]}</h2>
//         <div className="packages-grid">
//           {packages.map((pkg) => (
//             <article key={pkg.id} className="package-card">
//               <div className="package-image">
//                 <img src={pkg.image} alt={pkg.name} loading="lazy" />
//                 <span className="package-badge">{pkg.duration}</span>
//               </div>
//               <div className="package-content">
//                 <h3>{pkg.name}</h3>
//                 <div className="package-highlights">
//                   {pkg.highlights.map((highlight, index) => (
//                     <span key={index} className="highlight-tag">{highlight}</span>
//                   ))}
//                 </div>
//                 <div className="package-footer">
//                   <div className="package-price">
//                     <span className="price-label">Starting from</span>
//                     <span className="price-amount">₹{pkg.price.toLocaleString()}</span>
//                     <span className="price-per">per person</span>
//                   </div>
//                   <button
//                     className="book-btn"
//                     onClick={() => handleBookPackage(pkg.id)}
//                   >
//                     Book Now
//                   </button>
//                 </div>
//               </div>
//             </article>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };
interface PackagesSectionProps {
  packages: TravelPackage[];
  destinationName: string;
}

// NOTE: This component should ideally be in a separate file (e.g., PackagesSection.tsx)
const PackagesSection: React.FC<PackagesSectionProps> = ({ packages, destinationName }) => {
  const navigate = useNavigate();

  const generateSlug = (name: string): string => {
    return name
      .toLowerCase()
      .replace(/\s+/g, '-')  // Replace spaces with hyphens
      .replace(/[^a-z0-9-]/g, '')  // Remove any non-alphanumeric except hyphens
      .replace(/^-|-$/g, '');  // Trim leading/trailing hyphens
  };

  const handleBookPackage = (pkg: TravelPackage) => {
    // Generate unique slug from package name for navigation
    const packageSlug = generateSlug(pkg.name);
    // Navigate to booking page using the slug (ensures uniqueness across destinations)
    navigate(`/booking/${packageSlug}`);
    console.log('Navigating to booking for package:', packageSlug);
  };

  if (packages.length === 0) {
    return null; // Don't render the section if there are no packages
  }

  return (
    <section className="packages-section">
      <div className="container">
        <h2>Travel Packages for {destinationName.split('-')[0]}</h2>
        <div className="packages-grid">
          {packages.map((pkg) => (
            <article key={pkg.id} className="package-card">
              <div className="package-image">
                <img src={pkg.image} alt={pkg.name} loading="lazy" />
                <span className="package-badge">{pkg.duration}</span>
              </div>
              <div className="package-content">
                <h3>{pkg.name}</h3>
                <div className="package-highlights">
                  {pkg.highlights.map((highlight, index) => (
                    <span key={index} className="highlight-tag">{highlight}</span>
                  ))}
                </div>
                <div className="package-footer">
                  <div className="package-price">
                    <span className="price-label">Starting from</span>
                    <span className="price-amount">₹{pkg.price.toLocaleString()}</span>
                    <span className="price-per">per person</span>
                  </div>
                  <button
                    className="book-btn"
                    onClick={() => handleBookPackage(pkg)}
                  >
                    Book Now
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

// =========================================================================
//                           DestinationDetail Component
// =========================================================================

const DestinationDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [currentAttractionIndex, setCurrentAttractionIndex] = useState(0);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [destinationData, setDestinationData] = useState<DestinationData | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    
    // Simulate data loading
    setTimeout(() => {
      if (id && dataById[id]) {
        setDestinationData(dataById[id]);
      } else {
        // Redirect to 404 or destinations page
        navigate('/destinations');
      }
      setIsLoading(false);
    }, 500);
  }, [id, navigate]);

  const nextAttraction = () => {
    if (destinationData) {
      setCurrentAttractionIndex((prev) => (prev + 1) % destinationData.attractions.length);
    }
  };

  const prevAttraction = () => {
    if (destinationData) {
      setCurrentAttractionIndex((prev) => 
        (prev - 1 + destinationData.attractions.length) % destinationData.attractions.length
      );
    }
  };

  // NOTE: Removed the unused handleBookPackage from this component.

  const handleBookTrip = () => {
    console.log('Book trip to:', destinationData?.name);
    // Add booking logic here, perhaps navigate('/booking/general')
  };

  // Keyboard navigation for carousel
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
      {/* Hero Banner */}
      <section className="hero-banner">
        <div className="hero-overlay"></div>
        <img src={hero} alt={name} loading="eager" />
        <div className="hero-content">
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <span onClick={() => navigate('/')}>Home</span>
            <span>/</span>
            <span onClick={() => navigate('/destinations')}>Destinations</span>
            <span>/</span>
            <span>{name}</span>
          </nav>
          <h1>{name}</h1>
          <p className="tagline">{tagline}</p>
          <div className="hero-meta">
            <span className="region">📍 {region}</span>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="overview-section">
        <div className="container">
          <h2>Discover the Magic of {name.split('-')[0]}</h2>
          <div className="overview-content">
            {overview.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </div>
      </section>

      {/* Top Attractions Carousel */}
      <section className="attractions-section">
        <div className="container">
          <h2>Top Attractions</h2>
          <div className="carousel-container">
            <button 
              className="carousel-btn prev" 
              onClick={prevAttraction}
              aria-label="Previous attraction"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="M15 18l-6-6 6-6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            
            <div className="carousel-track">
              {attractions.map((attraction, index) => (
                <div
                  key={attraction.id}
                  className={`attraction-card ${index === currentAttractionIndex ? 'active' : ''}`}
                  style={{ transform: `translateX(-${currentAttractionIndex * 100}%)` }}
                >
                  <img src={attraction.image} alt={attraction.name} loading="lazy" />
                  <div className="attraction-content">
                    <h3>{attraction.name}</h3>
                    <p>{attraction.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <button 
              className="carousel-btn next" 
              onClick={nextAttraction}
              aria-label="Next attraction"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="M9 18l6-6-6-6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>

          <div className="carousel-dots" role="tablist" aria-label="Attraction navigation">
            {attractions.map((_, index) => (
              <button
                key={index}
                className={`dot ${index === currentAttractionIndex ? 'active' : ''}`}
                onClick={() => setCurrentAttractionIndex(index)}
                aria-label={`View attraction ${index + 1}`}
                role="tab"
                aria-selected={index === currentAttractionIndex}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Best Time to Visit */}
      <section className="seasonal-section">
        <div className="container">
          <h2>Best Time to Visit</h2>
          <div className="seasonal-grid">
            {seasonalInfo.map((season, index) => (
              <div key={index} className="seasonal-card">
                <div className="season-icon" aria-hidden="true">{season.icon}</div>
                <h3>{season.season}</h3>
                <div className="season-months">{season.months}</div>
                <div className="season-temp">{season.temperature}</div>
                <p>{season.description}</p>
              </div>
            ))}
          </div>
          <div className="recommendation">
            <strong>💡 Recommended:</strong> {seasonalInfo[0]?.description || 'Plan your visit according to the season information above.'}
          </div>
        </div>
      </section>

      {/* Travel Packages - NOW USING THE SEPARATE COMPONENT */}
      <PackagesSection packages={packages} destinationName={name} />

      {/* Gallery */}
      <section className="gallery-section">
        <div className="container">
          <h2>Photo Gallery</h2>
          <div className="gallery-grid">
            {gallery.map((image, index) => (
              <div 
                key={index} 
                className="gallery-item"
                onClick={() => setLightboxIndex(index)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    setLightboxIndex(index);
                  }
                }}
                aria-label={`View gallery image ${index + 1}`}
              >
                <img src={image} alt={`${name} Gallery ${index + 1}`} loading="lazy" />
                <div className="gallery-overlay">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <circle cx="11" cy="11" r="8" strokeWidth="2"/>
                    <path d="M21 21l-4.35-4.35" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <div 
          className="lightbox" 
          onClick={() => setLightboxIndex(null)}
          role="dialog"
          aria-modal="true"
          aria-label="Image gallery lightbox"
        >
          <button 
            className="lightbox-close"
            onClick={() => setLightboxIndex(null)}
            aria-label="Close lightbox"
          >
            ×
          </button>
          <img 
            src={gallery[lightboxIndex]} 
            alt={`${name} Gallery ${lightboxIndex + 1}`}
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}

      {/* Traveler Tips */}
      <section className="tips-section">
        <div className="container">
          <h2>Traveler Tips</h2>
          <div className="tips-grid">
            <div className="tips-card">
              <h3>✅ Do's</h3>
              <ul>
                {tips.dos.map((tip, index) => (
                  <li key={index}>{tip}</li>
                ))}
              </ul>
            </div>
            <div className="tips-card">
              <h3>❌ Don'ts</h3>
              <ul>
                {tips.donts.map((tip, index) => (
                  <li key={index}>{tip}</li>
                ))}
              </ul>
            </div>
            <div className="tips-card">
              <h3>🍜 Local Food Highlights</h3>
              <ul>
                {tips.localFood.map((food, index) => (
                  <li key={index}>{food}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="cta-section">
        <div className="cta-content">
          <h2>Ready to Explore {name}?</h2>
          <p>Book your dream trip today and create memories that will last a lifetime</p>
          <button 
            className="cta-button"
            onClick={handleBookTrip}
          >
            Book Your Trip to {name}
          </button>
        </div>
      </section>
    </div>
  );
};

export default DestinationDetail;