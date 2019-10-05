var express = require("express");
var path = require("path");

// Dependencies
var db = require("./app/models/shelters.js");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("app/public"));
// Starts the server to begin listening
// =============================================================
// app.listen(PORT, function() {
//   console.log("App listening on PORT " + PORT);
// });

// GET route for getting all of shelters
//var db = require("./routes/routes.js");
app.get("/", function(req, res){
  res.sendFile(path.join(__dirname, "app/public/index.html"));

  // db.locations.findall({}).then(function(dbshelter){
  //   res.json(dbshelter);

});

// POST route for saving a new dbshelter
//   app.post("./routes/routes.js", function(req, res) {
//     console.log(req.body);
//     db.Shelter.create({
//       text: req.body.text,
//       complete: req.body.complete
//     }).then(function(dbshelter) {
//       res.json(dbshelter);
//     });
//   });
  
//   db.sequelize.sync().then(function(){
  app.listen(PORT, function(){
    console.log("App is listening on PORT " + PORT);
  });
// });






