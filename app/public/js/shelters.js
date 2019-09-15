// // When the page loads, grab and display Shelters List
// $.get("/api/all", function(data) {

//     if (data.length !== 0) {
  
//       for (var i = 0; i < data.length; i++) {
  
//         var row = $("<div>");
//         row.addClass("shelter");
  
//         row.append("<p>" + data[i].shelter_name + " chirped.. </p>");
//         row.append("<p>" + data[i].address + "</p>");
//         row.append("<p>" + data[i].city + "</p>");
//         row.append("<p>" + data[i].state + "</p>");
//         row.append("<p>" + data[i].zip + "</p>");
//         row.append("<p>" + data[i].class + "</p>");
//         row.append("<p>" + data[i].situation + "</p>");
//         row.append("<p>At " + moment(data[i].created_at).format("h:mma on dddd") + "</p>");
  
//         $("#shelter-area").prepend(row);
  
//       }
  
//     }
  
//   });