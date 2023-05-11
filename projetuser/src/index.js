import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import PagePrincipale from './PageAccueil';
import PageProduits from './PageProduits';
import PageDe from './PageDe';
import PageErreur from './PageErreur';
import PageContact from './PageContact';
import PagePromo from './PagePromo';
import PageDetail from './PageDetails'; 
import './srcstyle/public/style.css';

const router = createBrowserRouter([
  {
    path: "/",
    
    element: <PagePrincipale />
  },
  {
    path: "/produits",

    element: <PageProduits />
  },
  {
    path: "/promo",

    element: <PagePromo />
  },
  {
    path: "/de20",
    element: <PageDe />

  },
  {
    path: "/contact",
    element: <PageContact />

  },
  {
    path: "*",
    element: <PageErreur />

  },
  {
    path: "/description/:id",
    element: <PageDetail />

  },
])

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
