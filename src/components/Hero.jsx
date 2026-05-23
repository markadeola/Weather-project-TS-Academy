import heroEarthImage from '../assets/hero-earth.svg';

export default function Hero() {
  return (
    <header className="hero" id="home">
      <div className="container hero-grid">
        {/* Left Column: Text & Actions */}
        <div className="hero-content">
          <div className="hero-brand">
            <span className="hero-brand-icon" aria-hidden>
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                
              </svg>
            </span>
        
          </div>
          
          <h1 className="hero-title">Explore Our Solar System Through Data</h1>
          <p className="hero-desc">
            Understand the planets and bodies in our solar system through their physical 
            properties, distances, gravity, and eccentricity. This page retrieves data 
            dynamically via custom API configurations to give you real-time galactic measurements.
          </p>
          <div className="hero-actions">
            <a href="#planets" className="btn-primary">
              Explore the Data
            </a>
            <a href="#add-planet" className="btn-secondary">
              Contact Us
            </a>
          </div>
        </div>

        {/* Right Column: Floating Planet Visual */}
        <div className="hero-visual">
          <img
            src={heroEarthImage}
            alt="Glowing floating representation of planet Earth"
            className="hero-earth"
          />
        </div>
      </div>
    </header>
  );
}
