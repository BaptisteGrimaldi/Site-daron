import{ receptionBdd } from '../search.js';

export function ajoutFront(){

    let zoneApparitionProfil = document.getElementById("resultatRecherche");

    function removeNullValues (obj){
        for (let key in obj) {
          if (obj[key] === null) {
            delete obj[key];
          }
        }
      };
      
      const objetCandidatSansNull = receptionBdd.map(obj => {
        removeNullValues(obj);
        return obj;
      });
      
      console.log(objetCandidatSansNull);

      let listeCompetenceCheck = ["S4HANA", "FI", "FICA", "FM", "CO", "COPC", "PS", "PPM", "SD", "MM", "CLM", "EDI", "LOVC", "FR", "WM", "HUM", "EWM", "PP", "PM", "CS", "QM", "APO", "IBP", "MII", "PLM", "EHS", "TM", "GTS", "IS_AFS", "ISH", "IS_RETAIL", "FMS", "IS_U", "IS_OIL", "IS_RE", "ISMEDIA", "SRM", "CRM", "C4C", "BO", "BW_", "HANA", "SAC", "BPS", "BIIP", "BPC", "BFC", "BCS", "HR", "HRPAIE", "SuccessFactors", "ABAP", "AOO", "BSP", "WEBDYNPRO", "FIORI", "Admin_BC", "EP", "XIPIPO", "MDM", "GRC", "Autorisations", "DEMAT_VIM", "IDM", "Archivage", "SOLMAN", "SBO_Business_One", "BBD_business_bydesign", "Validation_pharma"];

    
    for(let nombreCandidat =0; nombreCandidat<objetCandidatSansNull.length;nombreCandidat++){
        console.log(objetCandidatSansNull[nombreCandidat]);
        let encadrementProfil = document.createElement("div");
        encadrementProfil.setAttribute("class","styleProfil");
        zoneApparitionProfil.append(encadrementProfil);

        for(let iterationTableau =0 ; iterationTableau<objetCandidatSansNull.length ; iterationTableau++){

          let objetEnCour = objetCandidatSansNull[iterationTableau];
          let tableauIndexObjet = Object.keys(objetEnCour);
      
          for(let checkIndex =0;checkIndex<tableauIndexObjet.length;checkIndex++){
      
              let indexSeul = tableauIndexObjet[checkIndex];
      
              // console.log(indexSeul);
      
              if(listeCompetenceCheck.indexOf(indexSeul) !=-1){
                  console.log(indexSeul);

              }
          }
      
          // console.log("objet suivant");
            
        }

    }
    // console.log(receptionBdd);
}
