let menu = document.getElementById("menu");
let main = document.querySelector("main");



setInterval(largeurCheck,1000);



function largeurCheck (){

    iconeCheck = false;

    if(window.innerWidth<1100){

        // Rend invisible la barre des taches

        menu.style.display = "none";
        menu.style.visibility="hidden";
        main.style.marginTop = 0;
        main.style.paddingTop = "100px";

        // Creation icone et ajout
        
        if(iconeCheck == false){
            icone = document.createElement("p");
            icone.setAttribute("id","iconeMenu");
            document.body.append(icone);
            iconeCheck = true;
            console.log(iconeCheck);
        }

    }
    if(window.innerWidth>1100){
        menu.style.display = "flex";
        menu.style.visibility="visible";
        iconeCheck = true;
        console.log(iconeCheck);
    }

}
    


