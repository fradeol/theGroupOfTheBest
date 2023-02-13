import "./ConnexionInscription.css";
import { Link } from "react-router-dom"

export default function Connexion() {
  return (
    <main>
    <form action="">
      <fieldset>
        <legend>Connexion</legend>
        <input type={"email"} placeholder="adresse@mail.fr" />
        <input type={"password"} placeholder="mot de passe"/>

        <div className="checkbox">
          <label htmlFor="">
            {" "}
            Se souvenir de moi
          </label>
          <input type={"checkbox"} />
        </div>

        <button>Se connecter</button>
      </fieldset>
    </form>
    <div className="inscrit"><Link to='/Inscription' >Pas encore inscrit ?</Link></div>
    </main>
  );
}
