
const bouton = document.getElementById("btn");

const mail = document.getElementById("mail");
const mdp = document.getElementById("mdp");
const reponseServer = document.getElementById("reponseServer");

let formu ={}; 

bouton.addEventListener("click",()=>{

 formu ={"mdp":mdp.value,"gmail":mail.value};
 

 fetch("http://127.0.0.1:5600/node/login",{

    method : "POST",
    headers : {
        "Content-Type" : "application/json"
    },
    body : JSON.stringify(formu)
 })
 .then((res)=>{
   mail.value = "";
   mdp.value = "";
   return res.text();
   
 })
   .then((res)=>{

      if(res == "false"){
         p = document.getElementById("reponseServer");
         p.textContent = "Login incorrect";
         p.style.color = "red"; 
         reponseServer.style.visibility= "visible";
      }else{
         console.log("test");
      }
      if(res == "true"){
         p = document.getElementById("reponseServer");
         p.textContent = "Fichier excel envoyé";
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
      
      if(res != "true" && res != "false"){
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


