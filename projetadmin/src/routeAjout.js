import Header from "./components/Header";
import Footer from "./components/Footer"
import ProduitAjout from "./components/ProduitAjout";

function RouteAjout(props)
{
    return <>
        <Header/>
        <div className="col-md-6">
            <div className="product-description">
                <ProduitAjout/>
            </div>
        </div>
        <Footer/>
    </>;   
}
export default RouteAjout;