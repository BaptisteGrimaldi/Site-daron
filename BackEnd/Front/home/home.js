

import { ajustStyleBarreGauche } from "./function/cssBarreLeft.js";
import { generateurQuestion } from "./function/qGenerateur.js";
import { createWindow } from "./function/createWindow.js";
import { supBarreGauche } from "./function/supMobile.js";


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

// createWindow();

let selectBoutonOrange = document.getElementById("divBtnBg");

selectBoutonOrange.addEventListener("click",()=>{

    let divWidth = document.body.offsetWidth;
    let divHeight = document.body.offsetHeight;

    let divBarreGauche = document.createElement("div");
    divBarreGauche.setAttribute("class","barreGauche");
    divBarreGauche.style.width = `${divWidth}px`;
    divBarreGauche.style.height = `${divHeight}px`; 
    document.body.append(divBarreGauche);

    let barreMenuGauche = document.createElement("div");
    barreMenuGauche.setAttribute("class","titreBarGauche");
    barreMenuGauche.style.height = `${divHeight}px`; 
    document.body.append(barreMenuGauche);
    

    let divStockPara = document.createElement("div");
    divStockPara.setAttribute("id","barreStockPara");

    barreMenuGauche.append(divStockPara)

    let croixBarre = document.createElement("p");
    croixBarre.setAttribute("id","croixBarre");
    croixBarre.textContent = "❌";

    divStockPara.append(croixBarre);

    let i;

    for(i=0;i<6;i++){

        let pBarreGauche = document.createElement("p");
        pBarreGauche.setAttribute("class","pBarreGauche");

        divStockPara.append(pBarreGauche);

        let ancreWindow = document.createElement("a");
        pBarreGauche.append(ancreWindow);

        let selectParaBarreGauche = document.getElementsByClassName("pBarreGauche");


        if(i == 0){

            ancreWindow.setAttribute("href","../log/log.html");
            
            ancreWindow.textContent = "Connexion";
            pBarreGauche.setAttribute("id","windowLog");
            
        }
        if(i == 1){
            
            ancreWindow.setAttribute("href","../sub/sub.html");

            ancreWindow.textContent = "Inscription";
            pBarreGauche.setAttribute("id","windowSub");
        }

        if(i == 2){

            ancreWindow.setAttribute("href","https://recrutezsursap.digitalpress.blog/");
            ancreWindow.setAttribute("target","_blank");

            ancreWindow.textContent = "Mon Blog dédié aux recruteurs SAP";

        }

        if(i == 3){

            ancreWindow.setAttribute("href","https://drive.google.com/file/d/1wAOiXIxvw2iDOSM4y_FxRfqx5z5Kbi5V/view");
            ancreWindow.setAttribute("target","_blank");

            ancreWindow.textContent = "Mes services aux Freelances SAP";

        }

        if(i == 4){

            ancreWindow.setAttribute("href","https://drive.google.com/file/d/1xnYNuz-BoPM8_SGLQbeWOIL6k7YyM6j1/view");
            ancreWindow.setAttribute("target","_blank");

            ancreWindow.textContent = "Mes services aux candidats Salariés SAP";


           
        }
        if(i == 5){

            ancreWindow.setAttribute("href","https://drive.google.com/file/d/1ZhhvWB3qK28d1bVoXnvGSBzKcBeq9Lhy/view");
            ancreWindow.setAttribute("target","_blank");

            ancreWindow.textContent = "CDI proposés par mes clients"; 
        }

    }

    supBarreGauche();
})


window.addEventListener('resize', function() {

    ajustStyleBarreGauche();
  });

 




    




