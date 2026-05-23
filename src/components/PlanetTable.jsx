import React from 'react';

const PLANETARY_FACTS = [
  { name: 'Mercury', mass: '0.330', diameter: '4,879', density: '5,427', gravity: '3.7' },
  { name: 'Venus', mass: '4.87', diameter: '12,104', density: '5,243', gravity: '8.9' },
  { name: 'Earth', mass: '5.97', diameter: '12,742', density: '5,514', gravity: '9.8' },
  { name: 'Mars', mass: '0.642', diameter: '6,779', density: '3,933', gravity: '3.7' },
  { name: 'Jupiter', mass: '1,898', diameter: '139,820', density: '1,326', gravity: '24.8' },
  { name: 'Saturn', mass: '568', diameter: '116,460', density: '687', gravity: '10.4' },
  { name: 'Uranus', mass: '86.8', diameter: '50,724', density: '1,271', gravity: '8.7' },
  { name: 'Neptune', mass: '102', diameter: '49,244', density: '1,638', gravity: '11.0' },
  { name: 'Pluto', mass: '0.0146', diameter: '2,376', density: '1,850', gravity: '0.6' }
];

export default function PlanetTable() {
  return (
    <section className="light-section" id="planetary-facts">
      <div className="container">
        <h2 className="section-title">Planetary Facts at a Glance</h2>
        <p className="section-subtitle">
          Below is a comparison table of physical properties of the major planets in our 
          solar system, showing mass, diameter, density, and gravity.
        </p>

        <div className="table-wrapper">
          <table className="facts-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Mass (10²⁴ kg)</th>
                <th>Diameter (km)</th>
                <th>Density (kg/m³)</th>
                <th>Gravity (m/s²)</th>
              </tr>
            </thead>
            <tbody>
              {PLANETARY_FACTS.map((fact) => (
                <tr key={fact.name}>
                  <td style={{ fontWeight: 600 }}>{fact.name}</td>
                  <td>{fact.mass}</td>
                  <td>{fact.diameter}</td>
                  <td>{fact.density}</td>
                  <td>{fact.gravity}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
