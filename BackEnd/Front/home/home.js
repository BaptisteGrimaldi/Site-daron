

import { ajustStyleBarreGauche } from "./function/cssBarreLeft.js";
import { generateurQuestion } from "./function/qGenerateur.js";
import { createWindow } from "./function/createWindow.js";
import { supBarreGauche } from "./function/supMobile.js";


function tempsReel(){

    window.addEventListener("load",()=>{

        let local = {
            "mdp": localStorage.getItem("mpdLoginSap"),
            "gmail": localStorage.getItem("gmailLoginSap")
          };
         
        fetch("http://127.0.0.1:5600/checkIfExist",{
         
            method : "POST",
            headers : {
                "Content-Type" : "application/json"
            },
            body : JSON.stringify(local)
        })

    })
    
    
    // window.addEventListener('beforeunload', function (event) {
    
    
    // });

}

tempsReel();


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

 




    




