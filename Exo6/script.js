let tab1 = [4, 8, 7, 12];
let tab2 = [3, 6];

let schtroumph = 0;
let passerelle = 0;

for (let i = 0; i < tab1.length; i++) {
    for (let j = 0; j < tab2.length; j++) {
        passerelle = tab1[i] * tab2[j];
        schtroumph = schtroumph + passerelle;
    }
}

document.getElementById("result").innerHTML = "Le schtroumph est de : " + schtroumph;