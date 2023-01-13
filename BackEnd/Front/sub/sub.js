
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

        banmail= ["gmail","yahoo","hotmail","outlook"];
        
        for(let i = 0; i < banmail.length; i++){

            result = a.indexOf(banmail[i]);
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
    
                    formu ={"Nom":Nom.value ,"Prenom":Prenom.value ,"mdp":mdp.value, "gmail":gmail.value};
        
                let init = {
                    method : 'POST',
                    headers : {
                        'Content-Type': 'application/json'
                    },
                    body : JSON.stringify(formu)
                
                };
            
                fetch('http://127.0.0.1:5600/node/sub',init)
                .then((res)=>{

                    mdp.value = "";
                    confirmMdp.value="";
                    gmail.value = "";
                    dslpsw.textContent = "Envoyé, en attente de l'autorisation d'inscription reponse sous 1 jour";
                    dslpsw.style.color = "green"
                    
                });
        
                } //Fin de la confirm de la Regex//
    
                else{
    
                    mdp.value = "";
                    confirmMdp.value="";
                    dslpsw.textContent = "Désolé le mot de passe ne corespond pas aux critères demandés";
            
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
        dslpsw.textContent = "Desolé une adresse pro est demandé";

    }; 

    
    

}) //Fin du bouton

