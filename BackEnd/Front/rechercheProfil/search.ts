const mysql = require('mysql2');

let btnLancerLaRecherche = document.getElementById("lancerLaRecherche");

if(btnLancerLaRecherche){
    btnLancerLaRecherche.addEventListener("click",()=>{

        const connection = mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: 'Crapulo2001*',
            database: 'mytable'
            
          });
    
    
    
    })
}

