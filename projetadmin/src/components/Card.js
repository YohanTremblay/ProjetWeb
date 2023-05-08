import React from 'react';
import { Link } from 'react-router-dom';
import 'jquery-ui/ui/widgets/dialog';
import 'jquery-ui/themes/base/all.css';


function Card(props)
{
    if(props.PrixPromotion == 0)
    {
          return  <div className="col-md-4 mb-3">
          <div className="card">
              <img src={props.Image} className="img-fluid card-img-custom" alt="Image produit"/>
              </div>
              <div className="card-body">
              <h5 className="card-title">{props.Nom}</h5>
              <p className="card-text">{props.Description.substr(0, 100)}</p>
              <p className="card-text"><strong>Prix :</strong> {props.PrixBase}$</p>
              <p className="card-text"><strong>Type :</strong> {props.Type}</p>
              <p className="card-text"><strong>Nombre de produit restant :</strong> {props.NombreItem}</p>
              <div className="d-grid gap-2">
                  <button className="btn-dark btn-primary" type="button" onClick={() => { window.location.href = `/routeDetail/${props.id}` }}>Edit</button>
              </div>
              </div>
            </div>
    }
    else
    {
      return  <div className="col-md-4 mb-3">
      <div className="card">
          <div className="card-img-top d-flex justify-content-center position-relative">
          <span className="badge bg-danger position-absolute top-0 start-0 m-3">Promotion</span>
          <img src={props.Image} className="img-fluid card-img-custom" alt="Image produit"/>
          </div>
          <div className="card-body">
          <h5 className="card-title">{props.Nom}</h5>
          <p className="card-text">{props.Description.substr(0, 100)}</p>
          <p className="card-text"><strong>Ancien prix :</strong> <s>{props.PrixBase}$</s></p>
          <p className="card-text"><strong>Nouveau prix :</strong> {props.PrixPromotion}$</p>
          <p className="card-text"><strong>Type :</strong> {props.Type}</p>
          <p className="card-text"><strong>Nombre de produit restant :</strong> {props.NombreItem}</p>
          <div className="d-grid gap-2">
              <button className="btn-dark btn-primary" type="button" onClick={() => { window.location.href = `/routeDetail/${props.id}` }}>Edit</button>
              
          </div>
          </div>
        </div>
      </div>
    }
     ;
     
      
    
      
    
}

export default Card;