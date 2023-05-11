import 'bootstrap/dist/css/bootstrap.css';
import CartesNormal from './cartesproduits'
import React from 'react';
function Produits(props){
  const [produit, setProduit] = React.useState([]);

  React.useEffect(() => {
    
    fetch('http://localhost:3000/Produit')
      .then((response) => response.json())
      .then((data) => setProduit(data));
  }, []);





    return      <section id="promotions" class="bg-light py-5">
    <div class="container">
      <h2 class="text-center mb-4">Nos produits</h2>
      <div class="row">
        <div class="col-md-4 mb-3">
        {produit.map((produit) => (
          
            <CartesNormal id={produit.id} Image ={produit.Image} Nom ={produit.Nom} Description={produit.Description} PrixBase={produit.PrixBase} PrixPromotion={produit.PrixPromotion}/>
          
        ))}
              
        </div>
      </div>
    </div> 
  </section>

      
  
}
export default Produits;