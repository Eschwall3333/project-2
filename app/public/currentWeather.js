$(document).ready(function (){
  let appId = require("./connection.js");
  let units = "imperial";
  let searchMethod;

  function getZip(searchTerm){
    if(searchTerm.length === 5 && Number.parseInt(searchTerm) + "" === searchTerm)
        searchMethod = "zip";
    else
        searchMethod = "q";
  }

  function searchWeather(searchTerm){
    getZip(searchTerm);
    fetch(`http://api.openweathermap.org/data/2.5/weather?${searchMethod}=${searchTerm}&APPID=${appId}&${units}`).then(result => {
      return result.json
    }).then(result =>{
      init(result)
    })
  }

  function init(resultFromCall){
    switch (resultFromCall.weather[0].main){
        case "clear":
            document.body.style.backgroundImage = `url("clear.jpg")`;

            break;

        case "clouds":
            document.body.style.backgroundImage = `url("cloudy.jpg")`;



            break;

        case "Rain":
        case "Mist":
        case "Drizzle":
            document.body.style.backgroundImage = `url("rain.jpg")`;

            break;
        

        case "Thunderstorm":
            document.body.style.backgroundImage = `url("stormy.jpg")`;

            break;

        case "snow":
            document.body.style.backgroundImage = `url("snow.jpg")`;


            break;


        default:
            break;

    };
      //place all image div header locations below to display weather elements
    let weatherDescHeader = document.getElementById("weatherDescHeader");
    let tempElement = document.getElementById("temperature");
    let humidityElement = document.getElementById("humidity");
    let windSpeedElement = document.getElementById("windspeed");
    let cityHead = document.getElementById("cityheader");
    let weatherIcon = document.getElementById("documentIconImg");




    weatherIcon.src = "http://openweathermap.org/img/wn/" + resultFromCall.weather[0].icon + ".png";

    let resDesc = resultFromCall.weather[0].description;
    weatherDescHeader.innertext = resDesc;
    tempElement.innerHtml = Math.floor(resultFromCall.main.temp) + "&#176";
    windSpeedElement.innerHtml = "Winds at " + Math.floor(resultFromCall.wind.speed) + " m/s";
    cityHead.innerHtml = resultFromCall.name;
    humidityElement = "Humidity levels at " + resultFromCall.main.humidity + "%";
    
  }

  document.getElementById("#searchBtn").addEventListener("click", () =>{
    let searchTerm = document.getElementById("searchInput").value;
    if (searchTerm)
        searchWeather(searchTerm);
  })

})



// $(document).ready(function () {
//   //ON-CLICK EVENT FOR SEARCH BUTTON//
//   $("#search-button").click(function () {

//     event.preventDefault();
//     var appId = require("./connection.js");
//     var userState = $("").val();
//     var userCity = $("").val();

//         // //MAPQUEST API FULL CALL BEGINS//
//         $.ajax({
//           url: "api.openweathermap.org/data/2.5/weather?q=" + userCity + "," + userState + appId,
//           method: "GET"
//         })

//           .then(function (response) {
//             console.log("weatherType", response);
//             console.log("weatherDesc", response);
//             if (response.searchResults) {
//               for (var i = 0; i < response.searchResults.length; i++) {
//                 //For Loop grabs the weather type, weathe description, temp, humidity and windspeed, then appends to each row//
//                 let weatherType = response.searchResults[i].weather.main;
//                 let weatherDesc = response.searchResults[i].weather.description;
//                 let temp = response.searchResults[i].main.temp;
//                 let humidity = response.searchResults[i].main.humidity;
//                 let windSpeed = response.searchResults[i].wind.speed;
//                 $('#row' + (i + 1) + '>.weatherType')[0].append(weatherType);
//                 $('#row' + (i + 1) + '>.weatherDesc')[0].append(weatherDesc);
//                 $('#row' + (i + 1) + '>.temp')[0].append(temp);
//                 $('#row' + (i + 1) + '>.humidity')[0].append(humidity);
//                 $('#row' + (i + 1) + '>.windSpeed')[0].append(windSpeed);
                
//               }
//             } else {
//               //console.log("successful", response.success)
//               console.log("message:", response.message)
//             }
        
//           })


          
//           $('#clear').on('click', function() {
//             //alert("This clears the data");
//           });
//           });
//       });
  
 






