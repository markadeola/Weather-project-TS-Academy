import React from 'react';

export default function Footer() {
  const teamMembers = ['Amaka', 'Alex', 'Sarah', 'David'];

  return (
    <footer className="footer-dark" id="about">
      <div className="container footer-dark-grid">
        {/* Column 1: About the Team */}
        <div className="footer-dark-col">
          <h3>About</h3>
          <p>
            We are a team of passionate developers and space enthusiasts building
            interactive, data-driven experiences that bring the wonders of our solar
            system closer to everyone. Driven by curiosity and powered by code.
          </p>
          <div className="footer-badges">
            {teamMembers.map(member => (
              <span key={member} className="footer-badge-item">{member}</span>
            ))}
          </div>
        </div>

        {/* Column 2: TSacademy */}
        <div className="footer-dark-col">
          <h3>Academy</h3>
          <ul className="footer-links-list">
            <li>
              <a
                href="https://tsacademyonline.com/"
                target="_blank"
                rel="noopener noreferrer"
                id="footer-link-tsacademy"
              >
                TSacademy
              </a>
            </li>
            <li>
              <a href="#home">Privacy Policy</a>
            </li>
            <li>
              <a href="#home">Terms of Service</a>
            </li>
          </ul>
        </div>

        {/* Column 3: Group Repo */}
        <div className="footer-dark-col">
          <h3>Project Hub</h3>
          <ul className="footer-links-list">
            <li>
              <a
                href="https://github.com/Nebula-Coders/capstone"
                target="_blank"
                rel="noopener noreferrer"
                id="footer-link-group-repo"
              >
                Nebula Coders Repository
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="container footer-dark-bottom">
        <p>&copy; {new Date().getFullYear()} Cosmic Explorer. All rights reserved.</p>
        <p>Built with React &amp; Cosmic Dust</p>
      </div>
    </footer>
  );
}
