


export function ajustStyleBarreGauche(){

    
    let divWidth = document.body.offsetWidth;
    let divHeight = document.body.offsetHeight;
    
    let divBarreGauche = document.getElementsByClassName("barreGauche")[0];
    divBarreGauche.style.width = `${divWidth}px`; 
    divBarreGauche.style.height = `${divHeight}px`; 

    // console.log(window.innerWidth + "test")

}

