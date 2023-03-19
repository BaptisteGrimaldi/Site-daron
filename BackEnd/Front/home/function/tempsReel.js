
export function tempsReel(){

    let local = {
        "mdp": localStorage.getItem("mpdLoginSap"),
        "gmail": localStorage.getItem("gmailLoginSap")
        };
         
    fetch("http://127.0.0.1:5600/checkIfExist",{
         
        method : "POST",
        headers : {
            "Content-Type" : "application/json"
        },
        body : JSON.stringify(local)
    })

    window.addEventListener('beforeunload', function (event) {
    
        let local = {
            "mdp": localStorage.getItem("mpdLoginSap"),
            "gmail": localStorage.getItem("gmailLoginSap")
          };
         
        fetch("http://127.0.0.1:5600/removeTempsReel",{
         
            method : "POST",
            headers : {
                "Content-Type" : "application/json"
            },
            body : JSON.stringify(local)
        })
    });

    console.log("lancé");

}

export function setTimeoutTempsReel(){
    setTimeout(tempsReel,500)
}