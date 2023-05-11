import Header from "./components/header";
import Carouselle from "./components/carousel";

import Footer from "./components/footer";
function PageContact() {
  return (
    <>
    <Header/>
    <Carouselle></Carouselle>
   
    <section>
        <div class="container">
          <h1>Contactez-nous</h1>
          <form>
            <div class="mb-3">
              <label for="inputName" class="form-label">Nom complet</label>
              <input type="text" class="form-control" id="inputName" required/>
            </div>
            <div class="mb-3">
              <label for="inputEmail" class="form-label">Adresse e-mail</label>
              <input type="email" class="form-control" id="inputEmail" aria-describedby="emailHelp" required/>
              <div id="emailHelp" class="form-text">Nous ne partagerons jamais votre adresse e-mail avec qui que ce soit.</div>
            </div>
            <div class="mb-3">
              <label for="inputSubject" class="form-label">Sujet</label>
              <input type="text" class="form-control" id="inputSubject" required/>
            </div>
            <div class="mb-3">
              <label for="inputMessage" class="form-label">Message</label>
              <textarea class="form-control" id="inputMessage" rows="6" required></textarea>
            </div>
            <button type="submit" class="btn btn-primary">Envoyer</button>
          </form>
        </div>
      </section>
    <Footer></Footer>
    </>
  );
}

export default PageContact;