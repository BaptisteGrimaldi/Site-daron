let menu = document.getElementById("menu");
let main = document.querySelector("main");
let iconeDiv = document.getElementById("iconeDiv");

setInterval(largeurCheck,1000); 


function largeurCheck (){

    // Icone menu
    iconeDiv = document.getElementById("iconeDiv");
    icone = document.createElement("p");
    icone.setAttribute("id","iconeMenu");
    iconeImage = document.createElement("img");
    iconeImage.setAttribute("src","../img/icone-menu.webp");
    let checkIcone = document.getElementById("iconeMenu");

    

    if(window.innerWidth<1100){

        // Rend invisible la barre des taches

        menu.style.display = "none";
        menu.style.visibility="hidden";
        main.style.marginTop = 0;
        main.style.paddingTop = "30px";
        iconeDiv.style.visibility = "visible";

        // Creation icone et ajout
         
        if(checkIcone == null){

            iconeDiv.append(icone);
            icone.append(iconeImage);
            iconeCheck = true;
        }
           
    }
    if(window.innerWidth>1100){
        menu.style.display = "flex";
        menu.style.visibility="visible";
        iconeDiv.style.visibility = "hidden";

        if(checkIcone !== null){
            checkIcone.remove();
        }
        
        
    }


    // Changement style boite à solucChasse

    let boite3 = document.getElementById("third");
    let boiteChange = document.getElementById("chasseChange");



    if(window.innerWidth <800){

        boite3.style.display = "none";
        boiteChange.style.display ="block";
        
    }
    if(window.innerWidth >800){

        boite3.style.display = "block";
        boiteChange.style.display ="none";

    }

    if(window.innerWidth <440){

        boiteChange.style.display ="none";
        boite3.style.display = "block";

    }

    let offreDataRemove = document.getElementById("offreDataRemove");

if(window.innerWidth <970){

    offreDataRemove.style.display = "none";
    
}

if(window.innerWidth >970){

    offreDataRemove.style.display = "block";
    
}

if(window.innerWidth <550){

    offreDataRemove.style.display = "block";
    
}

if(window.innerWidth <400){

    let selectFaqSalInde = document.getElementById("sautDeLigneSalarieEtIndependant");
    let contenuSautDeLigneFaq = document.getElementById("sautDeLigneSalarieEtIndependant").textContent;

    selectFaqSalInde.textContent = contenuSautDeLigneFaq.replace("/"," ");

}else{

    let selectFaqSalInde = document.getElementById("sautDeLigneSalarieEtIndependant");
    let contenuSautDeLigneFaq = document.getElementById("sautDeLigneSalarieEtIndependant").textContent;

    selectFaqSalInde.textContent = contenuSautDeLigneFaq.replace(" ","/");
}


}




document.body.addEventListener("click",(e)=>{


    let check = e.target.id;
    test = check.indexOf("q");

    if(test == 0){

        finalCheckString = check.replace("q","");
        finalCheckNumber = parseInt(finalCheckString);

        let question = document.getElementById(`q${finalCheckNumber}`);
        let reponse = document.getElementById(`rep${finalCheckNumber}`)
        let parentDefil = question.parentNode;

            if(reponse.style.display == "none"){
                reponse.style.display = "block";
                question.textContent = "-";
                question.style.color = "black";
                parentDefil.style.backgroundColor = "red";
                


            }
            else{
                reponse.style.display = "none";
                question.textContent = "+";
                parentDefil.style.backgroundColor = "#35d988";
                question.style.color = "green";
            }

        

    }

    
})



let selectBoutonOrange = document.getElementById("iconeDiv");
console.log(selectBoutonOrange)

selectBoutonOrange.addEventListener("click",()=>{

    let divWidth = window.innerWidth;



    let divBarreGauche = document.createElement("div");
    divBarreGauche.setAttribute("class","barreGauche");
    divBarreGauche.style.width = `${divWidth}px`; 
    document.body.append(divBarreGauche);

    let barreMenuGauche = document.createElement("div");
    barreMenuGauche.setAttribute("class","titreBarGauche");

    document.body.append(barreMenuGauche);

    let divStockPara = document.createElement("div");
    divStockPara.setAttribute("id","barreStockPara");

    barreMenuGauche.append(divStockPara)

    for(i=0;i<4;i++){

        let pBarreGauche = document.createElement("p");
        pBarreGauche.setAttribute("class","pBarreGauche");
        divStockPara.append(pBarreGauche);

        let selectParaBarreGauche = document.getElementsByClassName("pBarreGauche");


        if(i == 0){
            selectParaBarreGauche[i].textContent = "Mon Blog dédié aux recruteurs SAP";
        }

        if(i == 1){
            selectParaBarreGauche[i].textContent = "Mes services aux Freelances SAP";
        }

        if(i == 2){
            selectParaBarreGauche[i].textContent = "Mes services aux Freelances SAP";
        }
        if(i == 3){
            selectParaBarreGauche[i].textContent = "Mes services aux Freelances SAP";
        }
    }

    
})

    




