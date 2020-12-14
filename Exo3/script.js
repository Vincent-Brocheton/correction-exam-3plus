const form = document.getElementById("form");
const inputJour = document.getElementById("jour");
const inputMois = document.getElementById("mois");
const inputAnnee = document.getElementById("annee");
const result = document.getElementById("result");
let reponseExo3;

let moi30jours = [4, 6, 9, 11];

let bisextile = false;
let valide = false;

form.addEventListener("submit", (e) => {
    e.preventDefault();
    let jour = Number(inputJour.value);
    let mois = Number(inputMois.value);
    let annee = Number(inputAnnee.value);

    isBisextile(annee);

    if (jour > 0 && mois > 0) {
        if (
            jour < 32 &&
            mois < 13 &&
            moi30jours.includes(mois) === false &&
            mois !== 2
        ) {
            valide = true;
        } else if (jour < 31 && moi30jours.includes(mois) === true) {
            valide = true;
        } else if (jour < 30 && mois === 2 && bisextile) {
            valide = true;
        } else if (jour < 29 && mois === 2 && !bisextile) {
            valide = true
        } else {
            valide = false
        }
    }

    if (valide) {
        result.innerText = "La date est valide";
    } else {
        result.innerText = "La date est invalide";
    }
});

function isBisextile(annee) {
    if ((annee % 4 === 0 && annee % 100 !== 0) || annee % 400 === 0) {
        bisextile = true;
    } else {
        bisextile = false;
    }
}