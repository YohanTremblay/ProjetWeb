import React from 'react';
import { Link } from 'react-router-dom';
function Card(props)
{

    return  <div className="col-md-4 mb-3">
                <div className="card">
                    <div className="card-img-top d-flex justify-content-center position-relative">
                    <span className="badge bg-danger position-absolute top-0 start-0 m-3">Promotion</span>
                    <img src="img/dndlivre2.png" className="img-fluid card-img-custom" alt="Image produit"/>
                    </div>
                    <div className="card-body">
                    <h5 className="card-title">{props.Nom}</h5>
                    <p className="card-text">{props.Description.substr(0, 150)}</p>
                    <p className="card-text"><strong>Ancien prix :</strong> <s>{props.PrixBase}$</s></p>
                    <p className="card-text"><strong>Nouveau prix :</strong> {props.PrixPromotion}$</p>
                    <div className="d-grid gap-2">
                        <Link className="btn-dark btn-primary" type="button" to={`/routeEdit/${props.id}`}>Edit</Link>
                    </div>
                    </div>
                </div>
            </div>
     ;
    
    
   
}

export default Card;