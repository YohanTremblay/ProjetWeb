import React from 'react';
import Footer from './components/Footer.js';
import Header from './components/Header.js';
import CardList from "./components/CardList";
import { Link } from 'react-router-dom';


function PagePrinc(props)
{
    return (
        <>
            <Header />
            <Link className="d-flex align-items-center" to={`/routeAjout`}>
                <h1 className="ml-3">Ajouter Produit</h1>
              </Link>
              <section id="promotions" className="bg-light py-5">
                <div className="container">
                <h2 className="text-center mb-4">Les produits</h2>
                    <div className="row">
                        <CardList />
                    </div>
                </div>
            </section>
            <Footer />
        </>          
      );
}
export default PagePrinc;