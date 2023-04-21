function Header(props)
{
    return <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container">
              <a className="navbar-brand d-flex align-items-center" href="#">
                <img src="/img/marche.png" alt="Logo de votre boutique" height="30"/>
                <h1 className="ml-3">Le Marché des Artisans</h1>
              </a>
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ml-auto">
                  <li className="nav-item active">
                    <a className="nav-link" href="#">Accueil</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">Produits</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">Promotions</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">Contact</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="De20.html">Dé 20</a>
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
          <div className="carousel-wrapper position-relative">
          <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">

          <div className="carousel-inner">
              <div className="carousel-item active">
              <img className="d-block w-100" src="img/dnd2.png" alt="First slide"/>
              </div>
              <div className="carousel-item">
              <img className="d-block w-100" src="img/table.png" alt="Second slide"/>
              </div>
              <div className="carousel-item">
              <img className="d-block w-100" src="img/dndstarter.png" alt="Third slide"/>
              </div>
          </div>
          </div>
          <div className="carousel-caption position-absolute top-0 start-50 translate-middle-x">
          <div className="container my-4">
              <h2>Bienvenue sur Le Marché des Artisans</h2>
              <p>Nous sommes fiers de vous proposer une large sélection d'objets de jeux de rôle pour enrichir vos aventures. Parcourez notre catalogue pour découvrir nos produits.</p>
          </div>
          </div>
        </div>
    </>
    ;
}
export default Header;