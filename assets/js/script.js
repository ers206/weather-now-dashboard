// from open weather api key bb9820e3d7aab8059f144ee6dd8eca00

// https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key} 
// example 
// https://api.openweathermap.org/data/2.5/onecall?lat=33.44&lon=-94.04&exclude=hourly,daily&appid={API key} 
var city = "Houston"
var weatherApiCity = "https://api.openweathermap.org/data/2.5/weather?q="+ city +"&units=imperial&appid=bb9820e3d7aab8059f144ee6dd8eca00"
var citiesSearched = document.querySelector("#selected-cities")
// var dailyEl = document.querySelector("#5day")
var todayTemp = document.querySelector("#tempContainer")
// var todayWind = document.querySelector("#windContainer")
// var todayHumidity = document.querySelector("#humidityContainer")



fetch(weatherApiCity)
    .then (function(response) {
        if(response.ok) {
           return response.json() 
        }
    })
    .then(function(data){
        console.log(data.coord)
        var oneCallApi = "https://api.openweathermap.org/data/2.5/onecall?lat="+ data.coord.lat + "&lon=" + data.coord.lon +"&units=imperial&appid=bb9820e3d7aab8059f144ee6dd8eca00"
        fetch(oneCallApi)
            .then(response => response.json())
            .then(function (onecallData) {
                // console.log(onecallData)
                // handle everything to showcase from this perspective
                //within the callback function that starts in line 27 through 33
                // alternatively you can pass onecallData as a parameter to a diff function to make it cleaner
                handleFrontend(city, onecallData)
            })
    })

function handleFrontend(city, dataObj) {
    console.log(city)
    console.log(dataObj)
    console.log(dataObj.current.uvi)
    todayTemp.textContent = "temperature: " + dataObj.current.temp + "°F"

    console.log(dataObj.daily[3].temp.day)
}