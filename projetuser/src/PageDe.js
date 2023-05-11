import Header from "./components/header";
import Carouselle from "./components/carousel";
import Footer from "./components/footer";
import { useEffect } from 'react';
function PageDe() {
  return (
    <>
    <Header/>
    <Carouselle></Carouselle>
    <div>
    <section>
        <div class="dice-container ">
          <div class="dice-result" id="dice-result">?</div>
          <button class="dice-button" id="dice-button">
            <img class="dice" src="de-20-faces.png" alt="Dé 20"/>
          </button>
        </div>
        <div class="roll-history ">
          <h2>Historique des lancers</h2>
          <ul id="history-list">
          </ul>
        </div>
      </section>
    </div>

    <Footer></Footer>
   
    </>
  );
}

export default PageDe;