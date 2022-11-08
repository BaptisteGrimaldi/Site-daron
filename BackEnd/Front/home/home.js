let menu = document.getElementById("menu");
let main = document.querySelector("main");


setInterval(largeurCheck,1000); 


function largeurCheck (){


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
        main.style.paddingTop = "100px";


        // Creation icone et ajout
         
        if(checkIcone == null){
            document.body.append(icone);
            icone.appendChild(iconeImage);
            iconeCheck = true;
        }
           
    }
    if(window.innerWidth>1100){
        menu.style.display = "flex";
        menu.style.visibility="visible";

        if(checkIcone !== null){
            checkIcone.remove();
        }
        
        
    }

}
    


