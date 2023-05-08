const express = require('express');
const app = express();

const cors = require('cors');
const  mysql = require('mysql2');
const bodyparser = require("body-parser");
const path = require('path');
const { MongoClient, ServerApiVersion, ObjectID } = require('mongodb');
const { query } = require('express');
const uri = "mongodb+srv://Baptiste:crapulo2001@cluster0.zf7ze.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
// const jwt = require('jsonwebtoken');
const fs = require('fs');

var corsOptions = {
    origin: '*',
    optionsSuccessStatus: 200 
}

app.use(cors(corsOptions));

app.use(bodyparser.json()); 
app.use(bodyparser.urlencoded({
    extended: true
}));

const secret = 'lqokf7jioqjfjfoidhfu52hadhbaidubuihgj0kehjkhgxjkqn9hfjkhj';


app.use('/', express.static('Front'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/Front/home.html');
});


app.get('/node/transfertAutorisation',(req,res)=>{

    let reponse;

    client.connect(async err => {
        try {
          const database = client.db("BigOne");
          const enAttente = database.collection("enAttente");
          const confirm = database.collection("confirm");
      
          const search = await enAttente.find({}).toArray();
          if (search.length === 0) {
            res.end("Il n'y a aucune demande");
            return;
          }
      
          const transfert = await confirm.insertMany(search);
          const detruire = await enAttente.deleteMany({});
          res.end("Autorisation accordée");
        } catch (error) {
          res.end("Une erreur s'est produite");
        } finally {
          await client.close();
        }
    });
    
})


app.get('/node/download',(req ,res)=>{

    res.end("https://goo.gl/ZAmJ11");
})

const redirectSearch = require('./functionserver/productionServer.js')
const verifyToken = require('./functionserver/verifyToken.js')


// app.post('/createToken',(req,res)=>{

//     client.connect(err =>{
//         async function find(){
//             try {

//                 const database = client.db("BigOne");
//                 const collection = database.collection("confirm");
//                 const query = req.body;
//                 const result = await collection.findOne(query);

//                 if(result === null){
//                     res.status(401).json({ message: 'Invalid credentials' });
//                 }else{
//                     const token = jwt.sign({"admin": false}, secret, { expiresIn: '1h' });
//                     res.json({ access_token: token });
//                 }

//             }
//             finally{
//                 await client.close(); 
//             }}
//             find().catch();  
//     }); 

// })


app.post('/node/login', (req, res) => {


    client.connect(err =>{
        async function find(){
            try {

                const database = client.db("BigOne");
                const collection = database.collection("confirm");
                const query = req.body;
                const result = await collection.findOne(query);

                if(result === null){

                    res.end("false");
                }
                if(result !== null && result._id !='633dfd0c865648ad231304bf'){

                    res.end(`${redirectSearch.redirectSearch}`);
                }

                if(result !== null && result._id == '633dfd0c865648ad231304bf'){

                    res.end(`${redirectSearch.redirectAdmin}`);

                }
            }
            finally{
                await client.close(); 
            }}
            find().catch();  
    }); 
    
});

 
app.post('/node/sub',(req,res)=>{
    
    client.connect(err => {

        async function run() {
            try {
              const database = client.db('BigOne');
              const movies = database.collection('confirm');

              const now = new Date();
              const date = now.toLocaleDateString();
              const time = now.toLocaleTimeString();

              const query = req.body;

              query["date"] = `${date} à ${time}`;
            //   console.log(query); 
              await movies.insertOne(query);
            //   console.log(movie);
            } finally {
              // Ensures that the client will close when you finish/error
              await client.close(); 
            }
          }
          run().catch(console.dir);
    });

    res.end();
    
});

const compareNombre = require('./functionserver/nombre.js');

