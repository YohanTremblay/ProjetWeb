import { Link } from 'react-router-dom';

function Header(props)
{
    return <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container">
              <Link className="navbar-brand d-flex align-items-center" to={`/PagePrinc`}>
                <img src="/img/marche.png" alt="Logo de votre boutique" height="30"/>
                <h1 className="ml-3">Le Marché des Admins</h1>
              </Link>
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ml-auto">
                </ul>
              </div>
            </div>
          </nav>
    </>
    ;
}
export default Header;