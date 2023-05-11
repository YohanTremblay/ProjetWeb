import React from "react";
import {Carousel} from "react-bootstrap";


function Carouselle(props){
    return     <Carousel>
    <Carousel.Item>
        <img
        className="d-block w-100"   
        src={"/table.png"}
        alt="First slide"
        />
        <Carousel.Caption>
        <h2>Bienvenue sur Le Marché des Artisans</h2>
        <p>Nous sommes fiers de vous proposer une large sélection d'objets de jeux de rôle pour enrichir vos aventures. Parcourez notre catalogue pour découvrir nos produits.</p>
        </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
        <img
        className="d-block w-100"
        src={"/dnd2.png"}
        alt="Second slide"
        />
        <Carousel.Caption>
        <h2>Bienvenue sur Le Marché des Artisans</h2>
        <p>Nous sommes fiers de vous proposer une large sélection d'objets de jeux de rôle pour enrichir vos aventures. Parcourez notre catalogue pour découvrir nos produits.</p>
        </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
        <img
        className="d-block w-100"
        src={"/dndstarter.png"}
        alt="Second slide"
        />
        <Carousel.Caption>
        <h2>Bienvenue sur Le Marché des Artisans</h2>
        <p>Nous sommes fiers de vous proposer une large sélection d'objets de jeux de rôle pour enrichir vos aventures. Parcourez notre catalogue pour découvrir nos produits.</p>
        </Carousel.Caption>
    </Carousel.Item>
</Carousel>
     
  
}
export default Carouselle;