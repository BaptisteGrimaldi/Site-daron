
const bouton = document.getElementById("btn");

const Nom = document.getElementById("Nom");
const Prenom = document.getElementById("Prénom");
const mdp = document.getElementById("mdp");
const reponseServer = document.getElementById("reponseServer");

let formu ={}; 

bouton.addEventListener("click",()=>{

 formu ={"Nom":Nom.value ,"Prenom":Prenom.value ,"mdp":mdp.value};
 

 fetch("https://jerecrutesursap.com/node/login",{

    method : "POST",
    headers : {
        "Content-Type" : "application/json"
    },
    body : JSON.stringify(formu)
 })
 .then((res)=>{
   Nom.value = "";
   Prenom.value = "";
   mdp.value = "";
   return res.text();
   
 })
   .then((res)=>{


      if(res == "false"){
         p = document.getElementById("reponseServer");
         p.textContent = "Login incorrect";
         p.style.color = "red"; 
      }
      if(res == "true"){
         p = document.getElementById("reponseServer");
         p.textContent = "Fichier exel envoyé";
         p.style.color = "green";
         
         fetch('https://jerecrutesursap.com/node/download')
         .then((res)=>{
            return res.text(); 
         })
         .then((data)=>{
            var a = document.createElement("a");
            a.href = data;
            a.target = "_blank"; 
            a.click();
            reponseServer.style.visibility= "visible"; 
         })
   
      }

      else{
         
         document.write(res);
      }
      
   })


}) //Fin bouton


//Partie admin.js //

function adminjs (){

	admin = document.getElementById("btnAuto");

   admin.addEventListener("click",()=>{

      fetch('https://jerecrutesursap.com/node/transfertAutorisation')
      .then((res)=>{
         return res.text();
      })
      .then((res)=>{
         document.write(res);
      })
      
   });


   
}


