import React from "react";
import "../../componentsCSS/services/ServicesStyle2.css";

export const ServicesStyle2 = ({ primaryColor, secondaryColor }) => {
  const services = [
    {
      title: "Développement Web",
      content: "Nous créons des sites web modernes, adaptatifs et optimisés pour le SEO.",
    },
    {
      title: "SEO & Marketing",
      content: "Augmentez votre visibilité avec des stratégies SEO et marketing digital avancées.",
    },
    {
      title: "Branding & Design",
      content: "Construisez une marque mémorable avec un design unique et percutant.",
    },
  ];

  return (
    <div
      className="services-style-2"
      style={{
        "--primary-color": primaryColor,
        "--secondary-color": secondaryColor,
      }}
    >
      <h2>Nos Services</h2>
      <div className="cards">
        {services.map((service, index) => (
          <div key={index} className={`card ${index % 2 === 0 ? "left" : "right"}`}>
            <h3>{service.title}</h3>
            <p>{service.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
