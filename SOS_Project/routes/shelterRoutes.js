// //HILFD API FULL CALL BEGINS//
        
	$.ajax({
          url: "https://services1.arcgis.com/Hp6G80Pky0om7QvQ/arcgis/rest/services/National_Shelter_System_Facilities/FeatureServer/0/query?where=ZIP%20like%20'%2530008%25'&outFields=NAME,ADDRESS,ADDRESS2,CITY,STATE,ZIP,TYPE,STATUS,POPULATION,COUNTY,COUNTRY,LATITUDE,LONGITUDE,WEBSITE&outSR=4326&f=json",
          method: "GET"
        })

          .then(function (response) {
            console.log("NAME", response);
            console.log("ADDRESS", response);
            console.log("ADDRESS2", response);
            console.log("CITY", response);
            console.log("STATE", response);
            console.log("ZIP", response);
            console.log("TYPE", response);
            console.log("STATUS", response);
            console.log("LATITUDE", response);
            console.log("LONGITUDE", response);
            if (response.searchResults) {
              for (var i = 0; i < response.searchResults.length; i++) {
                //For Loop grabs the Name and Address and appends to each row//
                let name = response.searchResults[i].attributes.NAME;
                let address = response.searchResults[i].attributes.ADDRESS;
                let address = response.searchResults[i].attributes.ADDRESS2;
                let address = response.searchResults[i].attributes.CITY;
                let address = response.searchResults[i].attributes.STATE;
                let address = response.searchResults[i].attributes.ZIP;
                let address = response.searchResults[i].attributes.TYPE;
                let address = response.searchResults[i].attributes.STATUS;
                let address = response.searchResults[i].attributes.LATITUDE;
                let address = response.searchResults[i].attributes.LONGITUDE;
                    $('#row' + (i + 1) + '>.name')[0].append(NAME);
                    $('#row' + (i + 1) + '>.address')[0].append(ADDRESS);
                    $('#row' + (i + 1) + '>.address')[0].append(ADDRESS2);
                    $('#row' + (i + 1) + '>.address')[0].append(CITY);
                    $('#row' + (i + 1) + '>.address')[0].append(STATE);
                    $('#row' + (i + 1) + '>.address')[0].append(ZIP);
                    $('#row' + (i + 1) + '>.address')[0].append(TYPE);
                    $('#row' + (i + 1) + '>.address')[0].append(STATUS);
                    $('#row' + (i + 1) + '>.address')[0].append(LATITUDE);
                    $('#row' + (i + 1) + '>.address')[0].append(LONGITUDE);
             
              }
            } else {
              //console.log below that will show results based off of success within api results from HILFD if enabled//
              console.log("message:", response.message)
            }
        });
        //HILFD API FULL CALL ENDS