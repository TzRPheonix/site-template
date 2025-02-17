import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Menu from './pages/Menu/Menu';
import Creator from './pages/Creator/Creator';
import TemplateProjet1 from './pages/SavedPage/TemplateProjet1';
import TemplateProjet2 from './pages/SavedPage/TemplateProjet2';
import TemplateProjet3 from './pages/SavedPage/TemplateProjet3';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/site-template" element={<Menu />} />
        <Route path="/site-template/creator" element={<Creator />} />
        <Route path="/site-template/savedPage/TemplateProjet1" element={<TemplateProjet1 />} />
        <Route path="/site-template/savedPage/TemplateProjet2" element={<TemplateProjet2 />} />
        <Route path="/site-template/savedPage/TemplateProjet3" element={<TemplateProjet3 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;