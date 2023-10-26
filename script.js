const myKey = "addd7a1fef374d23b3513f2f5ec83c71";

async function getIP(){
    const res = await fetch (`https://ipgeolocation.abstractapi.com/v1/?api_key=${myKey}`);
    const result = await res.json();
    getInfo(result.city);
}

getIP();

const api = {
    endpoint: "https://api.openweathermap.org/data/2.5/",
    key: "e4bf831c5d1b7898383c04a744ab0119"
}

const input = document.querySelector("#input");
input.addEventListener("keypress", enter);

function enter(e) {
    if (e.keyCode === 13) {
        getInfo(input.value);
    }
}

async function getInfo (city) {
    const res = await fetch(`${api.endpoint}weather?q=${city}&units=metric&appID=${api.key}`);
    const result = await res.json();
    displayResult(result);
}

function displayResult(result){
    let city = document.querySelector("#city");
    city.textContent = `${result.name}, ${result.sys.country}`;

    getOurDate();

    let temp = document.querySelector("#temperature");
    temp.innerHTML = `${Math.round(result.main.temp)}<span>°</span>`;

    let feelsLike = document.querySelector("#feelsLike");
    feelsLike.innerHTML = `<span>Feels like: </span>${Math.round(result.main.feels_like)}<span>°</span>`;

    let icon = document.querySelector("#icon");
    icon.innerHTML = `<img src="https://openweathermap.org/img/wn/${result.weather[0]['icon']}@2x.png">`

    let cond = document.querySelector("#conditions");
    cond.textContent = `${result.weather[0].main}`

    let minmax = document.querySelector("#variation");
    minmax.innerHTML = `<span>Min: </span>${Math.round(result.main.temp_min)}<span>° </span><span>Max: </span>${Math.round(result.main.temp_max)}<span>°</span>`
}

function getOurDate(){
    const myDate = new Date();

    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let day = days[myDate.getDay()]

    let date = myDate.getDate();

    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let month = months[myDate.getMonth()];

    let year = myDate.getFullYear();

    let dateOnScreen = document.querySelector("#date");
    dateOnScreen.textContent = `${day}` + " " + `${date}` + " " + `${month}` + " " + `${year}`;


}



