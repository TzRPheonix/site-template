import React from "react";
import "../../componentsCSS/footers/FooterStyle1.css";

export const FooterStyle1 = ({ primaryColor, secondaryColor }) => {
  return (
    <footer
      className="footer-style-1"
      style={{
        "--primary-color": primaryColor,
        "--secondary-color": secondaryColor,
      }}
    >
      <p>© 2025 Votre Entreprise. Tous droits réservés.</p>
      <p>
        <a href="#privacy">Politique de confidentialité</a> | 
        <a href="#terms"> Conditions d'utilisation</a>
      </p>
    </footer>
  );
};
