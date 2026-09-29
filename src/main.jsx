import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './styles.css';
import Homepage from './Homepage.jsx';
import Lecture1_0 from './lectures/Lecture1-0.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Homepage/>} />
        <Route path="/lecture-1-0" element={<Lecture1_0 />} />
      </Routes>
    </Router>
  </StrictMode>,
)
