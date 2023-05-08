import React from 'react';
import Footer from './components/Footer.js';
import Header from './components/Header.js';
import DetailProduit from './components/DetailProduit.js';
import { useLoaderData, useParams } from "react-router-dom";

function Detail(props)
{
    const params = new URLSearchParams(window.location.search);

    const { id } = useLoaderData();
    return (
        <>
            <Header />
            <DetailProduit id={id} />
            <Footer />
        </>          
      );
}
export default Detail;