const form = document.getElementById("form");
const inputCandidat1 = document.getElementById("candidat1");
const inputCandidat2 = document.getElementById("candidat2");
const inputCandidat3 = document.getElementById("candidat3");
const inputCandidat4 = document.getElementById("candidat4");
const result = document.getElementById("result");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (inputCandidat1.value > 50) {
    result.innerText = "Le candidat 1 est élu au premier tour";
  } else if (inputCandidat1.value < 12.5) {
    result.innerText = "Le candidat 1 ne participe pas au second tour";
  } else {
    if (inputCandidat1.value > inputCandidat2.value && inputCandidat1.value > inputCandidat3.value && inputCandidat1.value > inputCandidat4.value) {
        result.innerText = "Le candidat 1 est en ballotage favorable";
    } else {
        result.innerText = "Le candidat 1 n'est pas en ballotage favorable";
    }
  }
});