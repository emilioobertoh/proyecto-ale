import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createHashRouter,
  RouterProvider,
} from "react-router-dom";

/*Estilos*/


import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

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


/*COMPONENTES*/
import { Header } from './components/Header.jsx';
import { Footer } from './components/Footer.jsx';
import { Inicio } from './components/Inicio';
import ErrorPage from "./error-page";
import { Conciertos } from './components/Conciertos.jsx';
import { Discordia } from './components/Discordia.jsx';
import { Contacto } from './components/Contacto.jsx';

const router = createHashRouter([
  {
    path: "/",
    element: <Inicio />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/conciertos",
    element: <Conciertos />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/discordia",
    element: <Discordia />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/contacto",
    element: <Contacto/>,
    errorElement: <ErrorPage />,
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}>
      <Header />
      <Footer />
    </RouterProvider>
  </React.StrictMode>
);
/*
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
)
*/