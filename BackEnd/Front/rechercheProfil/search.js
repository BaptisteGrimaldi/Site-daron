import { filtrageTableauVide } from "./function/filtrageTableauVide.js";
import {ajoutCaracteristiqueCandidat} from "./function/ajoutCaracteristiqueCandidat.js";
import { miseAJourTabExperience } from "./function/miseAJourTabExperience.js";
import { env } from "../production/varRequeteHttp.js";



const listeStatut = document.getElementById("listeStatut");
const listeProfil = document.getElementById("listeProfil");
const listeRegion = document.getElementById("listeRegion");
const listeFamille = document.getElementById("listeFamille");
const listeFormation = document.getElementById("listeFormation");
const listedomaine = document.getElementById("domaine");

const listeAge = document.getElementById("age");
let ageDebut = document.getElementById("ageDebut");
let ageFin = document.getElementById("ageFin");


export let receptionBdd;

let btnLancerLaRecherche = document.getElementById("lancerLaRecherche");
let resultatRecherche = document.getElementById("resultatRecherche");

btnLancerLaRecherche.addEventListener("click", function () {

    btnLancerLaRecherche.setAttribute("style","display:none")

    function reaparitionBtnLancerLaRecherche(){
        btnLancerLaRecherche.setAttribute("style","display:block")
    }

    setTimeout(reaparitionBtnLancerLaRecherche,1000)

    while (resultatRecherche.firstChild) {
        resultatRecherche.removeChild(resultatRecherche.lastChild);
    }

    try{
        let nombreResultat = document.getElementsByClassName("pNombreResultat")[0];

        if(nombreResultat){
            nombreResultat.remove();
        }
    }catch{
        console.error("err")
    }

    let formu={statut : listeStatut.value, profil : listeProfil.value , region : listeRegion.value, famille : listeFamille.value, formation : listeFormation.value,
         domaine : listedomaine.value, experience : tabNiveauExpSelection.includes("Tous Niveaux") || tabNiveauExpSelection === "" ? ["Tous Niveaux"] : tabNiveauExpSelection ,
         age : listeAge.value == "Choisir" ? [ageDebut.value ? ageDebut.value : 20,ageFin.value ? ageFin.value : 70] :  [10,100], user : document.cookie.replace(/(?:(?:^|.*;\s*)email\s*\=\s*([^;]*).*$)|^.*$/, "$1")};


    fetch(`${env}/rechercheProfil`,{

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
    }).catch((err)=>{
        console.error("An error occurred: " + err);
    })


});



let champNivExp = document.getElementById("niveauExperience");
export let tabNiveauExp = ["Tous Niveaux","Junior","Expérimenté","Sénior","Expert","Gourou"];
export let tabNiveauExpSelection = ["Tous Niveaux"];



document.addEventListener("click",(e)=>{

    if(e.target.className == "plusDeDetail"){

        if(e.target.textContent == "Plus de détails"){
            let parentElement = e.target.parentElement.children[2];
            parentElement.setAttribute("style","display:block");
            e.target.textContent = "Moins de détails";

        }else{
            let parentElement = e.target.parentElement.children[2];
            parentElement.setAttribute("style","display:none");
            e.target.textContent = "Plus de détails";
        }
  
    }

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

    // console.log(e.target.value);

    if(e.target.value == "Choisir"){
        const entreAge = document.getElementById("entreAge");
        entreAge.setAttribute("style","display : block");
    }

    if(e.target.value == "Tous Ages"){
        const entreAge = document.getElementById("entreAge");
        entreAge.setAttribute("style","display : none");

        const insputAge = document.getElementsByClassName("inputAge");

        for(let i =0 ; i<insputAge.length ; i++){
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

    function fermetureFleche(){
        stratFermeListe.click();
    }

    if(window.getComputedStyle(niveauExperience).getPropertyValue('height') == "17px"){
        champNivExp.setAttribute("style", "height: 120px;");
    }else{
        setTimeout(fermetureFleche,0)
    }

})

const flecheHaut = document.getElementById("divRetourHaut");

flecheHaut.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});