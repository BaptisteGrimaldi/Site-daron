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


// let btnExperience =  document.getElementById("experienceSap");

// btnExperience.addEventListener("click",(e)=>{

//     e.preventDefault();
//     // let listeExperience = document.createElement("div");

//     // for()

// })

let parentElement = document.getElementById("experienceSap");

parentElement.addEventListener("click", function(event) {

    console.log(event);
  if (parentElement.contains(event.target)) {
    console.log("Un enfant de l'élément parent a été cliqué !");
  }
});









