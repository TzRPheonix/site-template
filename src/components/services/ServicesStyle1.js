import React from "react";
import "../../componentsCSS/services/ServicesStyle1.css";

export const ServicesStyle1 = ({ primaryColor, secondaryColor }) => {
  return (
    <div
      className="services-style-1"
      style={{
        "--primary-color": primaryColor,
        "--secondary-color": secondaryColor,
      }}
    >
      <h2>Nos Services</h2>
      <div className="cards">
        <div className="card">
          <h3>Développement Web</h3>
          <p>Nous créons des sites web modernes et performants adaptés à vos besoins.</p>
        </div>
        <div className="card">
          <h3>SEO et Marketing</h3>
          <p>Optimisez votre visibilité et attirez plus de clients grâce au SEO.</p>
        </div>
        <div className="card">
          <h3>Branding</h3>
          <p>Développez l'identité de votre marque avec un design et une stratégie clairs.</p>
        </div>
      </div>
    </div>
  );
};
