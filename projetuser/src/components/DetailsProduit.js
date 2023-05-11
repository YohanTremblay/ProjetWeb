import React from 'react';
function DetailsProduits(props) {
const [produit, setProduit] = React.useState([]);
  
  React.useEffect(() => {
    fetch('http://localhost:3000/Produit/' + props.id)
      .then(response => response.json())
      .then(data => {
        const Nom = data.Nom;
        const Description = data.Description;
        const PrixBase = data.PrixBase;
        const PrixPromotion = data.PrixPromotion;
        const NombreItem = data.NombreItem;
        const Image = data.Image;
        const Lien = data.Lien;

        setProduit({
            Nom: Nom,
            Description: Description,
            PrixBase: PrixBase,
            PrixPromotion: PrixPromotion,
            Image: Image,
            NombreItem: NombreItem,
            Lien: Lien
        });
      })
      
      .catch(error => console.error(error));
  }, [props.id]);

  if (!produit) {
    return <p>Chargement des détails du produits...</p>;
  }

  return (
    
      
    <section id="article">
    <div className="container" id="details">
        <div className="row">
            <div className="col-md-6 col-sm-12">
                <div className="product-image">
                    <img src={produit.Image} alt="Nom du produit" className="img-fluid border rounded"/>
                </div>
            </div>
            <div className="col-md-6 col-sm-12">
                <div className="product-description">
                    <h2>{produit.Nom}</h2>
                    <p>{produit.Description}</p>
                    <p><strong>Prix actuel : </strong>{produit.PrixBase}</p>
                    <p><strong>Disponibilité :</strong> {produit.NombreItem}</p>
                    <a className="btn btn-primary btn-add-to-cart" href={produit.Lien}>Acheter</a>
                </div>
            </div>
        </div>
    </div>
</section>
      
  );
}
export default DetailsProduits;