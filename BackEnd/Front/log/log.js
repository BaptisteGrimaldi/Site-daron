
// import { setTimeoutTempsReel } from "../function/tempsReel.js";
import { env } from "../production/varRequeteHttp.js";



const bouton = document.getElementById("btn");

const mail = document.getElementById("mail");
const mdp = document.getElementById("mdp");
const reponseServer = document.getElementById("reponseServer");



// setTimeoutTempsReel();


// let local = {
//    "mdp": localStorage.getItem("mpdLoginSap"),
//    "gmail": localStorage.getItem("gmailLoginSap")
//  };

//  fetch("http://127.0.0.1:5600/node/login",{

//  method : "POST",
//  headers : {
//      "Content-Type" : "application/json"
//  },
//  body : JSON.stringify(local)
// })
// .then((res)=>{
// return res.text();

// })
// .then((res)=>{

//    if(res == "true"){
//       window.location.assign("http://127.0.0.1:5500/BackEnd/Front/rechercheProfil/search.html");
//    }

// })


let formu ={}; 

bouton.addEventListener("click",()=>{


 formu ={"mdp":mdp.value,"gmail":mail.value};

   try{
      localStorage.setItem('mpdLoginSap', `${mdp.value}`);
      localStorage.setItem('gmailLoginSap', `${mail.value}`);
   }catch{
      console.log("tentative localstorage");
   }



 fetch(`${env}/node/login`,{

    method : "POST",
    headers : {
        "Content-Type" : "application/json"  //Authorize cors coté front et server
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
         let p = document.getElementById("reponseServer");
         p.textContent = "Login incorrect";
         p.style.color = "red"; 
         reponseServer.style.visibility= "visible";
      }else{
         window.location.assign(res);
      }

   })



}) //Fin bouton


