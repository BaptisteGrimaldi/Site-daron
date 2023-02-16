
export function ajoutCaracteristiqueCandidat(objetCandidatSansNull){

    let zoneApparitionProfil = document.getElementById("resultatRecherche");

    let listeCompetenceCheck = ["S4HANA", "FI", "FICA", "FM", "CO", "COPC", "PS", "PPM", "SD", "MM", "CLM", "EDI", "LOVC", "FR", "WM", "HUM", "EWM", "PP", "PM", "CS", "QM", "APO", "IBP", "MII", "PLM", "EHS", "TM", "GTS", "IS_AFS", "ISH", "IS_RETAIL", "FMS", "IS_U", "IS_OIL", "IS_RE", "ISMEDIA", "SRM", "CRM", "C4C", "BO", "BW_", "HANA", "SAC", "BPS", "BIIP", "BPC", "BFC", "BCS", "HR", "HRPAIE", "SuccessFactors", "ABAP", "AOO", "BSP", "WEBDYNPRO", "FIORI", "Admin_BC", "EP", "XIPIPO", "MDM", "GRC", "Autorisations", "DEMAT_VIM", "IDM", "Archivage", "SOLMAN", "SBO_Business_One", "BBD_business_bydesign", "Validation_pharma"];

    objetCandidatSansNull.forEach(objetEnCour => {

      let tableauIndexObjet = Object.keys(objetEnCour);

      let codePrenom = objetEnCour.Prenom;
      let codeNom = objetEnCour.Nom;
      let codeRegion = objetEnCour.Regions_de_residence_cibles;
      let typeProfil = objetEnCour.Type_de_profil;
      let domaine = objetEnCour.Domaine_SAP;
      let familleProfil = objetEnCour.Famille_de_profil_SAP;
      let genre = objetEnCour.Genre;

      let tableauDetailCandidat = [codePrenom,codeNom,codeRegion,typeProfil,domaine,familleProfil];

      let styleProfil = document.createElement("div");
      styleProfil.setAttribute("class","styleProfil");

      let imageGenre = document.createElement("div");
      imageGenre.setAttribute("class","imgGenre");
      
      if(genre == 'Homme'){
        imageGenre.setAttribute("style","background-image: url('./function/img/homme-image.webp')")
      }else{
        imageGenre.setAttribute("style","background-image: url('./function/img/femme-image.svg')")
      }
      styleProfil.append(imageGenre);

      let boiteAllCarac = document.createElement("div");
      boiteAllCarac.setAttribute("class","boiteAllCarac");

      styleProfil.append(boiteAllCarac);

      let detailCandidat = document.createElement("div");
      detailCandidat.setAttribute("class","detailCandidat");
      boiteAllCarac.append(detailCandidat);

      for(let detail =0 ; detail<tableauDetailCandidat.length ; detail++){

        if(detail == 0){

          let pDetail =document.createElement("p");
          pDetail.textContent = `Code Prénom : ${tableauDetailCandidat[detail]}`;
          detailCandidat.append(pDetail);

        }else if(detail == 1){

          let pDetail =document.createElement("p");
          pDetail.textContent = `Code Nom : ${tableauDetailCandidat[detail]}`;
          detailCandidat.append(pDetail);

        }else{

          let pDetail =document.createElement("p");
          pDetail.textContent = tableauDetailCandidat[detail];
          detailCandidat.append(pDetail);
          
        }
      }

      zoneApparitionProfil.append(styleProfil);
      
      let divCompetence = document.createElement("div");
      divCompetence.setAttribute("class","divCompetence");
      boiteAllCarac.append(divCompetence);

      tableauIndexObjet.forEach(indexSeul => {
        if (listeCompetenceCheck.includes(indexSeul)) {

          let pCompetence = document.createElement("p");
          pCompetence.setAttribute("class","pCompetence");
          pCompetence.textContent = indexSeul;

          divCompetence.append(pCompetence);
        }
      });
    });
  }