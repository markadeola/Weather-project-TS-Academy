import React from 'react';

export default function VideoSection() {
  return (
    <section className="light-section" id="how-it-helps">
      <div className="container video-grid">
        {/* Left Column: Video Mock Player */}
        <div className="video-card">
          <img
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=800"
            alt="Space telemetry and digital planetary network"
            className="video-thumbnail"
            loading="lazy"
          />
          <button className="video-play-btn" aria-label="Play Science Video Overview">
            <svg
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="currentColor"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polygon points="5 3 19 12 5 21 5 3" />
            </svg>
          </button>
        </div>

        {/* Right Column: Text Information */}
        <div className="video-content">
          <h3>How Planetary Data Helps Us Understand Space</h3>
          <p>
            Planetary science is a field that studies planets, moons, and stellar systems. 
            By observing physical and orbital characteristics, we gain critical insights into 
            how planetary architectures form, evolve over time, and support ecosystems.
          </p>
          <p>
            Comparing distinct physical attributes—such as mass, diameter, gravity, and density—provides 
            astrophysicists with the foundational constants required to model atmospheric pressures, 
            planetary cores, and gravitational fields.
          </p>
        </div>
      </div>
    </section>
  );
}
