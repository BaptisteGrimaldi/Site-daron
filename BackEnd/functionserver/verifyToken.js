
const verifyToken = (req, res, next) => {
    // Récupération du jeton d'identification dans l'en-tête Authorization
    const authHeader = req.headers.authorization;
    const token = authHeader && authHeader.split(' ')[1];
    
    // Vérification de la présence du jeton d'identification
    if (!token) {

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
    
                        const token = jwt.sign({ id: user.id, username: user.username }, secret, { expiresIn: '1h' });
                        res.json({ access_token: token });

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
    //   return res.status(401).sendFile(path.join(__dirname, 'login.html'));
    }
  
    // Vérification du jeton d'identification
    jwt.verify(token, secret, (err, decodedToken) => {
      if (err) {
        return res.status(401).sendFile(path.join(__dirname, 'login.html'));
      }
      
      // Jeton d'identification valide, on continue
      req.user = decodedToken;
      next();
    });
  };

module.exports = verifyToken;