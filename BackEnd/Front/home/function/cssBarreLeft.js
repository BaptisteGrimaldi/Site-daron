


export async function ajustStyleBarreGauche(){

    
    let divWidth = document.body.offsetWidth;
    let divHeight = document.body.offsetHeight;

    try{
        let divBarreGauche = document.getElementsByClassName("barreGauche")[0];
        let bandeVert = document.getElementsByClassName("titreBarGauche")[0];
        
        divBarreGauche.style.width = `${divWidth}px`; 
        divBarreGauche.style.height = `${divHeight}px`; 
    
        bandeVert.style.height = `${divHeight}px`; 

    }catch{}
        
    


}

