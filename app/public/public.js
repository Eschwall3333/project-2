$(document).ready(function () {
    //ON-CLICK EVENT FOR SEARCH BUTTON//
    $("#search-button").click(function () {
  
      event.preventDefault();
  
      var userCity = $("#search-city").val();
      var userState = $("#search-state")
          // //MAPQUEST API FULL CALL BEGINS//

          https://openweathermap.org/weathermap?basemap=map&cities=true&layer=precipitation&lat=33.7&lon=-84.3&zoom=8


          $.ajax({
            url: "api.openweathermap.org/data/2.5/weather?q= " + userCity + "," + userState + appId + "=",
            method: "GET"
          })
  
            .then(function (response) {
              console.log("name", response);
              console.log("address", response);
              if (response.searchResults) {
                for (var i = 0; i < response.searchResults.length; i++) {
                  //For Loop grabs the Name and Address and appends to each row//
                  let name = response.searchResults[i].name;
                  let address = response.searchResults[i].fields.address;
                  $('#row' + (i + 1) + '>.name')[0].append(name);
                  $('#row' + (i + 1) + '>.address')[0].append(address);
                  //console.log($($('#row' + (i + 1) + '>.address')[0]));
                  // put name and address on screen
                  // use jquery to grab any child witht he class of name that has a parent of
                  // $('#row'+(i+1)+'>.name')
                  // console.log('are any of us real?')
                  // console.log('my name is name is name', $('#row'+ (i+1) + '>.name')[0]);
                }
              } else {
                //console.log below that will show results based off of success within api results from Mapquest if enabled
                //console.log("successful", response.success)
                console.log("message:", response.message)
              }
          //MAPQUEST API FULL CALL ENDS//
            })
  
  
            //ONCE CALLS ARE COMPLETED AND RESULTS PRINT TO PAGE, CLEAR THE SEARCH BAR FOR THE NEXT SEARCH//
            $('#clear').on('click', function() {
              //alert("This clears the data");
            });
            });
        });
    });
   
  
  
  
  
  
  
  