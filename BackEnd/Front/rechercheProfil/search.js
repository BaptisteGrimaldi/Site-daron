import { ajoutFront } from "./function/ajoutFront.js";

let btnLancerLaRecherche = document.getElementById("lancerLaRecherche");
let resultatRecherche = document.getElementById("resultatRecherche");

let listeStatut = document.getElementById("listeStatut");
let listeProfil = document.getElementById("listeProfil");
let listeRegion = document.getElementById("listeRegion");
let listeFamille = document.getElementById("listeFamille");
let listeFormation = document.getElementById("listeFormation");
let listedomaine = document.getElementById("domaine");


let formu={};

export let receptionBdd;

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
        ajoutFront();
    })

    

});






