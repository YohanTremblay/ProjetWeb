import React from 'react';

import Promotion from './cartes';
function ListProduit() {
    const [produits, setProduits] = React.useState([]);

    React.useEffect(() => {
      
      fetch('http://localhost:3000/Produit')
        .then((response) => response.json())
        .then((data) => setProduits(data));
    }, []);
  
    return (
      <div >
        {produits.map((produits) => (
          <div key={produits.id} className="col">
            <Promotion id={produits.id} titre ={produits.titre} contenu={produits.contenu}/>
          </div>
        ))}
      </div>
    );
  }
  export default ListProduit;