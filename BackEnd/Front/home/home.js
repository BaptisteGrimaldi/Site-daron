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


}

let lol = document.querySelector("#partie9 > div > div:nth-child(3) > div");
console.log(lol);


document.body.addEventListener("click",(e)=>{


    let check = e.target.id;
    test = check.indexOf("q");
    console.log(test)
    if(test == 0){
        
        console.log(check[1])
        let question = document.getElementById(`q${check[1]}`);
        let reponse = document.getElementById(`rep${check[1]}`)

            if(reponse.style.display == "none"){
                reponse.style.display = "block";
                question.textContent = "-";
                test.style.backgroundColor = "red";
                


            }
            else{
                reponse.style.display = "none";
                question.textContent = "+";
            }

        

    }

    
})

    




