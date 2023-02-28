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




app.get('/node/admin',(req,res)=>{

    file = "admin.html";

    let option = {
        root : path.join(__dirname ,"Front/admin")
    }

    res.sendFile(file,option);

})


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
                console.log(query); 
                const result = await collection.findOne(query);
                console.log(result);
                // console.log(result._id)
                // const findResult = await collection.find({});
                // console.log(findResult); 

                if(result === null){
                    // console.log("Pas de login correspondant")
                    res.end("false");
                }
                if(result !== null && result._id !='633dfd0c865648ad231304bf'){
                    // console.log("login find!")
                    res.end("true");
                }

                if(result !== null && result._id == '633dfd0c865648ad231304bf'){

                    file = "admin.html";

                    let option = {
                        root : path.join(__dirname ,"Front/admin")
                    }
                
                    res.sendFile(file,option);

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
              const movies = database.collection('enAttente');
              console.log("mongo connect")
              const query = req.body;
              console.log(query); 
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


app.post('/rechercheProfil',(req,res)=>{

    console.log(req.body)

    let reponseRecherche;
    let requeteSql;

    let statut = req.body.statut;
    let profil = req.body.profil;
    let region = req.body.region;
    let famille = req.body.famille;
    let formation = req.body.formation;
    let domaine = req.body.domaine;
    let experience = req.body.experience;
    let age = req.body.age;

    let initialValue = '';

    const sumWithInitial = experience.reduce(
        (accumulator, currentValue) => accumulator + ` ${currentValue}`,
        initialValue
      );

    console.log(sumWithInitial);

    // let test = "\n    AND";

    // requeteSql = `SELECT * FROM mytable WHERE Statut LIKE "${statut}%"
    // AND Type_de_profil LIKE "${profil}%" 
    // AND Regions_de_residence_cibles LIKE "${region}%" 
    // AND Famille_de_profil_SAP LIKE "${famille}%"
    // AND (Formation_initiale LIKE "${formation}%" OR Formation_initiale LIKE "Bac+5%")
    // AND Domaine_SAP LIKE "${domaine}%"`


    if(formation == 'Bac+4/5'){
        requeteSql = `SELECT * FROM mytable WHERE Statut LIKE "${statut}%"
        AND Type_de_profil LIKE "${profil}%" 
        AND Regions_de_residence_cibles LIKE "${region}%" 
        AND Famille_de_profil_SAP LIKE "${famille}%"
        AND (Formation_initiale LIKE "${formation}%" OR Formation_initiale LIKE "Bac+5%")
        AND Domaine_SAP LIKE "${domaine}%"`
        requeteBdd();
        
    }else{

        requeteSql = `SELECT * FROM mytable WHERE Statut LIKE "${statut}%"
        AND Type_de_profil LIKE "${profil}%" 
        AND Regions_de_residence_cibles LIKE "${region}%" 
        AND Famille_de_profil_SAP LIKE "${famille}%"
        AND Domaine_SAP LIKE "${domaine}%"`
        requeteBdd();
    }


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



})

  
app.listen(5600,() => {
    console.log('Server app listening on port ');
});
