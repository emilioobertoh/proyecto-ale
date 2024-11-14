import { useState } from 'react';
import { HashRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Inicio } from './components/Inicio';
import { Conciertos } from './components/Conciertos';
import { Contacto } from './components/Contacto';
import { Discordia } from './components/Discordia';
import './App.css';

import { Container } from 'react-bootstrap';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faCheckSquare, faCoffee, faLocationDot, faStar, faAnglesDown, faPhone, faEnvelopeOpenText, faEnvelopesBulk, faEnvelope } from '@fortawesome/free-solid-svg-icons';

library.add(fab, faCheckSquare, faCoffee, faStar, faInstagram, faLocationDot, faAnglesDown, faPhone, faEnvelopeOpenText, faEnvelopesBulk, faEnvelope);

function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/conciertos" element={<Conciertos />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/discordia" element={<Discordia />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export { App };
