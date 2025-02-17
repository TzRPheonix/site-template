import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Menu from './pages/Menu/Menu';
import Creator from './pages/Creator/Creator';
import GeneratedPage from './pages/SavedPage/GeneratedPage';



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Menu />} />
        <Route path="/creator" element={<Creator />} />
        <Route path="/savedPage/GeneratedPage" element={<GeneratedPage />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;