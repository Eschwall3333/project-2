$(document).ready(function () {
  //ON-CLICK EVENT FOR SEARCH BUTTON//
  $("#shelterButton").click(function () {

    event.preventDefault();
    var CITY2 = $("#shelterquery").val();
    // "https://gis.fema.gov/arcgis/rest/services/NSS/FEMA_NSS/FeatureServer/5/query?" "where=1%3D1&outFields=CITY,PET_ACCOMMODATIONS_CODE,MAILING_ADDRESS_1,MAILING_ZIP,SHELTER_NAME,STATE&outSR=4326&f=json"
    var baseURL = "https://gis.fema.gov/arcgis/rest/services/NSS/FEMA_NSS/FeatureServer/5/query?where=UPPER(CITY)%20like%20'%25"
    var baseURL2 = "%25'&outFields=CITY,PET_ACCOMMODATIONS_CODE,MAILING_ADDRESS_1,SHELTER_NAME,STATE,STATUS,FACILITY_TYPE&outSR=4326&f=json"; 


    function getShelters (CITY2){
      return $.get(baseURL + CITY2 + baseURL2, function(response){
            //console.log(response);
       })
   }
    
      getShelters(CITY2).then(function (response) {
       //var jsonResponse = JSON.parse(response);
      // console.log("ADDRESS", response);
      // console.log("CITY", response);
      // console.log("STATE", response);
      // console.log("CITY", response);
      // console.log("TYPE", response);
      // console.log("STATUS", response);
      // console.log("WEBSITE", response);
      // console.log("PET_CODE", response);
      // console.log("TELEPHONE", response);
      //console.log(JSON.parse(response).features);
      console.log("i made it this far");
      console.log(response);
        if (response.features) {
          for (var i = 0; i < response.features.length; i++) {
          //For Loop grabs the shelter data and appends to each row//
             let NAME = response.features[i].attributes.SHELTER_NAME;
             let ADDRESS = response.features[i].attributes.MAILING_ADDRESS_1;
             let CITY = response.features[i].attributes.CITY;
             let STATE = response.features[i].attributes.STATE;
             let TYPE = response.features[i].attributes.FACILITY_TYPE;
             let STATUS = response.features[i].attributes.STATUS;
             
             let PET_CODE = response.features[i].attributes.PET_ACCOMMODATIONS_CODE;
            
             console.log("NAME", NAME);
             console.log("ADDRESS", ADDRESS);
              console.log("CITY", CITY );
              console.log("STATE", STATE);
              console.log("TYPE", TYPE);
              console.log("STATUS", STATUS);
              //console.log("WEBSITE", WEBSITE);
              console.log("PET_CODE", PET_CODE);
              
                //  $('#row' + (i + 1) + '>.name')[0].append(NAME);
                //  $('#row' + (i + 1) + '>.address')[0].append(ADDRESS);
                //  $('#row' + (i + 1) + '>.city')[0].append(CITY);
                //  $('#row' + (i + 1) + '>.state')[0].append(STATE);
                //  $('#row' + (i + 1) + '>.CITY')[0].append(CITY);
                //  $('#row' + (i + 1) + '>.type')[0].append(TYPE);
                //  $('#row' + (i + 1) + '>.status')[0].append(STATUS);
                //  $('#row' + (i + 1) + '>.status')[0].append(WEBSITE);
                //  $('#row' + (i + 1) + '>.status')[0].append(PET_CODE);
                //  $('#row' + (i + 1) + '>.status')[0].append(TELEPHONE);
             $('tbody').append(`
             <tr>
										<td>${NAME}</td>
										<td>${ADDRESS}</td>
										<td>${CITY}</td>
										<td>${STATE}</td>
										<td>${TYPE}</td>
										<td>${STATUS}</td>
                    <td>${PET_CODE}</td>
                    <td colspan="8"></td>
									</tr>
             `)
               }
              } else {
                //console.log below that will show results based off of success within api results from HILFD if enabled//
                console.log("message:", response.message)
    }
  });

    //var userInput2 = $("#shelterquery").val();
  });
});


    // var baseURL = "https://services1.arcgis.com/Hp6G80Pky0om7QvQ/arcgis/rest/services/National_Shelter_System_Facilities/FeatureServer/0/query?where=CITY%20like%20'%25"
    // var baseURL2 = "%25'&outFields=CITY,STATE,TELEPHONE,TYPE,STATUS,ADDRESS,NAME,ZIP,WEBSITE,PET_CODE&outSR=4326&f=json"; 

// function getShelters (CITY2){
//    return $.get(baseURL + CITY2 + baseURL2, function(response){
//         // console.log(response)
//     })
// }


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

   
//         //HILFD API FULL CALL ENDS
