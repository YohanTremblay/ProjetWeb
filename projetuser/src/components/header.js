import 'bootstrap/dist/css/bootstrap.css';
function Header(props){
    return   <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <a className="navbar-brand d-flex align-items-center" href="#">
            <img src="/marcher.png"  height="30"/>
            <h1 className="ml-3">Le Marché des Artisans</h1>
          </a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item active">
                <a className="nav-link" href="/">Accueil</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/produits">Produits</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/promo">Promotions</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/contact">Contact</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/de20">Dé 20</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Panier
                  <span className="badge badge-light">0</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      
  
}
export default Header;