import React, { useState } from "react";

function RouteConnexion(props) {
  const [nom, setNom] = useState("");
  const [mdp, setMDP] = useState("");

  const verification = () => {
    if (nom === "ilovecats" && mdp === "ihatedogs") {
      window.location.href = "/PagePrinc";
    } else {
      alert("Mot de passe ou nom d'utilisateur non valide !");
    }
  };

  return (
    <div className="form bg-light">
      <div className="form-toggle"></div>
      <div className="form-panel one">
        <div className="form-header">
          <h1>Connexion</h1>
        </div>
        <div className="form-content">
          <form>
            <div className="form-group">
              <label htmlFor="username">Nom d'utilisateur</label>
              <input
                type="text"
                id="username"
                name="username"
                required="required"
                value={nom}
                onChange={(e) => setNom(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Mot de passe</label>
              <input
                type="password"
                id="password"
                name="password"
                required="required"
                value={mdp}
                onChange={(e) => setMDP(e.target.value)}
              />
            </div>
            <div className="form-group">
              <button type="button" onClick={verification}>
                Entrez dans le donjon
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default RouteConnexion;
