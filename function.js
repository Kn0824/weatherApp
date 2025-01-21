const baseUrl = "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/";
const key = "/?key=UBRKYJ7V8CNPQA62Q2EPKJ58F";

const form = document.getElementById("searchWeather");

form.addEventListener('submit', event => {
    event.preventDefault();
    let city = document.getElementById("city").value;
    let url = baseUrl + city + key;
    fetch(url)
    .then(response => {
        return response.json(); // Parse JSON data
    })
    .then(data => {
        const conditions = data.currentConditions;
        const temp = conditions.temp;
        const feelsLike = conditions.feelslike;
        const rain = conditions.precipprob;
        const description = data.description;

        document.getElementById("temp").textContent = temp + "\u00B0C";
        document.getElementById("feels").textContent = feelsLike + "\u00B0C";
        document.getElementById("rain").textContent = rain+"%";
        document.getElementById("desc").textContent = description;

        document.getElementById("error").style = "none";
    })
    .catch(error => {
        document.getElementById("temp").textContent = "ERROR";
        document.getElementById("feels").textContent = "ERROR";
        document.getElementById("rain").textContent = "ERROR";
        document.getElementById("desc").textContent = "ERROR";

        document.getElementById("error").style.display = "block";
    });
});
