import React from "react";
import "../../componentsCSS/headers/HeaderStyle1.css";

export const HeaderStyle1 = ({ primaryColor, secondaryColor }) => {
  return (
    <header
      className="header-style-1"
      style={{
        "--primary-color": primaryColor,
        "--secondary-color": secondaryColor,
      }}
    >
      {/* Navigation */}
      <nav className="navbar">
        <ul>
          <li><a href="#home">Accueil</a></li>
          <li><a href="#services">Nos services</a></li>
          <li><a href="#about">À propos</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      {/* Hero Section */}
      <div className="hero">
        <div className="hero-text">
          <h1>Révélez Votre Potentiel</h1>
          <p>
            Nous vous accompagnons pour développer des solutions créatives et
            efficaces pour vos projets professionnels.
          </p>
        </div>
        <div className="hero-image">
          <p>Image</p>
        </div>
      </div>
    </header>
  );
};
