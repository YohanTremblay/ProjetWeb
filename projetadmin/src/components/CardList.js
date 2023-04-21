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
        return <Card key={index} id={element.id} Description={element.Description} Nom={element.Nom} PrixBase={element.PrixBase} PrixPromotion={element.PrixPromotion}></Card>
    });

}
export default CardList;