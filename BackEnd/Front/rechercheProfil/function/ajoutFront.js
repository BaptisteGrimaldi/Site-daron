import{ receptionBdd } from '../search.js';

export function ajoutFront(){

    let zoneApparitionProfil = document.getElementById("resultatRecherche");
    
    for(let nombreCandidat =0; nombreCandidat<receptionBdd.length;nombreCandidat++){
        console.log(receptionBdd[nombreCandidat]);

        let encadrementProfil = document.createElement("div");
        encadrementProfil.setAttribute("class","styleProfil");
        zoneApparitionProfil.append(encadrementProfil);

    }
    console.log(receptionBdd);
}
