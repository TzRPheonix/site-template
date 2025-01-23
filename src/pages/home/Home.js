import React, { useState, useEffect } from "react";
import { ServicesStyle1 } from "../../components/services/ServicesStyle1";
import { ServicesStyle2 } from "../../components/services/ServicesStyle2";
import { TestimonialsStyle1 } from "../../components/testimonials/TestimonialsStyle1";
import { TestimonialsStyle2 } from "../../components/testimonials/TestimonialsStyle2";
import { HeaderStyle1 } from "../../components/headers/HeaderStyle1";
import { HeaderStyle2 } from "../../components/headers/HeaderStyle2";
import { FooterStyle1 } from "../../components/footers/FooterStyle1";
import { FooterStyle2 } from "../../components/footers/FooterStyle2";
import "./Home.css";

const Home = () => {
  const [selectedService, setSelectedService] = useState(null);
  const [selectedTestimonial, setSelectedTestimonial] = useState(null);
  const [selectedHeader, setSelectedHeader] = useState(null);
  const [selectedFooter, setSelectedFooter] = useState(null);

  const [primaryColor, setPrimaryColor] = useState("#585191");
  const [secondaryColor, setSecondaryColor] = useState("#FFFFFF");

  // Effect to reload components when colors change
  useEffect(() => {
    if (selectedHeader) {
      setSelectedHeader(
        React.cloneElement(selectedHeader, {
          primaryColor,
          secondaryColor,
        })
      );
    }
    if (selectedService) {
      setSelectedService(
        React.cloneElement(selectedService, {
          primaryColor,
          secondaryColor,
        })
      );
    }
    if (selectedTestimonial) {
      setSelectedTestimonial(
        React.cloneElement(selectedTestimonial, {
          primaryColor,
          secondaryColor,
        })
      );
    }
    if (selectedFooter) {
      setSelectedFooter(
        React.cloneElement(selectedFooter, {
          primaryColor,
          secondaryColor,
        })
      );
    }
  }, [primaryColor, secondaryColor]);

  const replaceService = (component) => {
    setSelectedService(component);
  };

  const replaceTestimonial = (component) => {
    setSelectedTestimonial(component);
  };

  const replaceHeader = (component) => {
    setSelectedHeader(component);
  };

  const replaceFooter = (component) => {
    setSelectedFooter(component);
  };

  const clearComponent = (setComponent) => {
    setComponent(null);
  };

  return (
    <div className="homepage">
      {/* Sidebar */}
      <div className="sidebar">
        <h3>Couleurs Globales</h3>
        <label>
          Couleur principale:
          <input
            type="color"
            value={primaryColor}
            onChange={(e) => setPrimaryColor(e.target.value)}
          />
        </label>
        <label>
          Couleur secondaire:
          <input
            type="color"
            value={secondaryColor}
            onChange={(e) => setSecondaryColor(e.target.value)}
          />
        </label>

        <h3>Headers Disponibles</h3>
        <button onClick={() => replaceHeader(<HeaderStyle1 primaryColor={primaryColor} secondaryColor={secondaryColor} />)}>
          Header Style 1
        </button>
        <button onClick={() => replaceHeader(<HeaderStyle2 primaryColor={primaryColor} secondaryColor={secondaryColor} />)}>
          Header Style 2
        </button>
        <button className="delete-button" onClick={() => clearComponent(setSelectedHeader)}>
          Supprimer Header
        </button>

        <h3>Services Disponibles</h3>
        <button onClick={() => replaceService(<ServicesStyle1 primaryColor={primaryColor} secondaryColor={secondaryColor} />)}>
          Services Style 1
        </button>
        <button onClick={() => replaceService(<ServicesStyle2 primaryColor={primaryColor} secondaryColor={secondaryColor} />)}>
          Services Style 2
        </button>
        <button className="delete-button" onClick={() => clearComponent(setSelectedService)}>
          Supprimer Service
        </button>

        <h3>Testimonials Disponibles</h3>
        <button onClick={() => replaceTestimonial(<TestimonialsStyle1 primaryColor={primaryColor} secondaryColor={secondaryColor} />)}>
          Testimonials Style 1
        </button>
        <button onClick={() => replaceTestimonial(<TestimonialsStyle2 primaryColor={primaryColor} secondaryColor={secondaryColor} />)}>
          Testimonials Style 2
        </button>
        <button className="delete-button" onClick={() => clearComponent(setSelectedTestimonial)}>
          Supprimer Testimonial
        </button>

        <h3>Footers Disponibles</h3>
        <button onClick={() => replaceFooter(<FooterStyle1 primaryColor={primaryColor} secondaryColor={secondaryColor} />)}>
          Footer Style 1
        </button>
        <button onClick={() => replaceFooter(<FooterStyle2 primaryColor={primaryColor} secondaryColor={secondaryColor} />)}>
          Footer Style 2
        </button>
        <button className="delete-button" onClick={() => clearComponent(setSelectedFooter)}>
          Supprimer Footer
        </button>
      </div>

      {/* Main area */}
      <div className="main-area">
        <h2>Composez votre page</h2>
        <div
          className="components-container"
          style={{
            "--primary-color": primaryColor,
            "--secondary-color": secondaryColor,
          }}
        >
          {selectedHeader && <div className="component-wrapper">{selectedHeader}</div>}
          {selectedService && <div className="component-wrapper">{selectedService}</div>}
          {selectedTestimonial && <div className="component-wrapper">{selectedTestimonial}</div>}
          {selectedFooter && <div className="component-wrapper">{selectedFooter}</div>}
        </div>
      </div>
    </div>
  );
};

export default Home;
