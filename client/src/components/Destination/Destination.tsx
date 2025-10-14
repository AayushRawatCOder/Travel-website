import React, { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import './Destinations.scss';
import { destinations } from '../../data/destinations';

interface Destination {
  id: string;
  name: string;
  image: string;
  description: string;
  region: string;
  category: string;
  duration: string;
  seasonalInfo: Array<{
    season: string;
    months: string;
    temperature: string;
    description: string;
    icon: string;
  }>;
}

const Destinations1: React.FC = () => {
  const [selectedRegion, setSelectedRegion] = useState<string>('All');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedTime, setSelectedTime] = useState<string>('All');
  const [viewMode, setViewMode] = useState<'grid' | 'list' | 'map'>('grid');
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const navigate = useNavigate();

  const uniqueRegions = useMemo(() => {
    const regions = destinations.map(dest => dest.region);
    return ['All', ...Array.from(new Set(regions))];
  }, []);

  const uniqueCategories = useMemo(() => {
    const categories = destinations.map(dest => dest.category);
    return ['All', ...Array.from(new Set(categories))];
  }, []);

  const filteredDestinations = useMemo(() => {
    return destinations.filter(dest => {
      const regionMatch = selectedRegion === 'All' || dest.region === selectedRegion;
      const categoryMatch = selectedCategory === 'All' || dest.category === selectedCategory;
      
      let timeMatch = selectedTime === 'All';
      if (!timeMatch && dest.seasonalInfo) {
        timeMatch = dest.seasonalInfo.some(season => 
          season.months.toLowerCase().includes(selectedTime.toLowerCase())
        );
      }
      
      return regionMatch && categoryMatch && timeMatch;
    });
  }, [selectedRegion, selectedCategory, selectedTime]);

  const resetFilters = () => {
    setSelectedRegion('All');
    setSelectedCategory('All');
    setSelectedTime('All');
  };

  const hasActiveFilters = selectedRegion !== 'All' || selectedCategory !== 'All' || selectedTime !== 'All';

  return (
    <div className="destinations-page">
      <section className="hero-section">
        <div className="hero-content">
          <h1>Explore India's Incredible Destinations</h1>
          <p>Discover diverse landscapes, rich heritage, and unforgettable experiences</p>
        </div>
      </section>

      <div className="destinations-container">
        <div className="filter-controls">
          <button
            className="mobile-filter-btn"
            onClick={() => setIsFilterOpen(!isFilterOpen)}
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
              <path d="M3 4h14M6 8h8M8 12h4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
            Filters
            {hasActiveFilters && <span className="filter-badge">{[selectedRegion, selectedCategory, selectedTime].filter(f => f !== 'All').length}</span>}
          </button>

          <span className="results-count">
            <strong>{filteredDestinations.length}</strong> {filteredDestinations.length === 1 ? 'destination' : 'destinations'} found
          </span>

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

        {isFilterOpen && (
          <div 
            className={`filter-overlay ${isFilterOpen ? 'open' : ''}`}
            onClick={() => setIsFilterOpen(false)}
          />
        )}

        <div style={{ display: 'flex', gap: '24px' }}>
          <aside className={`filter-sidebar ${isFilterOpen ? 'open' : ''}`}>
            <div className="filter-header">
              <h2>
                <svg width="22" height="22" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M3 4h14M6 8h8M8 12h4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
                Filters
              </h2>
              <button className="close-btn" onClick={() => setIsFilterOpen(false)}>
                <svg width="22" height="22" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M6 6l8 8M14 6l-8 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </button>
            </div>

            <div className="filter-section">
              <h3>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                  <path d="M8 2C5.79 2 4 3.79 4 6c0 3 4 8 4 8s4-5 4-8c0-2.21-1.79-4-4-4zm0 5.5c-.83 0-1.5-.67-1.5-1.5S7.17 4.5 8 4.5 9.5 5.17 9.5 6 8.83 7.5 8 7.5z"/>
                </svg>
                Region
              </h3>
              <div className="filter-chips">
                {uniqueRegions.map(region => (
                  <button
                    key={region}
                    className={`chip ${selectedRegion === region ? 'active' : ''}`}
                    onClick={() => setSelectedRegion(region)}
                  >
                    {region}
                  </button>
                ))}
              </div>
            </div>

            <div className="filter-section">
              <h3>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                  <path d="M8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12zm0-3.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                </svg>
                Category
              </h3>
              <div className="filter-radio-list">
                {uniqueCategories.map(category => (
                  <label
                    key={category}
                    className={`radio-option ${selectedCategory === category ? 'active' : ''}`}
                  >
                    <input
                      type="radio"
                      name="category"
                      value={category}
                      checked={selectedCategory === category}
                      onChange={(e) => setSelectedCategory(e.target.value)}
                    />
                    <label>{category}</label>
                  </label>
                ))}
              </div>
            </div>

            <div className="filter-section">
              <h3>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                  <path d="M8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12zm1-9H7v5h2V5z"/>
                  <circle cx="8" cy="8" r="1"/>
                </svg>
                Best Time to Visit
              </h3>
              <select
                className="filter-select"
                value={selectedTime}
                onChange={(e) => setSelectedTime(e.target.value)}
              >
                {['All', 'January', 'February', 'March', 'April', 'May', 'June',
                  'July', 'August', 'September', 'October', 'November', 'December'].map(month => (
                  <option key={month} value={month}>{month}</option>
                ))}
              </select>
            </div>

            <button
              className="reset-filters-btn"
              onClick={() => {
                resetFilters();
                setIsFilterOpen(false);
              }}
              disabled={!hasActiveFilters}
            >
              Reset All Filters
            </button>
          </aside>

          <main className="destinations-main">
            {viewMode === 'map' ? (
              <div className="map-view">
                <div className="map-placeholder">
                  <svg width="100" height="100" viewBox="0 0 100 100" fill="none">
                    <path d="M50 10C36.19 10 25 21.19 25 35c0 18.75 25 45 25 45s25-26.25 25-45c0-13.81-11.19-25-25-25zm0 35c-5.52 0-10-4.48-10-10s4.48-10 10-10 10 4.48 10 10-4.48 10-10 10z" fill="currentColor"/>
                  </svg>
                  <h3>Interactive Map</h3>
                  <p>Map integration coming soon</p>
                </div>
                <div className="map-pins">
                  {filteredDestinations.map(dest => (
                    <div key={dest.id} className="map-pin-item" onClick={() => navigate(`/destination/${dest.id}`)}>
                      <span className="pin-icon">📍</span>
                      <span>{dest.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <div className={`destinations-${viewMode}`}>
                {filteredDestinations.length === 0 ? (
                  <div className="empty-state">
                    <svg width="80" height="80" viewBox="0 0 100 100" fill="currentColor">
                      <path d="M50 10C36.19 10 25 21.19 25 35c0 18.75 25 45 25 45s25-26.25 25-45c0-13.81-11.19-25-25-25zm0 35c-5.52 0-10-4.48-10-10s4.48-10 10-10 10 4.48 10 10-4.48 10-10 10z"/>
                    </svg>
                    <h3>No destinations found</h3>
                    <p>Try adjusting your filters to see more results</p>
                  </div>
                ) : (
                  filteredDestinations.map(destination => (
                    <article key={destination.id} className="destination-card">
                      <div className="card-image">
                        <img src={destination.image} alt={destination.name} loading="lazy" />
                        <span className="card-badge">{destination.category}</span>
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
                            {destination.duration}
                          </span>
                        </div>
                        <p>{destination.description}</p>
                        <button
                          className="view-details-btn"
                          onClick={() => navigate(`/destination/${destination.id}`)}
                        >
                          Explore Destination
                          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor">
                            <path d="M6 12l4-4-4-4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </button>
                      </div>
                    </article>
                  ))
                )}
              </div>
            )}
          </main>
        </div>
      </div>

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
