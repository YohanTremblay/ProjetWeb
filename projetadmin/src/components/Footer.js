function Footer(props)
{
    return <footer className="bg-dark text-white p-3 ">
    <div className="container">
      <div className="row">
        <div className="col-md-3 col-sm-6">
          <h5>À propos</h5>
          <ul className="list-unstyled">
            <li><a href="#">Notre histoire</a></li>
            <li><a href="#">Notre équipe</a></li>
            <li><a href="#">Nos services</a></li>
          </ul>
        </div>
        <div className="col-md-3 col-sm-6">
          <h5>Liens utiles</h5>
          <ul className="list-unstyled">
            <li><a href="#">Termes et conditions</a></li>
            <li><a href="#">Politique de confidentialité</a></li>
            <li><a href="#">FAQ</a></li>
          </ul>
        </div>
        <div className="col-md-3 col-sm-6">
          <h5>Contactez-nous</h5>
          <ul className="list-unstyled">
            <li><a href="#"><i className="fa fa-map-marker"></i> 123 Rue Principale, Montréal, QC H3Z 2Y7</a></li>
            <li><a href="#"><i className="fa fa-phone"></i> (514) 555-5555</a></li>
            <li><a href="#"><i className="fa fa-envelope"></i> info@marchedesartisans.com</a></li>
          </ul>
        </div>
        <div className="col-md-3 col-sm-6">
          <h5>Abonnez-vous</h5>
          <p>Recevez nos dernières nouvelles et offres spéciales directement dans votre boîte de réception.</p>
          <form>
            <div className="form-group">
              <input type="email" className="form-control" placeholder="Entrez votre adresse email"/>
            </div>
            <button type="submit" className="btn btn-outline-light">S'abonner</button>
          </form>
        </div>
      </div>
      <hr/>
      <div className="row">
        <div className="col-md-12">
          <p className="text-muted">© 2023 Le Marché des Artisans. Tous droits réservés.</p>
        </div>
      </div>
    </div>
  </footer>;
}
export default Footer;