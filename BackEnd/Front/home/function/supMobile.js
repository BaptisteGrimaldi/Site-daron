import { ajustStyleBarreGauche } from "./cssBarreLeft.js";

export async function supBarreGauche(){


    try{
        let croixMobile = document.getElementById("croixBarre");

        croixMobile.addEventListener("click",()=>{
            
            let menuMobile = document.getElementsByClassName("barreGauche")[0];
            let barreGauche = document.getElementsByClassName("titreBarGauche")[0];
            
            let widthBarreGauche = barreGauche.offsetWidth+300;
            console.log(widthBarreGauche);
            
            menuMobile.style.left = `${-widthBarreGauche}px`;
            barreGauche.style.left = `${-widthBarreGauche}px`;


            // modif style largeur

            let divWidth = document.body.offsetWidth;
            let divHeight = document.body.offsetHeight;

            let divBarreGauche = document.getElementsByClassName("barreGauche")[0];
            let bandeVert = document.getElementsByClassName("titreBarGauche")[0];
        
            divBarreGauche.style.width = `${divWidth + widthBarreGauche}px`; 
            divBarreGauche.style.height = `${divHeight}px`; 
    
            bandeVert.style.height = `${divHeight}px`; 

            localStorage.setItem("resize",`${divWidth + widthBarreGauche}`);
            // barreGauche.remove();
            menuMobile.remove();
            console.log("sup")
    
    
        })
    }catch{};


}