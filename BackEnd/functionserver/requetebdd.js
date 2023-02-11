

function requeteBdd(){


    let requeteSql = require('../BackEnd/server.js');

    const connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'Crapulo2001*',
        database: 'vivier'
    });

    connection.query(

        requeteSql,
        function(err, results, fields) {
        //   console.log(results);
            reponseRecherche = JSON.stringify(results);
            // console.log(reponseRecherche);
            setTimeout(envoi,1);
        }
    )
        

    function envoi(){
        // console.log(reponseRecherche);
        res.end(reponseRecherche);
    }
}