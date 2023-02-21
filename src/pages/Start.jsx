import logoCrazyQuiz from "../img/logoCrazyQuiz.png";
import logoHTMLBanner from "../img/logoHTMLBanner.svg"
import { UserContext } from "../context/UserContext";
import { useContext } from "react";
import { Link } from "react-router-dom";


export default function Start() {

    const url = new URL(window.location.href);
    const quizParam = url.pathname.split("/")[2];
    console.log(quizParam);

    const { CategorieTable }= useContext(UserContext);

   

    for ( let i = 0 ; i <= CategorieTable.length -1 ; i++) {
        if (CategorieTable[i].categorieQuiz === quizParam) {
            let TextBanner = CategorieTable[i].categorieQuiz;
            let CategorieBanner = CategorieTable[i].img;
            let ColorTextBanner = CategorieTable[i].span
            return(
        
                <section className="conteneurStart">
                    
                    <div className="ImgLogoQuiz"><img src={logoCrazyQuiz} alt="" /></div>
        
                    <div className="ImgHTML"><img src={CategorieBanner} alt="" /><span className={ColorTextBanner}>{TextBanner}</span></div>
        
                    <p className="pStart">Une réponse possible, <br /> et 20 secondes par questions !!</p>
                <main>
                    <Link to={`/Quiz/${TextBanner}`}><button className="connectedBtn">Commencer</button></Link>
                    <Link to={`/Categories`}><button className="connectedBtn">Retour</button></Link>
                    </main>
                </section>
            )
        }
    }
   
}