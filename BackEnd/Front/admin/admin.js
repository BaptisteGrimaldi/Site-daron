
import { env } from "../../production/varRequeteHttp.js";

let reponseServer = document.getElementById("reponseServer");

let admin = document.getElementById("btnAuto");

admin.addEventListener("click",()=>{

   fetch(`${env}/node/transfertAutorisation`)
   .then((res)=>{
      return res.text();
   })
   .then((res)=>{
      reponseServer.textContent = res

      function clearMess (){
         reponseServer.textContent = "";
      }

      setTimeout(clearMess,1000)  //A check
   })

   
});