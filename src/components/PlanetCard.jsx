import { useState } from 'react';
import planetPlaceholder from '../assets/planet-placeholder.svg';

export default function PlanetCard({ planet }) {
  const { planet: name, distanceFromSun, image } = planet;
  const [hasError, setHasError] = useState(false);
  const imageKey = image || planetPlaceholder;
  const imageSrc = hasError ? planetPlaceholder : (image || planetPlaceholder);

  return (
    <figure className="planet-figure-card" id={`planet-${name.toLowerCase()}`}>
      {/* Top half: Dark Cosmic Image container */}
      <div className="planet-img-box">
        <img
          key={imageKey}
          src={imageSrc}
          alt={`Planetary visual of ${name}`}
          loading="lazy"
          onError={() => setHasError(true)}
        />
      </div>

      {/* Bottom half: Clean White Detail Panel */}
      <figcaption className="planet-details-box">
        <h4>{name}</h4>
        <p>
          Distance from Sun: <span>{distanceFromSun} million km</span>
        </p>
      </figcaption>
    </figure>
  );
}
