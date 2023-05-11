import Header from "./components/header";
import Carouselle from "./components/carousel";

import Footer from "./components/footer";
function PageErreur() {
  return (
    <>
    <Header/>
    <Carouselle></Carouselle>
    <section >
        <img id="erreur" src="erreur.png"/>
      </section>
    <Footer></Footer>
    </>
  );
}

export default PageErreur;