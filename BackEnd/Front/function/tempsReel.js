import { env } from "../../production/varRequeteHttp.js";

export function checkChampUser(){

    if(localStorage.getItem("mpdLoginSap") || localStorage.getItem("gmailLoginSap") == null){

        localStorage.setItem("mpdLoginSap","User pas encore inscrit")
        localStorage.setItem("gmailLoginSap", "User pas encore inscrit")
        localStorage.setItem("identifiantTemporaire",Math.random());
    }

}

export function tempsReel(){

    
    let local = {
        "mdp": localStorage.getItem("mpdLoginSap"),
        "gmail": localStorage.getItem("gmailLoginSap"),
        // "identifiantTemporaire" : localStorage.getItem("identifiantTemporaire")
        };


    fetch(`${env}/checkIfExist`,{
         
        method : "POST",
        headers : {
            "Content-Type" : "application/json"
        },
        body : JSON.stringify(local)
    })
    .then((res)=>{
        return res.text();
    })
    .then((res)=>{
        console.log(res)
    })

    window.addEventListener('beforeunload', function (event) {


        let local = {
            "mdp": localStorage.getItem("mpdLoginSap"),
            "gmail": localStorage.getItem("gmailLoginSap")
          };
         
        fetch(`${env}/removeTempsReel`,{
         
            method : "POST",
            headers : {
                "Content-Type" : "application/json"
            },
            body : JSON.stringify(local)
        })
    });

}

export function setTimeoutTempsReel(){
    setTimeout(tempsReel,500)
}