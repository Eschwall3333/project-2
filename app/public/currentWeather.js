$(document).ready(function () {
  //ON-CLICK EVENT FOR SEARCH BUTTON//
  $("#search-button").click(function () {

    event.preventDefault();

    var userState = $("").val();
    var userCity = $("").val();

        // //MAPQUEST API FULL CALL BEGINS//
        $.ajax({
          url: "api.openweathermap.org/data/2.5/weather?q=" + userCity + "," + userState + appId,
          method: "GET"
        })

          .then(function (response) {
            console.log("weatherType", response);
            console.log("weatherDesc", response);
            if (response.searchResults) {
              for (var i = 0; i < response.searchResults.length; i++) {
                //For Loop grabs the weather type, weathe description, temp, humidity and windspeed, then appends to each row//
                let weatherType = response.searchResults[i].weather.main;
                let weatherDesc = response.searchResults[i].weather.description;
                let temp = response.searchResults[i].main.temp;
                let humidity = response.searchResults[i].main.humidity;
                let windSpeed = response.searchResults[i].wind.speed;
                $('#row' + (i + 1) + '>.weatherType')[0].append(weatherType);
                $('#row' + (i + 1) + '>.weatherDesc')[0].append(weatherDesc);
                $('#row' + (i + 1) + '>.temp')[0].append(temp);
                $('#row' + (i + 1) + '>.humidity')[0].append(humidity);
                $('#row' + (i + 1) + '>.windSpeed')[0].append(windSpeed);
                
              }
            } else {
              //console.log("successful", response.success)
              console.log("message:", response.message)
            }
        
          })


          
          $('#clear').on('click', function() {
            //alert("This clears the data");
          });
          });
      });
  
 






