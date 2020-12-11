const form=document.getElementById("form");
const fromResponse=document.getElementById("fromResponse");
const inputPrix=document.getElementById("prix");
const inputUserNumber=document.getElementById("prixUser");
const result=document.getElementById("result");
const displayChange = document.getElementById("display");

let prix = 0; 
let prixUser = 0;

form.addEventListener("submit",e=>{
    e.preventDefault();
    prix = Number(inputPrix.value);
    displayChange.style.display = "block";
})

fromResponse.addEventListener("submit",e=>{
    e.preventDefault();
    prixUser=Number(inputUserNumber.value);
    if(prix>prixUser){
        result.innerText ="Plus grand !"
    }else if(prix<prixUser){
      result.innerText ="Plus petit !"
    } else {
      result.innerHTML = "Bravo le prix est bien de " + prix + "€ ! ";
      displayChange.style.display = "none";
    }
})