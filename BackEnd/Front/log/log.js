
const bouton = document.getElementById("btn");

const mail = document.getElementById("mail");
const mdp = document.getElementById("mdp");
const reponseServer = document.getElementById("reponseServer");

let local = {
   "mdp": localStorage.getItem("mpdLoginSap"),
   "gmail": localStorage.getItem("gmailLoginSap")
 };

 fetch("http://127.0.0.1:5600/node/login",{

 method : "POST",
 headers : {
     "Content-Type" : "application/json"
 },
 body : JSON.stringify(local)
})
.then((res)=>{
return res.text();

})
.then((res)=>{

   if(res == "true"){
      window.location.assign("http://127.0.0.1:5500/BackEnd/Front/rechercheProfil/search.html");
   }

})


let formu ={}; 

bouton.addEventListener("click",()=>{


 formu ={"mdp":mdp.value,"gmail":mail.value};
 localStorage.setItem('mpdLoginSap', `${mdp.value}`);
 localStorage.setItem('gmailLoginSap', `${mail.value}`);

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
         window.location.assign("http://127.0.0.1:5500/BackEnd/Front/rechercheProfil/search.html");
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


