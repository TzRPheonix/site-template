import React from "react";
import "../../componentsCSS/footers/FooterStyle2.css";

export const FooterStyle2 = ({ primaryColor, secondaryColor }) => {
  return (
    <footer
      className="footer-style-2"
      style={{
        "--primary-color": primaryColor,
        "--secondary-color": secondaryColor,
      }}
    >
      <div className="footer-columns">
        <div className="footer-column">
          <h4>À propos</h4>
          <p>Nous sommes une entreprise dédiée à fournir des solutions innovantes pour vos projets.</p>
        </div>
        <div className="footer-column">
          <h4>Liens utiles</h4>
          <ul>
            <li><a href="#services">Nos services</a></li>
            <li><a href="#about">À propos</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>Contact</h4>
          <p>Email : contact@entreprise.com</p>
          <p>Téléphone : +33 1 23 45 67 89</p>
        </div>
      </div>
      <p className="footer-bottom">© 2025 Votre Entreprise. Tous droits réservés.</p>
    </footer>
  );
};
