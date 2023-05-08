import React, { useState, useEffect } from "react";
import $ from 'jquery';

function FormulaireEdit(props) {
  const [Nom, setNom] = useState(props.Nom);
  const [Description, setDescription] = useState(props.Description);
  const [PrixBase, setPrixBase] = useState(props.PrixBase);
  const [NombreItem, setNombreItem] = useState(props.NombreItem);
  const [pourcentage, setPourcentage] = useState(0);
  const [nombre, setNombre] = useState(0);
  const [type, setType] = useState(props.TypePro);
  const [typesList, setTypesList] = useState([]);
  const [Image, setImage] = useState("");

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
  function handleSubmit() {
    console.log("Le nom du produit est", Image);
    PutProduct(props.id, Nom, Description, PrixBase, nombre, type, NombreItem, Image);
  }
  
  function PutProduct(id, nom, description, prixBase, promotion, type, NombreItem, Image) {
    fetch("http://localhost:3000/Produit/" + id, {
      method: "PUT",
      body: JSON.stringify({
        Nom: nom,
        Description: description,
        PrixBase: prixBase,
        PrixPromotion: promotion,
        Type: type,
        NombreItem : NombreItem,
        Image : Image
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
    //Verif mon form pour que DELETE et EDIT pour qu'ils marchent
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
        <select id="type" name="type" value={type.NomType} onChange={handleTypeChange}>
            {typesList.map((type, index) => (
            <option key={index} value={type.NomType}>
                {type.NomType}
            </option>
            ))}

        </select>
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

      </div>
      <button onClick={Enregistrement} className="btn btn-primary btn-add-to-cart">Enregistrer</button>

      <button id="deleteBtn" className="btn btn-danger" onClick={SupprimerAPI}>Supprimer</button>
    </form>
  );
  function SupprimerAPI(event)
  {
      event.preventDefault();
      Delete(props);
  }
  function Enregistrement(event)
  {
      event.preventDefault();
      Edit(props);
  }

  function Edit(props)
  { 
      ConfirmDialog(`Êtes-vous sûr de vouloir supprimer l'article ${props.Nom}?`, props);
  }


  function ConfirmDialog(message, props) {
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
            class: "btn btn-secondary",
            click: function () {
              handleSubmit();
              $(this).dialog("close");
              window.location.replace('/routeDetail/'+props.id);  // fermer le dialogue après avoir appelé handleSubmit()
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
          $(this).closest('.ui-dialog');
        },
        close: function () { // remettre le style par défaut lorsque le dialogue est fermé
          $(this).closest('.ui-dialog')
            .css('border', '');
        }
      });
  }
}  

function Delete(props)
    { 
        ConfirmDialog(`Êtes-vous sûr de vouloir supprimer l'article ${props.Nom}?`, props);
    }
    function SupresionAPI(props)
    {

        fetch('http://localhost:3000/Produit/' + props.id,
            {
                method: "DELETE",
            })
            .then(response => {
                if (response.ok) {
                  console.log(`Le produit ${props.id} a été supprimé avec succès.`);
                } else {
                  console.error(`Erreur lors de la suppression du produit avec l'ID ${props.id}.`);
                }
              })
              .catch(error => {
                console.error(`Erreur lors de la suppression du produit avec l'ID ${props.id}: ${error}`);
              });
    }

    function ConfirmDialog(message, props) {
        $('<div></div>').appendTo('body')
          .html('<div><h6>' + message + '?</h6></div>')
          .dialog({
            modal: true,
            title: 'Supprimer article',
            zIndex: 10000,
            autoOpen: true,
            width: 'auto',
            resizable: false,
            buttons: [
              {
                text: "Oui",
                id: "btnCreateRev",
                class: "btn btn-danger", // ajouter la classe btn-danger pour changer la couleur du bouton
                click: function () {
                  SupresionAPI(props);
                  $(this).dialog("close");
                  window.location.replace('/PagePrinc'); 
                }
      
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
              $(this).closest('.ui-dialog')
                .css('border', '');
            }
          });
      }
     
export default FormulaireEdit;
