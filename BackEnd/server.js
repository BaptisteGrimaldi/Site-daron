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
var publi = path.join(__dirname, 'Front/home');
const fs = require('fs');



var corsOptions = {
    origin: '*',
    optionsSuccessStatus: 200 
}

app.use(bodyparser.json()); 
app.use(bodyparser.urlencoded({
    extended: true
}));

app.use('/', express.static(publi));


app.use(cors(corsOptions));

app.get('/',(req,res)=>{

    res.sendFile(path.join(publi, 'home.html'));
})

app.ws('/ws', function (ws, req) {

    console.log(`New WebSocket connection. `);
  
    ws.on('message', function (msg) {
      console.log(`Reponse message : ${msg}`);

      try{
        let test = JSON.parse(msg);
        console.log(test.userId);
      }catch{
        console.log("pas une fermeture");
      }

    });
    
    ws.on('close', function (msg) {
        console.log(msg)
      });
  });



app.get('/node/transfertAutorisation',(req,res)=>{

    client.connect(err =>{
        async function find(){
            try {

                const database = client.db("BigOne");
                const enAttente = database.collection("enAttente");
                const confirm = database.collection("confirm");

                search = await enAttente.find({}).toArray();

                transfert = await confirm.insertMany(search);

                detruire = await enAttente.deleteMany({});

            }
            finally{
                await client.close(); 
            }}
            find().catch();  
    }); 

    
    res.send('<p id="autotrue">Autorisation accordée</p>');
})


app.get('/node/download',(req ,res)=>{

    res.end("https://goo.gl/ZAmJ11");
})

app.post('/node/login', (req, res) => {

    client.connect(err =>{
        async function find(){
            try {

                const database = client.db("BigOne");
                const collection = database.collection("confirm");
                const query = req.body;
                // console.log(query); 
                const result = await collection.findOne(query);
                // console.log(result);

                if(result === null){
                    // console.log("Pas de login correspondant")
                    res.end("false");
                }
                if(result !== null && result._id !='633dfd0c865648ad231304bf'){
                    // console.log("login find!")
                    res.end("http://127.0.0.1:5500/BackEnd/Front/rechercheProfil/search.html");
                }

                if(result !== null && result._id == '633dfd0c865648ad231304bf'){

                    res.end('http://127.0.0.1:5500/BackEnd/Front/admin/admin.html');

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
              const database = client.db('liveBdd');
              const movies = database.collection('messageChat');
            //   console.log("mongo connect")
              const query = req.body;
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

    let requeteSql;

    requeteSql = `SELECT * FROM newmytable WHERE Statut LIKE "%${statut}%"
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
            host: 'localhost',
            user: 'root',
            password: 'Crapulo2001*',
            database: 'vivier'
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

app.post('/checkIfExist',(req,res)=>{



client.connect(err =>{
    async function find(){
        try {

            const database = client.db("BigOne");
            const confirmCollection = database.collection("confirm");
            const tempsReelCollection = database.collection("tempsReel");
            const query = req.body;

            const result = await confirmCollection.findOne(query);


            if(result === null){
                // console.log("Pas de login correspondant")
                res.end();
                return
            }
            if (result !== null && result._id != '633dfd0c865648ad231304bf') {
                const userMail = result.gmail;
                const count = await tempsReelCollection.countDocuments({ email: userMail });
                if (count === 0) {
                  await tempsReelCollection.insertOne({ email: userMail });
                } else {
                //   console.log('Email already present:', userMail);
                }
              }
        }
        finally{
            await client.close(); 
        }}
        find().catch();  
}); 

})

app.post('/removeTempsReel',(req,res)=>{

    client.connect(err =>{
        async function find(){
            try {
    
                const database = client.db("BigOne");
                const confirmCollection = database.collection("confirm");
                const tempsReelCollection = database.collection("tempsReel");
                const query = req.body;
    
                const result = await confirmCollection.findOne(query);
    
    
                if(result === null){
                    // console.log("Pas de mail correspondant")
                    res.end();
                    return
                }
                if (result !== null && result._id != '633dfd0c865648ad231304bf') {
                    const userMail = result.gmail;
                    const count = await tempsReelCollection.countDocuments({ email: userMail });
                    if (count === 0) {

                    } else {
                        await tempsReelCollection.deleteOne({ email: userMail });
                    }
                  }
            }
            finally{
                await client.close(); 
            }}
            find().catch();  
    }); 

})


app.listen(5600,() => {
    console.log('Server app listening on port 5600');
});


