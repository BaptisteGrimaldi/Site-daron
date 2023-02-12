let tableauObjets = [
    { nom: "objet1", S4HANA :"O", FI :"O" , PS:"O"},
    { nom: "objet2",  FI :"O" }
  ];
  
  let listeCompetenceCheck = ["S4HANA", "FI", "FICA", "FM", "CO", "COPC", "PS", "PPM", "SD", "MM", "CLM", "EDI", "LOVC", "FR", "WM", "HUM", "EWM", "PP", "PM", "CS", "QM", "APO", "IBP", "MII", "PLM", "EHS", "TM", "GTS", "IS_AFS", "ISH", "IS_RETAIL", "FMS", "IS_U", "IS_OIL", "IS_RE", "ISMEDIA", "SRM", "CRM", "C4C", "BO", "BW_", "HANA", "SAC", "BPS", "BIIP", "BPC", "BFC", "BCS", "HR", "HRPAIE", "SuccessFactors", "ABAP", "AOO", "BSP", "WEBDYNPRO", "FIORI", "Admin_BC", "EP", "XIPIPO", "MDM", "GRC", "Autorisations", "DEMAT_VIM", "IDM", "Archivage", "SOLMAN", "SBO_Business_One", "BBD_business_bydesign", "Validation_pharma"];
  
  for(iterationTableau =0 ; iterationTableau<tableauObjets.length ; iterationTableau++){

    let objetEnCour = tableauObjets[iterationTableau];
    let tableauIndexObjet = Object.keys(objetEnCour);

    for(checkIndex =0;checkIndex<tableauIndexObjet.length;checkIndex++){

        let indexSeul = tableauIndexObjet[checkIndex];

        // console.log(indexSeul);

        if(listeCompetenceCheck.indexOf(indexSeul) !=-1){
            console.log(indexSeul);
        }
    }

    console.log("objet suivant");


  }