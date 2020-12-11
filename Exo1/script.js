let form = document.getElementById("form");

let result = document.getElementById("result");

form.addEventListener("submit", e => {
    e.preventDefault();
    let hours = Number(document.getElementById("hours").value);
    let minutes = Number(document.getElementById("minutes").value);
    let seconds = Number(document.getElementById("seconds").value);
    seconds++;
    if(seconds>59){
        seconds = 0;
        minutes++;
        if(minutes>59){
            minutes =0;
            hours++;
            if(hours>23){
                hours=0;
            }
        }
    }
    if(hours===0 && minutes===0 && seconds===0){
        result.innerText = "Dans une seconde il sera minuit ! Et on changera de jour!";
    } else {
        result.innerHTML = "Dans une seconde il sera " + hours + "h " + minutes + "min et " + seconds + "sec.";
    }
})