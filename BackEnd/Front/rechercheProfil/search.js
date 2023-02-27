import { filtrageTableauVide } from "./function/filtrageTableauVide.js";
import {ajoutCaracteristiqueCandidat} from "./function/ajoutCaracteristiqueCandidat.js";
import { miseAJourTabExperience } from "./function/miseAJourTabExperience.js";



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
export let tabNiveauExp = ["Tous Niveaux","Junior","Expérimenté","Sénior","Expert","Gourou"];
export let tabNiveauExpSelection = ["Tous Niveaux"];



document.addEventListener("click",(e)=>{

    if(e.target.offsetParent.id == "niveauExperience"){

        if(window.getComputedStyle(champNivExp).getPropertyValue('overflow-y') == "hidden"){

            champNivExp.setAttribute("style", "width: 148px; height: 120px; overflow-y: scroll;");
    
        }
    }else{
        champNivExp.setAttribute("style","height: 17px ; overflow-y: hidden;")
    }

    if(e.target.className ==  "croixRouge"){

        let parentValue = e.target.parentNode.innerText.replace(/❌/g, "");

        let indexNiveauRemove = tabNiveauExpSelection.indexOf(parentValue);
        tabNiveauExpSelection.splice(indexNiveauRemove,1);
        e.target.parentNode.remove();
        miseAJourTabExperience();

    }

    console.log(e.target.value);

    if(e.target.value == "Choisir"){
        console.log("test")
        const entreAge = document.getElementById("entreAge");
        entreAge.setAttribute("style","display : block");
    }

    if(e.target.value == "Tous Ages"){
        const entreAge = document.getElementById("entreAge");
        entreAge.setAttribute("style","display : none");

        const insputAge = document.getElementsByClassName("inputAge");
        console.log(insputAge.length);

        for(let i =0 ; i<insputAge.length ; i++){
            console.log(insputAge[i].value);
            insputAge[i].value = "";
        }

    }


})


let niveauExperience = document.getElementById("niveauExperience");

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


let flecheExperience = document.getElementById("flecheExperience");
let stratFermeListe = document.getElementById("pRechercheProfil");

flecheExperience.addEventListener("click",()=>{

    function test(){
        stratFermeListe.click();
    }

    if(window.getComputedStyle(niveauExperience).getPropertyValue('height') == "17px"){
        champNivExp.setAttribute("style", "height: 120px;");
    }else{
        setTimeout(test,0)
    }

})


const choisirAge = document.getElementById("choisirAge");
const entreAge = document.getElementById("entreAge");














