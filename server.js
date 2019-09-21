<<<<<<< HEAD
var express = require("express");

// Dependencies
var db = require("./app/models/shelters.js");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Starts the server to begin listening
// =============================================================
// app.listen(PORT, function() {
//   console.log("App listening on PORT " + PORT);
// });

// GET route for getting all of shelters
//var db = require("./routes/routes.js");
app.get("/", function(req, res){
  db.Shelter.findall({}).then(function(dbshelter){
    res.json(dbshelter);
  });
});

// POST route for saving a new dbshelter
  app.post("./routes/routes.js", function(req, res) {
    console.log(req.body);
    db.Shelter.create({
      text: req.body.text,
      complete: req.body.complete
    }).then(function(dbshelter) {
      res.json(dbshelter);
    });
  });
  
  db.sequelize.sync().then(function(){
  app.listen(PORT, function(){
    console.log("App is listening on PORT " + PORT);
  });
});






=======
require("dotenv").config();
var express = require("express");
var exphbs = require("express-handlebars");

var db = require("./models");

var app = express();
var PORT = process.env.PORT || 3000;

// Middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static("public"));

// Handlebars
app.engine(
  "handlebars",
  exphbs({
    defaultLayout: "main"
  })
);
app.set("view engine", "handlebars");

// Routes
require("./routes/openWeatherRoutes")(app);
require("./routes")(app);

var syncOptions = { force: false };

// If running a test, set syncOptions.force to true
// clearing the `testdb`
if (process.env.NODE_ENV === "test") {
  syncOptions.force = true;
}

// Starting the server, syncing our models ------------------------------------/
db.sequelize.sync(syncOptions).then(function() {
  app.listen(PORT, function() {
    console.log(
      "==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
      PORT,
      PORT
    );
  });
});

module.exports = app;
>>>>>>> e334917f8f004df2885889ccf5fde170b60e5c62
