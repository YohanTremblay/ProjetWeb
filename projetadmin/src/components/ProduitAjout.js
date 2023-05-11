import React, { useState, useEffect } from "react";
import $ from 'jquery';
import { Link } from 'react-router-dom';

function ProduitAjout(props) {
    const [Nom, setNom] = useState("");
    const [Description, setDescription] = useState("");
    const [PrixBase, setPrixBase] = useState(0);
    const [NombreItem, setNombreItem] = useState(0);
    const [pourcentage, setPourcentage] = useState(0);
    const [nombre, setNombre] = useState(0);
    const [type, setType] = useState("");  
    const [Image, setImage] = useState("");   
    const [typesList, setTypesList] = useState([]);
    const [Stripe, setStripe] = useState("");


  useEffect(() => {
    fetch("http://localhost:3000/Type")
      .then((response) => response.json())
      .then((data) => {
        setTypesList(data);
      });
  }, []);
  
  function handlePourcentageChange(e) {
    setPourcentage(parseFloat(e.target.value));
    setNombre((PrixBase * (1 - parseFloat(e.target.value) / 100)).toFixed(2));
  }
  function AjoutAPI() 
  {
    console.log(Nom + " " + Description + " " + PrixBase + " " + nombre + " " + type );
    PutProduct(Nom, Description, PrixBase, nombre, type, NombreItem, Image, Stripe);
  }
  
  
  function PutProduct(nom, description, prixBase, promotion, type, NombreItem, Image, Stripe) {
    fetch("http://localhost:3000/Produit/", {
      method: "POST",
      body: JSON.stringify({
        Nom: nom,
        Description: description,
        PrixBase: prixBase,
        PrixPromotion: promotion,
        Type: type,
        NombreItem : NombreItem,
        Image : Image,
        Lien : Stripe
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then(response => response.json())
      .then(data => console.log(data))
      .catch(error => console.error(error));
  }

  function handleTypeChange(event) {
    setType(event.target.value);
  }

  return (
    <>
    <form>
      <div className="form-group">
        <label htmlFor="nom">Nom:</label>
        <input
          required="required"
          type="text"
          id="nom"
          name="nom"
          value={Nom}
          className="form-control"
          onChange={(e) => setNom(e.target.value)}
        />
        <label htmlFor="description">Description:</label>
        <textarea
          required="required"
          type="text"
          id="description"
          name="description"
          value={Description}
          className="form-control"
          onChange={(e) => setDescription(e.target.value)}
        />
        <label htmlFor="NombreItem">Nombre de produit restant :</label>
        <input
          required="required"
          type="number"
          id="NombreItem"
          name="NombreItem"
          value={NombreItem}
          className="form-control"
          onChange={(e) => setNombreItem(e.target.value)}
        />

        <label htmlFor="Image">Lien de l'image :</label>
        <input
          required="required"
          type="text"
          id="Image"
          name="Image"
          value={Image}
          className="form-control"
          onChange={(e) => setImage(e.target.value)}
        />
        <label htmlFor="stripe">Lien stripe :</label>
        <input
          required="required"
          type="text"
          id="stripe"
          name="stripe"
          value={Stripe}
          className="form-control"
          onChange={(e) => setStripe(e.target.value)}
        />
        <label htmlFor="prixBase">Prix de base :</label>
        <input
          required="required"
          type="number"
          id="prixBase"
          name="prixBase"
          value={PrixBase}
          className="form-control"
          onChange={(e) => setPrixBase(e.target.value)}
        />

        <label htmlFor="pourcentage">Choix pourcentage Promotion :</label>
        <select
          id="pourcentage"
          name="pourcentage"
          value={pourcentage}
          onChange={handlePourcentageChange}
        >
          <option value={0}>0%</option>
          <option value={10}>10%</option>
          <option value={20}>20%</option>
          <option value={30}>30%</option>
          <option value={40}>40%</option>
          <option value={50}>50%</option>
          <option value={60}>60%</option>
          <option value={70}>70%</option>
          <option value={80}>80%</option>
          <option value={90}>90%</option>
        </select>
        
        <h6> Prix avec promotion: {nombre}</h6>
        <label htmlFor="type">Type:</label>
        <select id="type" name="type" value={type} onChange={handleTypeChange}>
            <option value="ALL">ALL</option>
            {typesList.map((type, index) => (
            <option key={index} value={type.NomType}>
                {type.NomType}
            </option>
            ))}

        </select>

        
      </div>
      <button onClick={Enregistrement} className="btn btn-primary btn-add-to-cart">Enregistrer</button>
    </form>
    <button className="btn btn-primary btn-add-to-cart"><Link to={`/PagePrinc`}>Annuler</Link></button>
    </>
    
    
  );
  function Enregistrement(event)
  {
      event.preventDefault();
      Post();
  }

  function Post()
  { 
      ConfirmDialog(`Êtes-vous sûr de vouloir ajouter l'article ?`);
  }


  function ConfirmDialog(message) {
    $('<div></div>').appendTo('body')
      .html('<div><h6>' + message + '?</h6></div>')
      .dialog({
        modal: true,
        title: 'Enregistrer article',
        zIndex: 10000,
        autoOpen: true,
        width: 'auto',
        resizable: false,
        buttons: [
          {
            text: "Oui",
            id: "btnCreateRev",
            class: "btn btn-secondary", // ajouter la classe btn-danger pour changer la couleur du bouton
            click: function () {
                AjoutAPI();
                $(this).dialog("close"); // fermer le dialogue après avoir appelé handleSubmit()
                window.location.replace('/PagePrinc'); 
            },
          },
          {
            text: "Non",
            id: "btnCancel",
            class: "btn btn-secondary",
            click: function () { $(this).dialog("close"); },
          }
        ],
        open: function () { // ajouter le style pour le contour du dialogue lorsqu'il est ouvert
          $(this).closest('.ui-dialog')
            .css('border', '2px solid red');
        },
        close: function () { // remettre le style par défaut lorsque le dialogue est fermé
          $(this).closest('.ui-dialog');
        }
      });
  }
}    
export default ProduitAjout;
