
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
   })

   
});