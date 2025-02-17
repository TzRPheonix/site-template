import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Menu from './pages/Menu/Menu';
import Creator from './pages/Creator/Creator';
import TemplateProjet1 from './pages/SavedPage/TemplateProjet1';
import TemplateProjet2 from './pages/SavedPage/TemplateProjet2';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Menu />} />
        <Route path="/creator" element={<Creator />} />
        <Route path="/savedPage/TemplateProjet1" element={<TemplateProjet1 />} />
        <Route path="/savedPage/TemplateProjet2" element={<TemplateProjet2 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;