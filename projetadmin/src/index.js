import React from 'react';
import ReactDOM from 'react-dom/client';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import 'jquery';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import './index2.css';
import reportWebVitals from './reportWebVitals';
import PagePrinc from "./routePageprincipale"
import Detail from "./routeDetail"
import './srcstyle/public/index.css'
import RouteAjout from './routeAjout';
import RouteConnexion from './routeConnexion';

const router = createBrowserRouter([
  {
    path: "/",
    element: <RouteConnexion />
  },
  {
    path: "/PagePrinc",
    element: <PagePrinc />
  },
  {
    path: "/routeDetail/:id",
    loader: async({params})=>{
      return  fetch(`http://localhost:3000/Produit/${params.id}`);
    },
    element: <Detail />
  },
  {
    path: "/routeAjout",
    element: <RouteAjout />
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
