import { env } from "../../production/varRequeteHttp.js";

const bouton = document.getElementById("btn");

const mdp = document.getElementById("mdp");
const confirmMdp = document.getElementById("confirmMdp");
const gmail = document.getElementById("gmail");
const dslpsw = document.getElementById("dslpsw"); 

let formu ={}; 

bouton.addEventListener("click",()=>{

    const regex = new RegExp(/^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[^\w\d\s:])([^\s]){8,16}$/gm);
    let regexConfirm = regex.test(mdp.value);


    function confirmmail(a){

        let banmail= ["gmail","yahoo","hotmail","outlook","free"];
        
        for(let i = 0; i < banmail.length; i++){

            let result = a.indexOf(banmail[i]);
            if(result !==-1){
                return false;
            }
        }

        return true;

    }

    confirmmail(gmail.value);

    
    if((gmail.value.indexOf("@") >= 0) && confirmmail(gmail.value) === true){

        if(mdp.value === confirmMdp.value){


                if(regexConfirm === true){
    
                    formu ={"mdp":mdp.value, "gmail":gmail.value};
        
                    let init = {
                        method : 'POST',
                        headers : {
                            'Content-Type': 'application/json'
                        },
                        body : JSON.stringify(formu)
                    
                    };
            
                    fetch(`${env}/node/sub`,init)
                    .then((res)=>{

                        mdp.value = "";
                        confirmMdp.value="";
                        gmail.value = "";        
                        dslpsw.textContent = "Inscription done";
                        dslpsw.style.color = "green"
                        
                    });

                } //Fin de la confirm de la Regex//

                else{
    
                    mdp.value = "";
                    confirmMdp.value="";
                    dslpsw.textContent = "Désolé le mot de passe ne correspond pas aux critères demandés";
            
                    }
             //Fin du prénom et nom non vide. 
    
        } //Fin du check du mdp
        else{
    
            mdp.value = "";
            confirmMdp.value="";
            dslpsw.textContent = "Désolé le mot de passe est différent veuillez réessayer";
            
        }

        
    }//Fin check mail
    else{
        
        gmail.value ="";
        dslpsw.textContent = "Désolé une adresse professionnelle est demandée";

    }; 

    
    

}) //Fin du bouton


const oeil1 = document.getElementById("oeilVisible1");

oeil1.addEventListener("click",()=>{

    if (mdp.type === "password") {
        mdp.type = "text";
      } else {
        mdp.type = "password";
      }

})

const oeil2 = document.getElementById("oeilVisible2");

oeil2.addEventListener("click",()=>{

if (confirmMdp.type === "password") {
    confirmMdp.type = "text";
  } else {
    confirmMdp.type = "password"
  }

})

