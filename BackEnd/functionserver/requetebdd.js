
const  mysql = require('mysql2');
const requeteSql = require('../server.js');
require('dotenv').config();

function requeteBdd(){

    const connection = mysql.createConnection({
        host: process.env.host,
        user: process.env.user,
        password: process.env.password,
        database: process.env.database
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

