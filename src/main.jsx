import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {App} from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import'bootstrap/dist/js/bootstrap.bundle.min.js'

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello world!</div>,
  },
]);
/*
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);*/

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
)
