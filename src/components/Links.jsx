import React from 'react';

const Links = () => (
  <div className="social-links fade-in pixel-bordered">
    <p className="about-text pixel-text">
      © 2025 SCAICT 中部高中電資社團聯合會議
      <br />
    </p>
    <div className="links">
      <a href="https://www.instagram.com/scaict.tw/" target="_blank" rel="noopener noreferrer">
        <i className="fab fa-instagram pixel-icon"></i>
      </a>
      <a href="https://www.facebook.com/scaict.tw/" target="_blank" rel="noopener noreferrer">
        <i className="fab fa-facebook pixel-icon"></i>
      </a>
      <a href="https://github.com/SCAICT/website" target="_blank" rel="noopener noreferrer">
        <i className="fab fa-github pixel-icon"></i>
      </a>
      <a href="https://scaict.org/" target="_blank" rel="noopener noreferrer">
        <i className="fas fa-globe pixel-icon"></i>
      </a>
    </div>
  </div>
);

export default Links;
