import { supBarreGauche } from "./supMobile.js";

export function createWindow(){
    let selectBoutonOrange = document.getElementById("iconeDiv");

selectBoutonOrange.addEventListener("click",()=>{

    let divWidth = document.body.offsetWidth;
    let divHeight = document.body.offsetHeight;

    let divBarreGauche = document.createElement("div");
    divBarreGauche.setAttribute("class","barreGauche");
    divBarreGauche.style.width = `${divWidth}px`;
    divBarreGauche.style.height = `${divHeight}px`; 
    document.body.append(divBarreGauche);

    let barreMenuGauche = document.createElement("div");
    barreMenuGauche.setAttribute("class","titreBarGauche");
    barreMenuGauche.style.height = `${divHeight}px`; 
    document.body.append(barreMenuGauche);
    

    let divStockPara = document.createElement("div");
    divStockPara.setAttribute("id","barreStockPara");

    barreMenuGauche.append(divStockPara)

    let croixBarre = document.createElement("p");
    croixBarre.setAttribute("id","croixBarre");
    croixBarre.textContent = "❌";

    divStockPara.append(croixBarre);

    let i;

    for(i=0;i<6;i++){

        let pBarreGauche = document.createElement("p");
        pBarreGauche.setAttribute("class","pBarreGauche");

        divStockPara.append(pBarreGauche);

        let selectParaBarreGauche = document.getElementsByClassName("pBarreGauche");


        if(i == 0){
            selectParaBarreGauche[i].textContent = "Connexion";
            pBarreGauche.setAttribute("id","windowLog");

        }
        if(i == 1){
            selectParaBarreGauche[i].textContent = "Inscription";
            pBarreGauche.setAttribute("id","windowSub");
        }

        if(i == 2){
            selectParaBarreGauche[i].textContent = "Mon Blog dédié aux recruteurs SAP";
        }

        if(i == 3){
            selectParaBarreGauche[i].textContent = "Mes services aux Freelances SAP";
        }

        if(i == 4){
            selectParaBarreGauche[i].textContent = " Mes services aux candidats Salariés SAP";
           
        }
        if(i == 5){
            selectParaBarreGauche[i].textContent = "CDI proposés par mes clients";
            
        }

    }

    supBarreGauche();
})
}