let countdownDate = new Date(2023, 4, 15, 8, 0, 0);

let daysElem = document.querySelector("#days span");
let hoursElem = document.querySelector("#hours span");
let minutesElem = document.querySelector("#minutes span");
let secondsElem = document.querySelector("#seconds span");

let daysText = document.querySelector("#days");
let hoursText = document.querySelector("#hours");
let minuteText = document.querySelector("#minutes");
let secondText = document.querySelector("#seconds");


//#region ConversionDate

    function Day(conversionDate)
    {
        daysElem.textContent =  Math.floor(conversionDate / (1000 * 3600 * 24));
    }
    function Hours(conversionDate)
    {
        hoursElem.textContent = Math.floor((conversionDate % (1000 * 3600 * 24)) / (1000 * 60 * 60));
    }
    function Minute(conversionDate)
    {
        minutesElem.textContent = Math.floor((conversionDate % (1000 * 3600)) / (1000 * 60));
    }
    function Seconds(conversionDate)
    {
        secondsElem.textContent = Math.floor((conversionDate % (1000 * 60)) / 1000);
    }

//#endregion

function StartCountdown()
{   
    let currentDate = new Date();
    let conversionDate = countdownDate - currentDate

    Day(conversionDate);
    Hours(conversionDate);
    Minute(conversionDate);
    Seconds(conversionDate);
    
    if(conversionDate <= 1)
    {
        formaTimeStr();
        EnCountDown();
    }
}

function formaTimeStr()
{
    daysText.lastChild.textContent = "Jour";
    hoursText.lastChild.textContent = "heure";
    minuteText.lastChild.textContent = "Minute";
    secondText.lastChild.textContent = "Seconde";
}

function EnCountDown()
{
    const jsConfetti = new JSConfetti()
    jsConfetti.addConfetti()
    clearInterval(myInterval);

}

let myInterval = setInterval(() =>{
        StartCountdown();
} , 1000);


