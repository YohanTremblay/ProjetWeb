import { useEffect, useState } from "react";
import Card from "./Card"

function CardList(props){
    let [card, setCard] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:3000/Produit')
        .then(reponse => reponse.json())
        .then(json =>{
           
            setCard(json);
    });
        },[])
    
    return card.map((element, index) =>
    {
        // if(element.PrixBase != element.PrixPromotion)
        // {
            return <Card key={index} Type={element.Type} id={element.id} Description={element.Description} Nom={element.Nom} PrixBase={element.PrixBase} PrixPromotion={element.PrixPromotion} NombreItem={element.NombreItem} Image={element.Image}></Card>
        // }
    });

}
export default CardList;