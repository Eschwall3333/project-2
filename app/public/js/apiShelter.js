$(document).ready(function () {
    //ON-CLICK EVENT FOR SEARCH BUTTON//
    $("#shelterButton").click(function () {
  
      event.preventDefault();
  
      //var userInput2 = $("#shelterquery").val();
    });
    });

////HILFD API FULL CALL BEGINS//

var CITY2 ="";
var baseURL = "https://services1.arcgis.com/Hp6G80Pky0om7QvQ/arcgis/rest/services/National_Shelter_System_Facilities/FeatureServer/0/query?where=CITY%20like%20'%25"
var baseURL2 = "WOODSTOCK%25'&outFields=CITY,STATE,TELEPHONE,TYPE,STATUS,ADDRESS,NAME,ZIP,WEBSITE,PET_CODE&outSR=4326&f=json"; 

function getShelters (CITY2){
    $.get(baseURL + CITY2 + baseURL2, function(response){
        console.log(response)
    })
}


// const getShelters = async (CITY) => {
//     try {
//         const res = await $.get(baseURL + CITY + baseURL2);
//         const shelter = res.data;
//         console.log(`GET: HERE IS A LIST OF SHELTERS`, shelter);
//         return shelter;
//     } catch (e) {
//         console.error(e);
//     }
// }; 


// const createLine = item => {
//     const li = document.createElement("li");
//     li.appendChild(document.createTextNode(item.Title));
//     return li;
// };

// const addShelterToDom = shelter => {
//     const ul = document.querySelector("ul");
//     if (Array.isArray(shelter) && shelter.length > 0) {
//         shelter.map(shelter => {
//             ul.appendChild 
//         })
//     } 
// }

   getShelters(CITY2).then(function (response) {
     console.log("NAME", response);
     console.log("ADDRESS", response);
     console.log("CITY", response);
     console.log("STATE", response);
     console.log("CITY", response);
     console.log("TYPE", response);
     console.log("STATUS", response);
     console.log("WEBSITE", response);
     console.log("PET_CODE", response);
     console.log("TELEPHONE", response);
       if (response.searchResults) {
         for (var i = 0; i < response.searchResults.length; i++) {
         //For Loop grabs the shelter data and appends to each row//
            let NAME = response.searchResults[i].attributes.NAME;
            let ADDRESS = response.searchResults[i].attributes.ADDRESS;
            let CITY = response.searchResults[i].attributes.CITY;
            let STATE = response.searchResults[i].attributes.STATE;
            let TYPE = response.searchResults[i].attributes.TYPE;
            let STATUS = response.searchResults[i].attributes.STATUS;
            let WEBSITE = response.searchResults[i].attributes.WEBSITE;
            let PET_CODE = response.searchResults[i].attributes.PET_CODE;
            let TELEPHONE = response.searchResults[i].attributes.TELEPHONE;
                $('#row' + (i + 1) + '>.name')[0].append(NAME);
                $('#row' + (i + 1) + '>.address')[0].append(ADDRESS);
                $('#row' + (i + 1) + '>.city')[0].append(CITY);
                $('#row' + (i + 1) + '>.state')[0].append(STATE);
                $('#row' + (i + 1) + '>.CITY')[0].append(CITY);
                $('#row' + (i + 1) + '>.type')[0].append(TYPE);
                $('#row' + (i + 1) + '>.status')[0].append(STATUS);
                $('#row' + (i + 1) + '>.status')[0].append(WEBSITE);
                $('#row' + (i + 1) + '>.status')[0].append(PET_CODE);
                $('#row' + (i + 1) + '>.status')[0].append(TELEPHONE);
            
              }
             } else {
               //console.log below that will show results based off of success within api results from HILFD if enabled//
               console.log("message:", response.message)
   }
 });
//         //HILFD API FULL CALL ENDS

getShelters(CITY2);