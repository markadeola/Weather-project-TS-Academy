import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import VideoSection from './components/VideoSection';
import PlanetGrid from './components/PlanetGrid';
import PlanetTable from './components/PlanetTable';
import DiscoveryForm from './components/DiscoveryForm';
import Footer from './components/Footer';
import planetPlaceholder from './assets/planet-placeholder.svg';

// Hardcoded fallback — exact copy of the API response
const LOCAL_FALLBACK_PLANETS = [
  { planet: 'Mercury', distanceFromSun: 57.9, image: 'https://anurella.github.io/images/planets/mercury.webp' },
  { planet: 'Venus', distanceFromSun: 108.2, image: 'https://anurella.github.io/images/planets/venus.webp' },
  { planet: 'Earth', distanceFromSun: 149.6, image: 'https://anurella.github.io/images/planets/earth.jpg' },
  { planet: 'Mars', distanceFromSun: 227.9, image: 'https://anurella.github.io/images/planets/mars.webp' },
  { planet: 'Jupiter', distanceFromSun: 778.6, image: 'https://anurella.github.io/images/planets/jupiter.webp' },
  { planet: 'Saturn', distanceFromSun: 1433.5, image: 'https://anurella.github.io/images/planets/saturn.webp' },
  { planet: 'Uranus', distanceFromSun: 2872.5, image: 'https://anurella.github.io/images/planets/uranus.webp' },
  { planet: 'Neptune', distanceFromSun: 4495.1, image: planetPlaceholder },
  { planet: 'Pluto', distanceFromSun: 5906.4, image: 'https://anurella.github.io/images/planets/pluto.webp' }
];

export default function App() {
  const [planets, setPlanets] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPlanets = async () => {
      try {
        setLoading(true);
        const response = await fetch('https://anurella.github.io/json/planets.json');

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();

        if (Array.isArray(data) && data.length > 0) {
          setPlanets(data);
        } else {
          throw new Error('Response is not a valid planet array');
        }
      } catch (err) {
        console.warn('API fetch error, activating local fallback:', err.message);
        setPlanets(LOCAL_FALLBACK_PLANETS);
      } finally {
        setLoading(false);
      }
    };

    fetchPlanets();
  }, []);

  // Filter planets reactively based on search input
  const filteredPlanets = planets.filter((p) =>
    p.planet.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="app-shell">
      <Navbar />
      <Hero />
      <VideoSection />

      {loading ? (
        <section className="light-section-alt" style={{ textAlign: 'center', padding: '6rem 0' }}>
          <div style={{
            width: '48px',
            height: '48px',
            border: '3px solid #E5E7EB',
            borderTopColor: '#1D4ED8',
            borderRadius: '50%',
            animation: 'spin 1s linear infinite',
            margin: '0 auto 1.5rem'
          }} />
          <p style={{ fontFamily: 'Outfit, sans-serif', color: '#4B5563', letterSpacing: '1px', textTransform: 'uppercase', fontSize: '0.85rem' }}>
            Scanning Cosmos...
          </p>
          <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
        </section>
      ) : (
        <PlanetGrid
          planets={filteredPlanets}
          originalPlanets={planets}
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
        />
      )}

      <PlanetTable />
      <DiscoveryForm />
      <Footer />
    </div>
  );
}
