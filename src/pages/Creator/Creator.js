import React, { useState, useEffect } from "react";
import { ServicesStyle1 } from "../../components/services/ServicesStyle1";
import { ServicesStyle2 } from "../../components/services/ServicesStyle2";
import { TestimonialsStyle1 } from "../../components/testimonials/TestimonialsStyle1";
import { TestimonialsStyle2 } from "../../components/testimonials/TestimonialsStyle2";
import { HeaderStyle1 } from "../../components/headers/HeaderStyle1";
import { HeaderStyle2 } from "../../components/headers/HeaderStyle2";
import { FooterStyle1 } from "../../components/footers/FooterStyle1";
import { FooterStyle2 } from "../../components/footers/FooterStyle2";
import "./Creator.css";

const Creator = () => {
  const [selectedService, setSelectedService] = useState(null);
  const [selectedTestimonial, setSelectedTestimonial] = useState(null);
  const [selectedHeader, setSelectedHeader] = useState(null);
  const [selectedFooter, setSelectedFooter] = useState(null);

  const [primaryColor, setPrimaryColor] = useState("#585191");
  const [secondaryColor, setSecondaryColor] = useState("#FFFFFF");

  useEffect(() => {
    if (selectedHeader)
      setSelectedHeader(
        React.cloneElement(selectedHeader, { primaryColor, secondaryColor })
      );
    if (selectedService)
      setSelectedService(
        React.cloneElement(selectedService, { primaryColor, secondaryColor })
      );
    if (selectedTestimonial)
      setSelectedTestimonial(
        React.cloneElement(selectedTestimonial, {
          primaryColor,
          secondaryColor,
        })
      );
    if (selectedFooter)
      setSelectedFooter(
        React.cloneElement(selectedFooter, { primaryColor, secondaryColor })
      );
  }, [primaryColor, secondaryColor]);

  const handleSelection = (value, type) => {
    const components = {
      HeaderStyle1: (
        <HeaderStyle1
          primaryColor={primaryColor}
          secondaryColor={secondaryColor}
        />
      ),
      HeaderStyle2: (
        <HeaderStyle2
          primaryColor={primaryColor}
          secondaryColor={secondaryColor}
        />
      ),
      ServicesStyle1: (
        <ServicesStyle1
          primaryColor={primaryColor}
          secondaryColor={secondaryColor}
        />
      ),
      ServicesStyle2: (
        <ServicesStyle2
          primaryColor={primaryColor}
          secondaryColor={secondaryColor}
        />
      ),
      TestimonialsStyle1: (
        <TestimonialsStyle1
          primaryColor={primaryColor}
          secondaryColor={secondaryColor}
        />
      ),
      TestimonialsStyle2: (
        <TestimonialsStyle2
          primaryColor={primaryColor}
          secondaryColor={secondaryColor}
        />
      ),
      FooterStyle1: (
        <FooterStyle1
          primaryColor={primaryColor}
          secondaryColor={secondaryColor}
        />
      ),
      FooterStyle2: (
        <FooterStyle2
          primaryColor={primaryColor}
          secondaryColor={secondaryColor}
        />
      ),
    };

    switch (type) {
      case "header":
        setSelectedHeader(value ? components[value] : null);
        break;
      case "service":
        setSelectedService(value ? components[value] : null);
        break;
      case "testimonial":
        setSelectedTestimonial(value ? components[value] : null);
        break;
      case "footer":
        setSelectedFooter(value ? components[value] : null);
        break;
      default:
        break;
    }
  };

  const askForTemplateName = () => {
    let name = "";
    while (!name) {
      name = prompt("Veuillez entrer un nom pour le template :");
      if (!name) alert("Le nom du template est obligatoire.");
    }
    return name;
  };

  const generateFileContent = (name) => {
    if (!name) return "";
    
    const imports = [];
    const components = [];

    if (selectedHeader) {
      imports.push(
        `import { ${selectedHeader.type.name} } from "../../components/headers/${selectedHeader.type.name}";`
      );
      components.push(
        `<${selectedHeader.type.name} primaryColor={"${primaryColor}"} secondaryColor={"${secondaryColor}"} />`
      );
    }
    if (selectedService) {
      imports.push(
        `import { ${selectedService.type.name} } from "../../components/services/${selectedService.type.name}";`
      );
      components.push(
        `<${selectedService.type.name} primaryColor={"${primaryColor}"} secondaryColor={"${secondaryColor}"} />`
      );
    }
    if (selectedTestimonial) {
      imports.push(
        `import { ${selectedTestimonial.type.name} } from "../../components/testimonials/${selectedTestimonial.type.name}";`
      );
      components.push(
        `<${selectedTestimonial.type.name} primaryColor={"${primaryColor}"} secondaryColor={"${secondaryColor}"} />`
      );
    }
    if (selectedFooter) {
      imports.push(
        `import { ${selectedFooter.type.name} } from "../../components/footers/${selectedFooter.type.name}";`
      );
      components.push(
        `<${selectedFooter.type.name} primaryColor={"${primaryColor}"} secondaryColor={"${secondaryColor}"} />`
      );
    }

    return `import React from 'react';
${imports.join("\n")}

export default function Template${name.replace(/\s+/g, "")}() {
  return (
    <>
      ${components.join("\n      ")}
    </>
  );
}`;
  };

  const handleSendEmail = () => {
    const name = askForTemplateName();
    const fileContent = generateFileContent(name);
    if (!fileContent) return;
    const mailtoLink = `mailto:?subject=Template%20pour%20${name}&body=${encodeURIComponent(
      fileContent
    )}`;
    window.location.href = mailtoLink;
  };

  const handleDownloadFile = () => {
    const name = askForTemplateName();
    const fileContent = generateFileContent(name);
    if (!fileContent) return;
    const blob = new Blob([fileContent], { type: "text/javascript" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `Template${name.replace(/\s+/g, "")}.js`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  return (
    <div className="creatorpage">
      <div className="sidebar">
        <h2 className="section-title">Couleurs Globales</h2>
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

        <div className="separator"></div>
        <h2 className="section-title">Composants Disponibles</h2>
        <h3>Headers Disponibles</h3>
        <select onChange={(e) => handleSelection(e.target.value, "header")}>
          <option value="">Sélectionner un Header</option>
          <option value="HeaderStyle1">Header Style 1</option>
          <option value="HeaderStyle2">Header Style 2</option>
        </select>

        <h3>Services Disponibles</h3>
        <select onChange={(e) => handleSelection(e.target.value, "service")}>
          <option value="">Sélectionner un Service</option>
          <option value="ServicesStyle1">Services Style 1</option>
          <option value="ServicesStyle2">Services Style 2</option>
        </select>

        <h3>Testimonials Disponibles</h3>
        <select
          onChange={(e) => handleSelection(e.target.value, "testimonial")}
        >
          <option value="">Sélectionner un Testimonial</option>
          <option value="TestimonialsStyle1">Testimonials Style 1</option>
          <option value="TestimonialsStyle2">Testimonials Style 2</option>
        </select>

        <h3>Footers Disponibles</h3>
        <select onChange={(e) => handleSelection(e.target.value, "footer")}>
          <option value="">Sélectionner un Footer</option>
          <option value="FooterStyle1">Footer Style 1</option>
          <option value="FooterStyle2">Footer Style 2</option>
        </select>
        <button className="send-button" onClick={handleSendEmail}>
          Envoie mail
        </button>
        <button className="send-button" onClick={handleDownloadFile}>
          Génération fichier
        </button>
      </div>

      <div className="main-area">
        <h2>Composez votre page</h2>
        <div
          className="components-container"
          style={{
            "--primary-color": primaryColor,
            "--secondary-color": secondaryColor,
          }}
        >
          {selectedHeader && (
            <div className="component-wrapper">{selectedHeader}</div>
          )}
          {selectedService && (
            <div className="component-wrapper">{selectedService}</div>
          )}
          {selectedTestimonial && (
            <div className="component-wrapper">{selectedTestimonial}</div>
          )}
          {selectedFooter && (
            <div className="component-wrapper">{selectedFooter}</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Creator;
