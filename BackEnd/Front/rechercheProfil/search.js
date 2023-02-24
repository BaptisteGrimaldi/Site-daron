import { filtrageTableauVide } from "./function/filtrageTableauVide.js";
import {ajoutCaracteristiqueCandidat} from "./function/ajoutCaracteristiqueCandidat.js";



// let formu = {
//     "mdp": localStorage.getItem("mpdLoginSap"),
//     "gmail": localStorage.getItem("gmailLoginSap")
//   };



//  localStorage.setItem('mpdLoginSap', `${mdp.value}`);
//  localStorage.setItem('gmailLoginSap', `${mail.value}`);

//  fetch("http://127.0.0.1:5600/node/login",{

//     method : "POST",
//     headers : {
//         "Content-Type" : "application/json"
//     },
//     body : JSON.stringify(formu)
//  })
//  .then((res)=>{
//    return res.text();
   
//  })
//    .then((res)=>{

//       if(res == "false"){
//         window.location.assign("http://127.0.0.1:5500/BackEnd/Front/log/log.html");
//       }else{
//          console.log("pas hacker");
//       }
//    })



let listeStatut = document.getElementById("listeStatut");
let listeProfil = document.getElementById("listeProfil");
let listeRegion = document.getElementById("listeRegion");
let listeFamille = document.getElementById("listeFamille");
let listeFormation = document.getElementById("listeFormation");
let listedomaine = document.getElementById("domaine");



export let receptionBdd;

let btnLancerLaRecherche = document.getElementById("lancerLaRecherche");
let resultatRecherche = document.getElementById("resultatRecherche");

btnLancerLaRecherche.addEventListener("click", function () {

    while (resultatRecherche.firstChild) {
        resultatRecherche.removeChild(resultatRecherche.lastChild);
    }
    let formu={statut : listeStatut.value, profil : listeProfil.value , region : listeRegion.value, famille : listeFamille.value, formation : listeFormation.value, domaine : listedomaine.value};

    fetch("http://127.0.0.1:5600/rechercheProfil",{

    method : "POST",
    headers : {
        "Content-Type" : "application/json"
    },
    body : JSON.stringify(formu)
    }).then((res)=>{
        return res.json();

    }).then((res)=>{

        receptionBdd = res;
        ajoutCaracteristiqueCandidat(filtrageTableauVide());
    })

});



let champNivExp = document.getElementById("niveauExperience");



document.addEventListener("click",(e)=>{

    console.log(e);

    if(e.target.offsetParent.id == "niveauExperience"){

        if(window.getComputedStyle(champNivExp).getPropertyValue('overflow-y') == "hidden"){

            champNivExp.setAttribute("style", "width: 148px; height: 120px; overflow-y: scroll;");
    
        }
    }else{
        champNivExp.setAttribute("style","height: 17px ; overflow-y: hidden;")
    }
    
    
})


let niveauExperience = document.getElementById("niveauExperience");
const niveauExpSelectionner = document.getElementById("niveauExpSelectionner");

let tabNiveauExp = ["Tout Niveau","Junior","Expérimenté","Sénior","Expert","Gourou"];
let tabNiveauExpSelection = ["Tout Niveau"];

miseAJourTabExperience();

niveauExperience.addEventListener("click",(e)=>{
    
    if(tabNiveauExp.includes(e.target.innerHTML)){

        if(tabNiveauExpSelection.includes(e.target.innerHTML)){
            let indexNiveauRemove = tabNiveauExpSelection.indexOf(e.target.innerHTML);
            tabNiveauExpSelection.splice(indexNiveauRemove,1);
            miseAJourTabExperience();

        }else{
            tabNiveauExpSelection.indexOf(e.target.innerHTML) == -1 ? tabNiveauExpSelection.push(e.target.innerHTML) : null ;

            miseAJourTabExperience();
            
        }
    }
})


let croixRouge = document.getElementById("croixRougeExperience");
let stratFermeListe = document.getElementById("pRechercheProfil");

croixRouge.addEventListener("click",()=>{
//    console.log("test");
    function test(){
        console.log("test");
        stratFermeListe.click();
    }

   setTimeout(test,0)
    
})


function miseAJourTabExperience (){

    while(niveauExpSelectionner.firstChild){
        niveauExpSelectionner.firstChild.remove();
    }

    tabNiveauExpSelection.forEach(element => {
        let pNiveau = document.createElement("p");
        pNiveau.setAttribute("class","pExperienceSelectionne")
        pNiveau.textContent = element;
        niveauExpSelectionner.append(pNiveau);
    });
    console.log(tabNiveauExpSelection);
}











