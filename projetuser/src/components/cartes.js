import 'bootstrap/dist/css/bootstrap.css';
function Cartes(props){
    return    <div className="card">
                    
    <div className="card-img-top d-flex justify-content-center position-relative">
        <span className="badge bg-danger position-absolute top-0 start-0 m-3">Promotion</span>
        <a href={`/description/${props.id}`}>
            <img src={props.Image} className="img-fluid card-img-custom" alt="Image produit"/>
        </a> 
      </div>
      <div className="card-body">
          <a href="De20.html">
            <h5 className="card-title">{props.Nom}</h5>
          </a>
        <p className="card-text">{props.Description}</p>
        <p className="card-text"><strong>Ancien prix :</strong> <s>{props.PrixBase}</s></p>
        <p className="card-text"><strong>Nouveau prix :</strong> {props.PrixPromotion}</p>
        <div> 
          <div className="ms-auto">
          <a className="btn btn-primary btn-add-to-cart" href={`/description/${props.id}`}>voir produit</a>
          </div>
          <span className="badge bg-success">Disponible</span>
        </div>
    </div>


</div>
      
  
}
export default Cartes;
