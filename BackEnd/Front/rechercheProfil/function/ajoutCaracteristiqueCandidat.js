
export function ajoutCaracteristiqueCandidat(objetCandidatSansNull){

    let zoneApparitionProfil = document.getElementById("resultatRecherche");

    let listeCompetenceCheck = ["S4HANA", "FI", "FICA", "FM", "CO", "COPC", "PS", "PPM", "SD", "MM", "CLM", "EDI", "LOVC", "FR", "WM", "HUM", "EWM", "PP", "PM", "CS", "QM", "APO", "IBP", "MII", "PLM", "EHS", "TM", "GTS", "IS_AFS", "ISH", "IS_RETAIL", "FMS", "IS_U", "IS_OIL", "IS_RE", "ISMEDIA", "SRM", "CRM", "C4C", "BO", "BW_", "HANA", "SAC", "BPS", "BIIP", "BPC", "BFC", "BCS", "HR", "HRPAIE", "SuccessFactors", "ABAP", "AOO", "BSP", "WEBDYNPRO", "FIORI", "Admin_BC", "EP", "XIPIPO", "MDM", "GRC", "Autorisations", "DEMAT_VIM", "IDM", "Archivage", "SOLMAN", "SBO_Business_One", "BBD_business_bydesign", "Validation_pharma"];

    console.log(objetCandidatSansNull.length);


    const divNombreResultat = document.getElementById("nombreResultat");
    let pNombreResultat = document.createElement("p");
    pNombreResultat.setAttribute("class"," pNombreResultat");
    pNombreResultat.textContent = `${objetCandidatSansNull.length} profils SAP correspondent à votre recherche !`;

    divNombreResultat.append(pNombreResultat);

    objetCandidatSansNull.forEach(objetEnCour => {

      let tableauIndexObjet = Object.keys(objetEnCour);

      let codePrenom = objetEnCour.Prenom ? objetEnCour.Prenom : "";
      let codeNom = objetEnCour.Nom ? objetEnCour.Nom : "";
      let codeIdentifiant = objetEnCour.Identifiant;
      let codeRegion = objetEnCour.Regions_de_residence_cibles;
      let typeProfil = objetEnCour.Type_de_profil;
      let domaine = objetEnCour.Domaine_SAP;
      let familleProfil = objetEnCour.Famille_de_profil_SAP;
      let genre = objetEnCour.Genre;
      let dateMiseAJour= objetEnCour.Date_de_mise_a_jour ? objetEnCour.Date_de_mise_a_jour : "Non précisé";
      let statut = objetEnCour.Statut;
      let sapDepuis =objetEnCour.SAP_depuis;
      let typeFormation = objetEnCour.Type_Formation;
      let departementResidence = objetEnCour.Departement_residence ? objetEnCour.Departement_residence : "Non précisé";
      let probabilitéRecherche = objetEnCour.Probabilite_de_recherche ? objetEnCour.Probabilite_de_recherche : "Non précisé";
      let typeEmployeur = objetEnCour.Type_Employeur ? objetEnCour.Type_Employeur : "Non précisé";
      let disponibilite = objetEnCour.Disponibilite ? objetEnCour.Disponibilite : "Non précisé";
      let tjm = objetEnCour.Pretentions ? objetEnCour.Pretentions : "Non précisé";
      let age = objetEnCour.Annee_de_naissance;
      let commentaire = objetEnCour.Commentaires ? objetEnCour.Commentaires.toLowerCase() : "Aucun"; // tef les commentaire si ils sont vide 

      // Principal  region , Profil : "a changer", pretention, age

      let tableauDetailImage=[codePrenom,codeNom,codeIdentifiant];
      let tableauDetailCandidat = [dateMiseAJour,codeRegion,typeProfil,domaine,familleProfil,statut,sapDepuis,typeFormation,departementResidence,
        probabilitéRecherche,typeEmployeur,disponibilite,tjm,age,commentaire];

      let encadrementStyleProfil = document.createElement("div");
      encadrementStyleProfil.setAttribute("class","encadrementStyleProfil");
      zoneApparitionProfil.append(encadrementStyleProfil);

      
      let styleProfil = document.createElement("div");
      styleProfil.setAttribute("class","styleProfil");
      encadrementStyleProfil.append(styleProfil);

      let imgPlusNomPrenom = document.createElement("div");
      imgPlusNomPrenom.setAttribute("class","divImgPlusNomPrenom")

      styleProfil.append(imgPlusNomPrenom);

      let divCodeNomPrenomId = document.createElement("div");
      divCodeNomPrenomId.setAttribute("class","divCodeNomPrenomId");

        for(let i =0 ; i<3 ;i++){

          if(i == 0){
  
            let p = document.createElement("p");
            p.textContent = "Code Prénom : "+tableauDetailImage[i];
            divCodeNomPrenomId.append(p);
  
          }else if(i == 1){
  
            let p = document.createElement("p");
            p.textContent = "Code Nom : "+tableauDetailImage[i];
            divCodeNomPrenomId.append(p);
  
          }else{
  
            let p = document.createElement("p");
            p.textContent = "ID : "+tableauDetailImage[i];
            divCodeNomPrenomId.append(p);
          }
  
        
        }

      
      imgPlusNomPrenom.append(divCodeNomPrenomId);


      let imageGenre = document.createElement("div");
      imageGenre.setAttribute("class","imgGenre");
      
      if(genre == 'Homme'){
        imageGenre.setAttribute("style","background-image: url('./function/img/homme.png')")
      }else{
        imageGenre.setAttribute("style","background-image: url('./function/img/femme.png')")
      }
      imgPlusNomPrenom.append(imageGenre);



      let boiteAllCarac = document.createElement("div");
      boiteAllCarac.setAttribute("class","boiteAllCarac");

      styleProfil.append(boiteAllCarac);

      let detailCandidat = document.createElement("div");
      detailCandidat.setAttribute("class","detailCandidat");
      boiteAllCarac.append(detailCandidat);


      let messagePresentation = ["Date de mise à jour : ","Région(s) de résidence cible(s) : ","Type de profil : ","","","Statut : ",
      "SAP depuis ","Type de formation  : ","Département de résidence : ","Probabilité de recherche de poste/mission : ","Type Employeur : ",
       "Disponibilité : ","Prétentions/TJM cible : ","Age : ","Commentaires : "];

      for(let detail =0 ; detail<tableauDetailCandidat.length ; detail++){
        
        if(detail == 2){

          let pDetail =document.createElement("p");
          pDetail.setAttribute("class","pDetail");
          pDetail.innerHTML = `<span class="messagePres">`+ messagePresentation[detail] + "</span>"+"<br>"+ tableauDetailCandidat[detail] + " " + tableauDetailCandidat[detail+1] + " " + tableauDetailCandidat[detail+2];
          detailCandidat.append(pDetail);
        }else if(detail == 3){

          let pDetail =document.createElement("p");
          pDetail.setAttribute("class","pDetail")
          pDetail.textContent = "";
        }else if(detail == 4){
          
          let pDetail =document.createElement("p");
          pDetail.setAttribute("class","pDetail")
          pDetail.textContent = "";
        }else{

          let pDetail =document.createElement("p");
          pDetail.setAttribute("class","pDetail")
          pDetail.innerHTML = `<span class="messagePres">`+ messagePresentation[detail] +"<br/>"+"</span>"+ tableauDetailCandidat[detail];
          detailCandidat.append(pDetail);
        }
 
      }


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