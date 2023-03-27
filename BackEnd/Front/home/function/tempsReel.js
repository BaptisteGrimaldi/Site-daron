

// export function checkChampUser(){

//     if(localStorage.getItem("mpdLoginSap") || localStorage.getItem("gmailLoginSap") == null){

//         localStorage.setItem("mpdLoginSap","User pas encore inscrit")
//         localStorage.setItem("gmailLoginSap", "User pas encore inscrit")
//         console.log("check");
//     }

// }

export function tempsReel(){

    let local = {
        "mdp": localStorage.getItem("mpdLoginSap"),
        "gmail": localStorage.getItem("gmailLoginSap")
        };

        console.log("fetch")

         
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

}

export function setTimeoutTempsReel(){
    setTimeout(tempsReel,500)
}