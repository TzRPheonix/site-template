import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Menu.css";

const Menu = () => {
  const [savedPages, setSavedPages] = useState([]);

  useEffect(() => {
    const importAll = (r) => r.keys().map(r);
    try {
      const pages = importAll(require.context("../SavedPage", false, /\.js$/));
      setSavedPages(pages.map(page => page.default.name));
    } catch (error) {
      console.error("Erreur lors du chargement des pages enregistrées:", error);
    }
  }, []);

  return (
    <div className="menu-container">
      <h2>Pages Générées</h2>
      <div className="pages-list">
        {savedPages.length > 0 ? (
          savedPages.map((file, index) => (
            <Link to={`/savedPage/${file}`} key={index} className="page-box">
              {file}
            </Link>
          ))
        ) : (
          <p>Aucune page générée pour le moment.</p>
        )}
        <Link to="Creator" className="add-page-box">
          +
        </Link>
      </div>
    </div>
  );
};

export default Menu;
