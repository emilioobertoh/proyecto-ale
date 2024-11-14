import { useState } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Inicio } from './components/Inicio';
import { Conciertos } from './components/Conciertos';
import { Contacto } from './components/Contacto';
import { Discordia } from './components/Discordia';
import './App.css';

import ErrorPage from "./error-page";

import { library } from '@fortawesome/fontawesome-svg-core';
import { fab, faInstagram } from '@fortawesome/free-brands-svg-icons';
import {
  faCheckSquare,
  faCoffee,
  faLocationDot,
  faStar,
  faAnglesDown,
  faPhone,
  faEnvelopeOpenText,
  faEnvelopesBulk,
  faEnvelope,
} from '@fortawesome/free-solid-svg-icons';

// Add icons to the FontAwesome library
library.add(
  fab,
  faCheckSquare,
  faCoffee,
  faStar,
  faInstagram,
  faLocationDot,
  faAnglesDown,
  faPhone,
  faEnvelopeOpenText,
  faEnvelopesBulk,
  faEnvelope
);

// Define your routes using `createBrowserRouter`
const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    
  },
{
  path: '/conciertos',
    element: (
      <>
        <Header />
        <Conciertos />
        <Footer />
      </>
    ),
  },
{
  path: '/contacto',
    element: (
      <>
        <Header />
        <Contacto />
        <Footer />
      </>
    ),
  },
{
  path: '/discordia',
    element: (
      <>
        <Header />
        <Discordia />
        <Footer />
      </>
    ),
  },
]);

function App() {
  const [count, setCount] = useState(0);

  return (
    <RouterProvider router={router} />
  );
}

export { App };
