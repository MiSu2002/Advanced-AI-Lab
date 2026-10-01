import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './styles.css';
import Homepage from './Homepage.jsx';
import Lecture1_0 from './lectures/Lecture1-0.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Lecture1_1 from './lectures/Lecture1-1.jsx';
import Lecture1_2 from './lectures/Lecture1-2.jsx';
import Lecture1_3 from './lectures/Lecture1-3.jsx';
import Lab1 from '../lab/Lab1.jsx';
import PrescribedBooks from './Prescribed-books.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Homepage/>} />
        <Route path="/prescribed-books/" element={<PrescribedBooks/>} />
        <Route path="/lecture-1-0/" element={<Lecture1_0 />} />
        <Route path="/lecture-1-1/" element={<Lecture1_1 />} />
        <Route path="/lecture-1-2/" element={<Lecture1_2 />} />
        <Route path="/lecture-1-3/" element={<Lecture1_3 />} />
        <Route path="/lab-1/" element={<Lab1 />} />
      </Routes>
    </Router>
  </StrictMode>,
)
