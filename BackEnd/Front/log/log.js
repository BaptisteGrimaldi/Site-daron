
const bouton = document.getElementById("btn");

const email = document.getElementById("email");
const mdp = document.getElementById("mdp");
const reponseServer = document.getElementById("reponseServer");

let formu ={}; 

bouton.addEventListener("click",()=>{

 formu ={"Email":email.value ,"mdp":mdp.value};
 

 fetch("http://127.0.0.1:5600/node/login",{

    method : "POST",
    headers : {
        "Content-Type" : "application/json"
    },
    body : JSON.stringify(formu)
 })
 .then((res)=>{

   email.value = "";
   mdp.value = "";
   return res.text();
   
 })
   .then((res)=>{

      if(res == "false"){
         p = document.getElementById("reponseServer");
         p.textContent = "Login incorrect";
         p.style.color = "red"; 
         reponseServer.style.visibility= "visible";
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
      if(res =="admin"){
         
         fetch('http://127.0.0.1:5600/node/admin')
         .then((res)=>{
            return res.text();

         })
         .then((res)=>{
            document.write(res);
         })
      }




      // else{
         
      //    document.write(res);
      // }
      
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


