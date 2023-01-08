
export function generateurQuestion(){

    document.body.addEventListener("click",(e)=>{

        let check = e.target.id;
        let test = check.indexOf("q");
    
        if(test == 0){
    
            let finalCheckString = check.replace("q","");
            let finalCheckNumber = parseInt(finalCheckString);
    
            let question = document.getElementById(`q${finalCheckNumber}`);
            let reponse = document.getElementById(`rep${finalCheckNumber}`)
            let parentDefil = question.parentNode;
    
                if(reponse.style.display == "none"){
                    reponse.style.display = "block";
                    question.textContent = "-";
                    question.style.color = "black";
                    parentDefil.style.backgroundColor = "red";
                    
    
    
                }
                else{
                    reponse.style.display = "none";
                    question.textContent = "+";
                    parentDefil.style.backgroundColor = "#35d988";
                    question.style.color = "green";
                }
    
        }
    
    })

}