app.post('/rechercheProfil',(req,res)=>{

    client.connect(err => {

        async function run() {
            try {
              const database = client.db('BigOne');
              const log = database.collection('log');
              
              const now = new Date();
              const date = now.toLocaleDateString();
              const time = now.toLocaleTimeString();

              let query = req.body;
              query["date"] = `${date} à ${time}`;

            //   console.log(query);

              await log.insertOne(query);

            } finally {
              // Ensures that the client will close when you finish/error
              await client.close(); 
            }
          }
          run().catch(console.dir);
    });

    let statut = req.body.statut;
    let profil = req.body.profil;
    let region = req.body.region;
    let famille = req.body.famille;
    let formation = req.body.formation;
    let domaine = req.body.domaine;
    let experience = req.body.experience;
    let age = req.body.age;

    let plusGrandAge = compareNombre.plusGrandNombre(age);
    let plusPetitAge = compareNombre.plusPetitNombre(age);

    const { host,user,database,databaseTable } = require('./Front/production/identifiantBdd.js');

    let requeteSql;

    requeteSql = `SELECT * FROM ${databaseTable} WHERE Statut LIKE "%${statut}%"
    AND Type_de_profil LIKE "${profil}%" 
    AND Regions_de_residence_cibles LIKE "%${region}%" 
    AND Famille_de_profil_SAP LIKE "${famille}%"
    AND Domaine_SAP LIKE "${domaine}%"`


    if(experience.includes("Tous Niveaux")){
        
    }else{
        for(let iterationExperience = 0 ; iterationExperience<experience.length ; iterationExperience++){

            iterationExperience == 0 ? requeteSql += `\n    AND (Experience_SAP LIKE "%${experience[iterationExperience]}%"` : requeteSql += `\n    OR Experience_SAP LIKE "%${experience[iterationExperience]}%"`;
    
        }
        requeteSql += ')';
    }

    formation == 'Bac+4/5'? requeteSql += `AND (Formation_initiale LIKE "%${formation}%" OR Formation_initiale LIKE "%Bac+5%")`: requeteSql;

    

    requeteBdd();

    function requeteBdd(){

        const connection = mysql.createConnection({
            host: host,
            user: user,
            password: 'Crapulo2001*',
            database: database
        });
    
        connection.query(
            
            
            requeteSql,
            function(err, results, fields) {

                for(let i =0;i<results.length;i++){

                    if(results[i].Annee_de_naissance){

                        let tableauAnnee = results[i].Annee_de_naissance.split('-');
                        let plusPetiteAnnee = compareNombre.plusPetitNombre(tableauAnnee)
                        let plusGrandeAnnee = compareNombre.plusGrandNombre(tableauAnnee);
                        const currentYear = new Date().getFullYear();
                        let ageMax = currentYear - plusPetiteAnnee;
                        let ageMin = currentYear - plusGrandeAnnee;
    
                        if(ageMin>plusPetitAge && ageMax<plusGrandAge){
                            results[i].Annee_de_naissance = `Entre ${ageMin} et ${ageMax} ans`;
                        }else{
                            results[i].Annee_de_naissance = null;
                        }
                    }
 
                }

                let resultFinale = results.filter( el => el.Annee_de_naissance != null);

                if(famille === "Logistique"){

                    let resultFinaleLogistique = resultFinale.filter(el => el.Famille_de_profil_SAP == "Logistique")
                    let resultpointdInterogationLogistique = resultFinale.filter(el => el.Famille_de_profil_SAP == "Logistique?")

                    let fusionReponse = [...resultFinaleLogistique,...resultpointdInterogationLogistique];

                    reponseRecherche = JSON.stringify(fusionReponse);

                }else if(famille === "Finance"){

                    let resultFinaleFinance = resultFinale.filter(el => el.Famille_de_profil_SAP == "Finance")
                    let resultpointdInterogationFinance = resultFinale.filter(el => el.Famille_de_profil_SAP == "Finance?")

                    let fusionReponse = [...resultFinaleFinance,...resultpointdInterogationFinance];

                    reponseRecherche = JSON.stringify(fusionReponse);


                }else if(famille === "CRM"){

                    let resultFinaleCRM = resultFinale.filter(el => el.Famille_de_profil_SAP == "CRM")
                    let resultpointdInterogationCRM = resultFinale.filter(el => el.Famille_de_profil_SAP == "CRM?")

                    let fusionReponse = [...resultFinaleCRM,...resultpointdInterogationCRM];

                    reponseRecherche = JSON.stringify(fusionReponse);
                }
                else{
                    reponseRecherche = JSON.stringify(resultFinale);
                }

                setTimeout(envoi,1);
            }
        )
            
    
        function envoi(){
            res.end(reponseRecherche);
        }
    }

})



app.listen(5600,() => {
    console.clear();
    console.log('Server app listening on port 5600');
});


