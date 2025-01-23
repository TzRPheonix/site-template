import React from "react";
import "../../componentsCSS/headers/HeaderStyle2.css";

export const HeaderStyle2 = ({ primaryColor, secondaryColor }) => {
  return (
    <header
      className="header-style-2"
      style={{
        "--primary-color": primaryColor,
        "--secondary-color": secondaryColor,
      }}
    >
      {/* Navigation */}
      <nav className="navbar">
        <div className="logo">Logo</div>
        <ul className="nav-links">
          <li><a href="#home">Accueil</a></li>
          <li><a href="#services">Nos services</a></li>
          <li><a href="#about">À propos</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      {/* Hero Section */}
      <div className="hero">
        <h1>Révélez Votre Potentiel</h1>
        <p>
          Nous vous accompagnons pour développer des solutions créatives et
          efficaces pour vos projets professionnels.
        </p>
      </div>
    </header>
  );
};
