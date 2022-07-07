// from open weather api key bb9820e3d7aab8059f144ee6dd8eca00

// https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key} 
// example 
// https://api.openweathermap.org/data/2.5/onecall?lat=33.44&lon=-94.04&exclude=hourly,daily&appid={API key} 
var city = "San diego"
var weatherApiCity = "https://api.openweathermap.org/data/2.5/weather?q="+ city +"&units=imperial&appid=bb9820e3d7aab8059f144ee6dd8eca00"
var citiesSearched = document.querySelector("#selected-cities")
var daily1 = document.querySelector("#day1") 
var daily2 = document.querySelector("#day2") 
var daily3 = document.querySelector("#day3") 
var daily4 = document.querySelector("#day4") 
var daily5 = document.querySelector("#day5") 
var todayTemp = document.querySelector("#tempContainer")
var todayWind = document.querySelector("#windContainer") 
var todayHumidity = document.querySelector("#humidityContainer")
var todayFeelsLike = document.querySelector("#feelsLikeContainer")
var currentCity = document.querySelector("#current-city")
var cityName1 =  document.querySelector("#cityName")
// add #selected-cities as var 

fetch(weatherApiCity)
    .then (function(response) {
        if(response.ok) {
           return response.json() 
        }
    })
    .then(function(data){
        // console.log(data.coord) 
        var oneCallApi = "https://api.openweathermap.org/data/2.5/onecall?lat="+ data.coord.lat + "&lon=" + data.coord.lon +"&units=imperial&appid=bb9820e3d7aab8059f144ee6dd8eca00"
        fetch(oneCallApi)
            .then(response => response.json())
            .then(function (onecallData) {
                // console.log(onecallData)
                // handle everything to showcase from this perspective within the callback function line 26
                // pass onecallData as a parameter to a diff function to make it cleaner
                handleFrontend(city, onecallData)
            })
    })
    

function handleFrontend(city, dataObj) {
    // console.log(city) 
    // console.log(dataObj) 
    // console.log(dataObj.current.uvi) 
    todayTemp.textContent = "temperature: " + dataObj.current.temp + "°F"
    todayWind.textContent = "wind speed: " + dataObj.current.wind_speed +"mph"
    todayHumidity.textContent = "humidity: " + dataObj.current.humidity + "%"
    todayFeelsLike.textContent = "Feels like: " + dataObj.current.feels_like + "°F"
    currentCity.textContent = "Weather for: " + city 
    cityName1.textContent =  "5 day forecast for: " + city
    console.log(dataObj.daily[3].temp.day)
    // all smooshed together on page 
    daily1.textContent = "High Temp: " + dataObj.daily[1].temp.max + "°F" + "Low Temp: " + dataObj.daily[1].temp.min + "°F" + "wind speed: "+ dataObj.daily[1].wind_speed + "mph" + "humidity: " + dataObj.daily[1].humidity + "%"
    daily2.textContent = "High Temp: " + dataObj.daily[2].temp.max + "°F" + "Low Temp: " + dataObj.daily[2].temp.min + "°F" + "wind speed: "+ dataObj.daily[2].wind_speed + "mph" + "humidity: " + dataObj.daily[2].humidity + "%"
    daily3.textContent = "High Temp: " + dataObj.daily[3].temp.max + "°F" + "Low Temp: " + dataObj.daily[3].temp.min + "°F" + "wind speed: "+ dataObj.daily[3].wind_speed + "mph" + "humidity: " + dataObj.daily[3].humidity + "%"
    daily4.textContent = "High Temp: " + dataObj.daily[4].temp.max + "°F" + "Low Temp: " + dataObj.daily[4].temp.min + "°F" + "wind speed: "+ dataObj.daily[4].wind_speed + "mph" + "humidity: " + dataObj.daily[4].humidity + "%"
    daily5.textContent = "High Temp: " + dataObj.daily[5].temp.max + "°F" + "Low Temp: " + dataObj.daily[5].temp.min + "°F" + "wind speed: "+ dataObj.daily[5].wind_speed + "mph" + "humidity: " + dataObj.daily[5].humidity + "%"
}
    


// need to make button functional\is submit() easier than below
// from.submit() 


// var button = select("#submit-btn"); 
// button.mousePressed(weatherClick); 
// input = select("#city") 
// weatherClick()
// var weatherApiCity = "https://api.openweathermap.org/data/2.5/weather?q="+ city +"&units=imperial&appid=bb9820e3d7aab8059f144ee6dd8eca00"