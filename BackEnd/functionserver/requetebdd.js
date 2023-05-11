
const  mysql = require('mysql2');
const requeteSql = require('../server.js');

function requeteBdd(){

    const connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'Crapulo2001*',
        database: 'vivier'
    });

    connection.query(

        requeteSql,
        function(err, results, fields) {
            reponseRecherche = JSON.stringify(results);
            setTimeout(envoi,1);
        }
    )
        

    function envoi(){
        res.end(reponseRecherche);
    }
}


module.exports = requeteBdd;

