import React from 'react';
import Footer from './components/Footer.js';
import Header from './components/Header.js';
import CardList from "./components/CardList";


function PagePrinc(props)
{
    return (
        <>
            <Header />
                <section id="promotions" className="bg-light py-5">
                    <div className="container">
                    <h2 className="text-center mb-4">Nos promotions</h2>
                        <CardList />
                    </div>
                </section>
            <Footer />
        </>          
      );
}
export default PagePrinc;