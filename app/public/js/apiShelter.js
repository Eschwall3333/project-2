////HILFD API FULL CALL BEGINS//

      
var baseURL = "https://services1.arcgis.com/Hp6G80Pky0om7QvQ/arcgis/rest/services/National_Shelter_System_Facilities/FeatureServer/0/query?where=ZIP%20like%20'%25"
var baseURL2 = "%25'&outFields=CITY,STATE,TELEPHONE,TYPE,STATUS,ADDRESS,NAME,ZIP,WEBSITE,PET_CODE&outSR=4326&f=json"; 

function getShelters (ZIP){
    $.get(baseURL + ZIP + baseURL2, function(response){
        console.log(response)
    })
}


// const getShelters = async (ZIP) => {
//     try {
//         const res = await $.get(baseURL + ZIP + baseURL2);
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

//    getShelters(30188).then(function (response) {
//      console.log("NAME", response);
//      console.log("ADDRESS", response);
//      console.log("CITY", response);
//      console.log("STATE", response);
//      console.log("ZIP", response);
//      console.log("TYPE", response);
//      console.log("STATUS", response);
//      console.log("WEBSITE", response);
//      console.log("PET_CODE", response);
//      console.log("TELEPHONE", response);
//        if (response.searchResults) {
//          for (var i = 0; i < response.searchResults.length; i++) {
//          //For Loop grabs the shelter data and appends to each row//
//              let NAME = response.searchResults[i].attributes.NAME;
//             let ADDRESS = response.searchResults[i].attributes.ADDRESS;
//             let CITY = response.searchResults[i].attributes.CITY;
//             let STATE = response.searchResults[i].attributes.STATE;
//             let ZIP = response.searchResults[i].attributes.ZIP;
//             let TYPE = response.searchResults[i].attributes.TYPE;
//             let STATUS = response.searchResults[i].attributes.STATUS;
//             let WEBSITE = response.searchResults[i].attributes.WEBSITE;
//             let PET_CODE = response.searchResults[i].attributes.PET_CODE;
//             let TELEPHONE = response.searchResults[i].attributes.TELEPHONE;
//                 $('#row' + (i + 1) + '>.name')[0].append(NAME);
//                 $('#row' + (i + 1) + '>.address')[0].append(ADDRESS);
//                 $('#row' + (i + 1) + '>.city')[0].append(CITY);
//                 $('#row' + (i + 1) + '>.state')[0].append(STATE);
//                 $('#row' + (i + 1) + '>.zip')[0].append(ZIP);
//                 $('#row' + (i + 1) + '>.type')[0].append(TYPE);
//                 $('#row' + (i + 1) + '>.status')[0].append(STATUS);
//                 $('#row' + (i + 1) + '>.status')[0].append(WEBSITE);
//                 $('#row' + (i + 1) + '>.status')[0].append(PET_CODE);
//                 $('#row' + (i + 1) + '>.status')[0].append(TELEPHONE);
            
//               }
//              } else {
//                //console.log below that will show results based off of success within api results from HILFD if enabled//
//                console.log("message:", response.message)
//    }
//  });
//         //HILFD API FULL CALL ENDS

getShelters(30188);