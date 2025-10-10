import React, { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import './Destinations.scss';

interface Destination {
  id: number;
  name: string;
  image: string;
  description: string;
  region: string;
  type: string;
  bestTime: string;
  coordinates: { lat: number; lng: number };
}

const destinations: Destination[] = [
  {
    id: 1,
    name: "Leh-Ladakh",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop",
    description: "Experience the breathtaking landscapes of the Himalayas with pristine monasteries and serene valleys.",
    region: "North",
    type: "Mountains",
    bestTime: "May-September",
    coordinates: { lat: 34.1526, lng: 77.5771 }
  },
  {
    id: 2,
    name: "Goa",
    image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=800&h=600&fit=crop",
    description: "Tropical paradise with golden beaches, vibrant nightlife, and Portuguese heritage.",
    region: "West",
    type: "Beaches",
    bestTime: "November-February",
    coordinates: { lat: 15.2993, lng: 74.1240 }
  },
  {
    id: 3,
    name: "Jaipur",
    image: "https://images.unsplash.com/photo-1599661046289-e31897846e41?w=800&h=600&fit=crop",
    description: "The Pink City showcasing royal palaces, magnificent forts, and vibrant culture.",
    region: "North",
    type: "Heritage",
    bestTime: "October-March",
    coordinates: { lat: 26.9124, lng: 75.7873 }
  },
  {
    id: 4,
    name: "Kerala Backwaters",
    image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=800&h=600&fit=crop",
    description: "Tranquil waterways, lush greenery, and traditional houseboat experiences.",
    region: "South",
    type: "Beaches",
    bestTime: "September-March",
    coordinates: { lat: 9.9312, lng: 76.2673 }
  },
  {
    id: 5,
    name: "Ranthambore",
    image: "https://images.unsplash.com/photo-1557050543-4d5f4e07ef46?w=800&h=600&fit=crop",
    description: "Premier wildlife sanctuary home to majestic Bengal tigers and diverse fauna.",
    region: "North",
    type: "Wildlife",
    bestTime: "October-April",
    coordinates: { lat: 26.0173, lng: 76.5026 }
  },
  {
    id: 6,
    name: "Varanasi",
    image: "https://images.unsplash.com/photo-1561361513-2d000a50f0dc?w=800&h=600&fit=crop",
    description: "Ancient spiritual city on the Ganges, rich in traditions and sacred rituals.",
    region: "North",
    type: "Spiritual",
    bestTime: "October-March",
    coordinates: { lat: 25.3176, lng: 82.9739 }
  },
  {
    id: 7,
    name: "Darjeeling",
    image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=800&h=600&fit=crop",
    description: "Hill station famous for tea gardens, toy train, and stunning Himalayan views.",
    region: "East",
    type: "Mountains",
    bestTime: "March-May, September-November",
    coordinates: { lat: 27.0410, lng: 88.2663 }
  },
  {
    id: 8,
    name: "Hampi",
    image: "https://images.unsplash.com/photo-1609137144813-7d9921338f24?w=800&h=600&fit=crop",
    description: "UNESCO World Heritage Site with ancient ruins and remarkable temple architecture.",
    region: "South",
    type: "Heritage",
    bestTime: "October-February",
    coordinates: { lat: 15.3350, lng: 76.4600 }
  }
];

const Destinations1: React.FC = () => {
  const [selectedRegion, setSelectedRegion] = useState<string>('All');
  const [selectedType, setSelectedType] = useState<string>('All');
  const [selectedTime, setSelectedTime] = useState<string>('All');
  const [viewMode, setViewMode] = useState<'grid' | 'list' | 'map'>('grid');
  const navigate = useNavigate();

  const filteredDestinations = useMemo(() => {
    return destinations.filter(dest => {
      const regionMatch = selectedRegion === 'All' || dest.region === selectedRegion;
      const typeMatch = selectedType === 'All' || dest.type === selectedType;
      const timeMatch = selectedTime === 'All' || dest.bestTime.includes(selectedTime);
      return regionMatch && typeMatch && timeMatch;
    });
  }, [selectedRegion, selectedType, selectedTime]);

  return (
    <div className="destinations-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1>Explore India's Incredible Destinations</h1>
          <p>Discover diverse landscapes, rich heritage, and unforgettable experiences</p>
        </div>
      </section>

      <div className="destinations-container">
        {/* Filter Sidebar */}
        <aside className="filter-sidebar">
          <div className="filter-section">
            <h3>Filter by Region</h3>
            <div className="filter-options">
              {['All', 'North', 'South', 'East', 'West', 'Central'].map(region => (
                <label key={region} className="filter-option">
                  <input
                    type="radio"
                    name="region"
                    value={region}
                    checked={selectedRegion === region}
                    onChange={(e) => setSelectedRegion(e.target.value)}
                  />
                  <span>{region}</span>
                </label>
              ))}
            </div>
          </div>

          <div className="filter-section">
            <h3>Type</h3>
            <div className="filter-options">
              {['All', 'Mountains', 'Beaches', 'Heritage', 'Wildlife', 'Spiritual'].map(type => (
                <label key={type} className="filter-option">
                  <input
                    type="radio"
                    name="type"
                    value={type}
                    checked={selectedType === type}
                    onChange={(e) => setSelectedType(e.target.value)}
                  />
                  <span>{type}</span>
                </label>
              ))}
            </div>
          </div>

          <div className="filter-section">
            <h3>Best Time to Visit</h3>
            <div className="filter-options">
              {['All', 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'].map(month => (
                <label key={month} className="filter-option">
                  <input
                    type="radio"
                    name="time"
                    value={month}
                    checked={selectedTime === month}
                    onChange={(e) => setSelectedTime(e.target.value)}
                  />
                  <span>{month}</span>
                </label>
              ))}
            </div>
          </div>

          <button className="reset-filters" onClick={() => {
            setSelectedRegion('All');
            setSelectedType('All');
            setSelectedTime('All');
          }}>
            Reset Filters
          </button>
        </aside>

        {/* Main Content */}
        <main className="destinations-main">
          {/* View Toggle */}
          <div className="view-controls">
            <div className="results-count">
              <span>{filteredDestinations.length} destinations found</span>
            </div>
            <div className="view-toggle">
              <button
                className={viewMode === 'grid' ? 'active' : ''}
                onClick={() => setViewMode('grid')}
                title="Grid View"
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
                title="List View"
              >
                <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
                  <rect x="2" y="3" width="16" height="2" />
                  <rect x="2" y="9" width="16" height="2" />
                  <rect x="2" y="15" width="16" height="2" />
                </svg>
              </button>
              <button
                className={viewMode === 'map' ? 'active' : ''}
                onClick={() => setViewMode('map')}
                title="Map View"
              >
                <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M10 2C6.69 2 4 4.69 4 8c0 4.5 6 10 6 10s6-5.5 6-10c0-3.31-2.69-6-6-6zm0 8c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"/>
                </svg>
              </button>
            </div>
          </div>

          {/* Destinations Display */}
          {viewMode === 'map' ? (
            <div className="map-view">
              <div className="map-placeholder">
                <svg width="100" height="100" viewBox="0 0 100 100" fill="none">
                  <path d="M50 10C36.19 10 25 21.19 25 35c0 18.75 25 45 25 45s25-26.25 25-45c0-13.81-11.19-25-25-25zm0 35c-5.52 0-10-4.48-10-10s4.48-10 10-10 10 4.48 10 10-4.48 10-10 10z" fill="currentColor"/>
                </svg>
                <h3>Interactive Map</h3>
                <p>Map integration coming soon</p>
                <div className="map-pins">
                  {filteredDestinations.map(dest => (
                    <div key={dest.id} className="map-pin-item">
                      <span className="pin-icon">📍</span>
                      <span>{dest.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ) : (
            <div className={`destinations-${viewMode}`}>
              {filteredDestinations.map(destination => (
                <article key={destination.id} className="destination-card">
                  <div className="card-image">
                    <img src={destination.image} alt={destination.name} />
                    <span className="card-badge">{destination.type}</span>
                  </div>
                  <div className="card-content">
                    <h3>{destination.name}</h3>
                    <div className="card-meta">
                      <span className="meta-item">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                          <path d="M8 2C5.79 2 4 3.79 4 6c0 3 4 8 4 8s4-5 4-8c0-2.21-1.79-4-4-4zm0 5.5c-.83 0-1.5-.67-1.5-1.5S7.17 4.5 8 4.5 9.5 5.17 9.5 6 8.83 7.5 8 7.5z"/>
                        </svg>
                        {destination.region}
                      </span>
                      <span className="meta-item">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                          <path d="M8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12zm1-9H7v5h2V5z"/>
                          <circle cx="8" cy="8" r="1"/>
                        </svg>
                        {destination.bestTime}
                      </span>
                    </div>
                    <p>{destination.description}</p>
                    <button 
                      className="view-details-btn" 
                      onClick={() => navigate(`/destination/${destination.id}`)}
                    >
                      View Details
                    </button>
                  </div>
                </article>
              ))}
            </div>
          )}
        </main>
      </div>

      {/* SEO Section */}
      <section className="seo-section">
        <div className="seo-content">
          <h2>Discover India: A Land of Endless Wonders</h2>
          <p>
            India is a treasure trove of diverse destinations that captivate travelers from around the globe. 
            From the snow-capped peaks of the Himalayas in the north to the sun-kissed beaches of the south, 
            from ancient heritage sites steeped in history to vibrant spiritual centers that touch the soul, 
            India offers an unparalleled travel experience.
          </p>
          <p>
            Explore magnificent mountain ranges perfect for trekking and adventure, pristine beaches ideal for 
            relaxation and water sports, UNESCO World Heritage Sites showcasing architectural marvels, wildlife 
            sanctuaries teeming with exotic species, and spiritual destinations that offer peace and enlightenment. 
            Whether you're seeking adventure tourism, cultural immersion, wildlife safaris, beach holidays, or 
            spiritual journeys, India's incredible destinations cater to every traveler's dream.
          </p>
          <p>
            Plan your perfect Indian vacation with our comprehensive destination guide. Discover the best time 
            to visit each location, explore regional specialties, and find destinations that match your travel 
            preferences. From popular tourist spots to hidden gems, embark on a journey through India's most 
            breathtaking landscapes and unforgettable experiences.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Destinations1;