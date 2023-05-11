
import { tabNiveauExpSelection } from "../search.js";


const niveauExpSelectionner = document.getElementById("niveauExpSelectionner");

export function miseAJourTabExperience (){

    while(niveauExpSelectionner.firstChild){
        niveauExpSelectionner.firstChild.remove();
    }

    tabNiveauExpSelection.forEach(element => {
        let pNiveau = document.createElement("p");
        pNiveau.setAttribute("class","pExperienceSelectionne")
        pNiveau.textContent = element;

        let spanNiveau = document.createElement("span");
        spanNiveau.setAttribute("class","croixRouge");
        spanNiveau.textContent = "❌";

        pNiveau.append(spanNiveau);
        niveauExpSelectionner.append(pNiveau);
    });
}