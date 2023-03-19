

import { ajustStyleBarreGauche } from "./function/cssBarreLeft.js";
import { generateurQuestion } from "./function/qGenerateur.js";
import { createWindow } from "./function/createWindow.js";
import { supBarreGauche } from "./function/supMobile.js";
import { setTimeoutTempsReel } from "./function/tempsReel.js";


setTimeoutTempsReel();

let menu = document.getElementById("menu");
let main = document.querySelector("main");
let iconeDiv = document.getElementById("iconeDiv");
let iconeCheck;


setInterval(largeurCheck,1000); 

function largeurCheck (){

    // Changement style boite à solucChasse

    let boite3 = document.getElementById("third");
    let boiteChange = document.getElementById("chasseChange");

    if(window.innerWidth <800){

        boite3.style.display = "none";
        boiteChange.style.display ="block";
        
    }
    if(window.innerWidth >800){

        boite3.style.display = "block";
        boiteChange.style.display ="none";

    }

    if(window.innerWidth <440){

        boiteChange.style.display ="none";
        boite3.style.display = "block";

    }

        let offreDataRemove = document.getElementById("offreDataRemove");

        if(window.innerWidth <970){

            offreDataRemove.style.display = "none";
            
        }

        if(window.innerWidth >970){

            offreDataRemove.style.display = "block";
            
        }

        if(window.innerWidth <550){

            offreDataRemove.style.display = "block";
            
        }

        if(window.innerWidth <400){

            let selectFaqSalInde = document.getElementById("sautDeLigneSalarieEtIndependant");
            let contenuSautDeLigneFaq = document.getElementById("sautDeLigneSalarieEtIndependant").textContent;

            selectFaqSalInde.textContent = contenuSautDeLigneFaq.replace("/"," ");

        }else{

            let selectFaqSalInde = document.getElementById("sautDeLigneSalarieEtIndependant");
            let contenuSautDeLigneFaq = document.getElementById("sautDeLigneSalarieEtIndependant").textContent;

            selectFaqSalInde.textContent = contenuSautDeLigneFaq.replace(" ","/");
        }


}

generateurQuestion();

createWindow();

window.addEventListener('resize', function() {

    ajustStyleBarreGauche();
  });

 




    




