import React, { useState, useEffect } from "react";
import "./Menu.css";

const Menu = () => {
  const [savedPages, setSavedPages] = useState([]);

  useEffect(() => {
    const importAll = (r) => r.keys().map(r);
    try {
      const pages = importAll(require.context("../SavedPage", false, /\.js$/));
      setSavedPages(pages.map((page) => page.default.name));
    } catch (error) {
      console.error("Erreur lors du chargement des pages enregistrées:", error);
    }
  }, []);

  const openPageInNewTab = (file) => {
    window.open(`/savedPage/${file}`, "_blank");
  };

  return (
    <div className="menu-container">
      <h2 className="menu-title">📂 Pages Générées</h2>
      <div className="pages-list">
        {savedPages.length > 0 ? (
          savedPages.map((file, index) => (
            <div key={index} className="page-box" onClick={() => openPageInNewTab(file)}>
              <span className="page-name">{file}</span>
            </div>
          ))
        ) : (
          <p className="no-pages">Aucune page générée pour le moment.</p>
        )}
        <a href="/Creator" className="add-page-box">
          <span className="add-icon">+</span>
        </a>
      </div>
    </div>
  );
};

export default Menu;
