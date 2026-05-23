import React from 'react';
import PlanetCard from './PlanetCard';

export default function PlanetGrid({ planets, originalPlanets, searchQuery, setSearchQuery }) {
  return (
    <section className="light-section-alt" id="planets">
      <div className="container">
        <h2 className="section-title">Visualizing the Differences Between Planets</h2>
        <p className="section-subtitle">
          Compare planets in our solar system by physical properties, sizes, and distances. 
          This dynamic grid filters your planetary queries on the fly.
        </p>

        {/* Real-time search bar placed above the grid frame */}
        <div className="search-wrapper">
          <svg
            className="search-field-icon"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="11" cy="11" r="8" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
          <input
            type="text"
            className="search-input-field"
            placeholder="Type to filter planets..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            id="planet-search"
            aria-label="Filter planet grid"
          />
        </div>

        {/* Outer Light-Blue Framed Container Box */}
        <div className="planet-grid-frame">
          {planets.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '3rem 0', color: 'var(--text-dark-secondary)' }}>
              <p style={{ fontSize: '1.2rem', fontWeight: 600, color: 'var(--primary-blue-hover)', marginBottom: '0.5rem' }}>
                No Planets Match Your Search
              </p>
              <p>Try searching for other celestial bodies or reset your query.</p>
            </div>
          ) : (
            <div className="planets-responsive-grid">
              {planets.map((planet) => (
                <PlanetCard key={planet.planet} planet={planet} />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
