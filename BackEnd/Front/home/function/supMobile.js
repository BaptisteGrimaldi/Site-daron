

export function supBarreGauche(){

    let croixMobile = document.getElementById("croixBarre");

    croixMobile.addEventListener("click",()=>{
        
        let menuMobile = document.getElementsByClassName("barreGauche")[0];
        let barreGauche = document.getElementsByClassName("titreBarGauche")[0];

        barreGauche.remove();
        menuMobile.remove();


    })
}