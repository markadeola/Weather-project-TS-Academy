import React from 'react';

export default function Navbar() {
  return (
    <nav className="navbar" id="app-navbar">
      <div className="container navbar-container">
        <a href="#home" className="navbar-logo">
          <svg
            width="26"
            height="26"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="10" />
            <path d="M2 12h20" />
            <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
          </svg>
          Cosmic<span>Explorer</span>
        </a>
        <ul className="navbar-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#planets">Planets</a></li>
          <li><a href="#planetary-facts">Facts</a></li>
          <li><a href="#add-planet">Contact</a></li>
          <li><a href="#about">About</a></li>
        </ul>
      </div>
    </nav>
  );
}
