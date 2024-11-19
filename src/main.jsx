import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
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
// import { Header } from './components/Header.jsx';
// import { Footer } from './components/Footer.jsx';
import { Inicio } from './components/Inicio';
import ErrorPage from "./error-page";
import { Conciertos } from './components/Conciertos.jsx';
import { Discordia } from './components/Discordia.jsx';
import { Contacto } from './components/Contacto.jsx';
import { Root } from './components/Root.jsx';

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Root />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "",
          element: <Inicio />,
        },
        {
          path: "conciertos",
          element: <Conciertos />,
        },
        {
          path: "discordia",
          element: <Discordia />,
        },
        {
          path: "contacto",
          element: <Contacto />,
        }
      ]
    }
  ],
  {
    basename: "/proyecto-ale" // This sets your base path
  }
);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
/*
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
)
*/
