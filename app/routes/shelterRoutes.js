
// //HILFD API FULL CALL BEGINS//
        
	$.ajax({
          url: "https://services1.arcgis.com/Hp6G80Pky0om7QvQ/arcgis/rest/services/National_Shelter_System_Facilities/FeatureServer/0/query?where=ZIP%20like%20'%2530008%25'&outFields=NAME,ADDRESS,CITY,STATE,ZIP,TYPE,STATUS,POPULATION,COUNTY,COUNTRY,LATITUDE,LONGITUDE,WEBSITE&outSR=4326&f=json",
          method: "GET"
        })

          .then(function (response) {
            console.log("NAME", response);
            console.log("ADDRESS", response);
            console.log("CITY", response);
            console.log("STATE", response);
            console.log("ZIP", response);
            console.log("TYPE", response);
            console.log("STATUS", response);
            console.log("LATITUDE", response);
            console.log("LONGITUDE", response);
            if (response.searchResults) {
              for (var i = 0; i < response.searchResults.length; i++) {
                //For Loop grabs the shelter data and appends to each row//
                let NAME = response.searchResults[i].attributes.NAME;
                let ADDRESS = response.searchResults[i].attributes.ADDRESS;
                let ADDRESS2 = response.searchResults[i].attributes.ADDRESS2;
                let CITY = response.searchResults[i].attributes.CITY;
                let STATE = response.searchResults[i].attributes.STATE;
                let ZIP = response.searchResults[i].attributes.ZIP;
                let TYPE = response.searchResults[i].attributes.TYPE;
                let STATUS = response.searchResults[i].attributes.STATUS;
                let LATITUDE = response.searchResults[i].attributes.LATITUDE;
                let LONGITUDE = response.searchResults[i].attributes.LONGITUDE;
                    $('#row' + (i + 1) + '>.name')[0].append(NAME);
                    $('#row' + (i + 1) + '>.address')[0].append(ADDRESS);
                    $('#row' + (i + 1) + '>.city')[0].append(CITY);
                    $('#row' + (i + 1) + '>.state')[0].append(STATE);
                    $('#row' + (i + 1) + '>.zip')[0].append(ZIP);
                    $('#row' + (i + 1) + '>.type')[0].append(TYPE);
                    $('#row' + (i + 1) + '>.status')[0].append(STATUS);
                    $('#row' + (i + 1) + '>.latitude')[0].append(LATITUDE);
                    $('#row' + (i + 1) + '>.longitude')[0].append(LONGITUDE);
             
              }
            } else {
              //console.log below that will show results based off of success within api results from HILFD if enabled//
              console.log("message:", response.message)
            }
        });
        //HILFD API FULL CALL ENDS

//INSERT SHELTER API ROUTES HERE//
var db = require("../models");

module.exports = function(app) {
  // Get all examples
  app.get("/api/examples", function(req, res) {
    db.Example.findAll({}).then(function(dbExamples) {
      res.json(dbExamples);
    });
  });

  // Create a new example
  app.post("/api/examples", function(req, res) {
    db.Example.create(req.body).then(function(dbExample) {
      res.json(dbExample);
    });
  });

  // Delete an example by id
  app.delete("/api/examples/:id", function(req, res) {
    db.Example.destroy({ where: { id: req.params.id } }).then(function(dbExample) {
      res.json(dbExample);
    });
  });
};

