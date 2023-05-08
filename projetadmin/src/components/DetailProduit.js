import { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import FormulaireEdit from "./FormulaireEdit";

function DetailProduit(props) {
    const [produitDetails, setProduitDetails] = useState([]);
    useEffect(() => {
        fetch('http://localhost:3000/Produit?id=' + props.id)
            .then(reponse => reponse.json())
            .then(json => {
                let tab = json.map((element, index) => {
                    console.log(element.Type);
                    return <section id="article" key={index}>
                            <div className="container" id="details">
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="product-image">
                                            <img src={element.Image} alt="Nom du produit" className="img-fluid border rounded" />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="product-description">
                                            <FormulaireEdit  id={element.id} key={index} Nom={element.Nom} Description={element.Description} PrixBase={element.PrixBase} PrixPromotion={element.PrixPromotion} TypePro={element.Type} NombreItem={element.NombreItem} Image={props.Image}/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                    </section>;
                })
                setProduitDetails(tab);
            });
    }, []);

    return produitDetails;
}

export default DetailProduit;
