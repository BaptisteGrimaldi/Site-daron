
let admin = document.getElementById("btnAuto");

admin.addEventListener("click",()=>{

   fetch('https://jerecrutesursap.com/node/transfertAutorisation')
   .then((res)=>{
      return res.text();
   })
   .then((res)=>{
      document.write(res);
   })

   
});