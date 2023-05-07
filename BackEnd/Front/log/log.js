

import { env } from "../production/varRequeteHttp.js";

const bouton = document.getElementById("btn");

const mail = document.getElementById("mail");
const mdp = document.getElementById("mdp");
const reponseServer = document.getElementById("reponseServer");


const oeil1 = document.getElementById("oeilVisible1");



oeil1.addEventListener("click",()=>{

    if (mdp.type === "password") {
        mdp.type = "text";
      } else {
        mdp.type = "password";
      }

})


let formu ={}; 

bouton.addEventListener("click",()=>{


 formu ={"mdp":mdp.value,"gmail":mail.value};


 fetch(`${env}/node/login`,{

    method : "POST",
    headers : {
        "Content-Type" : "application/json" 
    },
    body : JSON.stringify(formu)
 })
 .then((res)=>{
   return res.text();
   
 })
   .then((res)=>{

      if(res == "false"){
         mail.value = "";
         mdp.value = "";
         let p = document.getElementById("reponseServer");
         p.textContent = "Login incorrect";
         p.style.color = "red"; 
         reponseServer.style.visibility= "visible";
      }else{

         function createCookie(name, value, days) {
            if (days) {
              var date = new Date();
              date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
              var expires = "; expires=" + date.toGMTString();
            } else {
              var expires = "";
            }
            document.cookie = name + "=" + value + expires + "; path=/";
            
            // Vérifier si le cookie a été créé
            if (getCookie(name) === null) {
              throw new Error("Impossible de créer le cookie.");
            }
          }
          
          function getCookie(name) {
            var nameEQ = name + "=";
            var cookies = document.cookie.split(';');
            for (var i = 0; i < cookies.length; i++) {
              var cookie = cookies[i];
              while (cookie.charAt(0) == ' ') {
                cookie = cookie.substring(1, cookie.length);
              }
              if (cookie.indexOf(nameEQ) === 0) {
                return cookie.substring(nameEQ.length, cookie.length);
              }
            }
            return null;
          }
          
         
         createCookie("email",`${mail.value}`,0);

         window.location.assign(res);
      }

   })

}) //Fin bouton

// const testToken = document.getElementById("testToken");

// bouton.addEventListener("click",()=>{
//    let formu ={"mdp":mdp.value,"gmail":mail.value};
//    fetch(`${env}/createToken`,{
//       method : "POST",
//       headers : {
//           "Content-Type" : "application/json" 
//       },
//       body : JSON.stringify(formu)
//    })
//    .then((res)=>{
//       return res.json();
//    })
//    .then((res)=>{
//       console.log(res);

//       try{

//          const d = new Date();
//          d.setTime(d.getTime() + (60 * 60 * 1000));
//          const expires = "expires=" + d.toUTCString();
//          console.log(expires);
//          document.cookie = `access_token=${res.access_token};${expires};path=/`;

//       }catch{
//          console.error("cookie pas set");
//       }
//       finally{

//          let formu ={}; 

//          formu ={"mdp":mdp.value,"gmail":mail.value};


//          fetch(`${env}/node/login`,{
        
//             method : "POST",
//             headers : {
//                 "Content-Type" : "application/json" 
//             },
//             body : JSON.stringify(formu)
//          })
//          .then((res)=>{
//            mail.value = "";
//            mdp.value = "";
//            return res.text();
           
//          })
//            .then((res)=>{
        
//               if(res == "false"){
//                  let p = document.getElementById("reponseServer");
//                  p.textContent = "Login incorrect";
//                  p.style.color = "red"; 
//                  reponseServer.style.visibility= "visible";
//               }else{
//                  window.location.assign(res);
//               }
        
//            })

//       }

//    })
//    .catch((error)=>{
//       console.log('Probleme avec le token',error);
//    })
   
// })


