import 'bootstrap/dist/css/bootstrap.css';
function CartesNormal(props){
    return    <div class="card">
                    
    <div class="card-img-top d-flex justify-content-center position-relative">
        
        <a href={`/description/${props.id}`}>
            <img src={props.Image} class="img-fluid card-img-custom" alt="image"/>
        </a> 
      </div>
      <div class="card-body">
          <a href="De20.html">
            <h5 class="card-title">{props.Nom}</h5>
          </a>
        <p class="card-text">{props.Description}</p>
        <p class="card-text"><strong>Prix :</strong> {props.PrixBase}</p>
        
        <div> 
          <div class="ms-auto">
            <button class="btn btn-dark btn-primary" type="button">Ajouter au panier</button>
          </div>
          <span class="badge bg-success">Disponible</span>
        </div>
    </div>


</div>
      
  
}
export default CartesNormal;
