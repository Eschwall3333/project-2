// Dependencies
// =============================================================
// Sequelize (capital) references the standard library
var Sequelize = require("sequelize");
// sequelize (lowercase) references my connection to the DB.
var sequelize = require("../config/connection.js");
// Creates a "Book" model that matches up with DB
<<<<<<< HEAD
var db = sequelize.define("shelters", {
  title: Sequelize.STRING,
  author: Sequelize.STRING,
  genre: Sequelize.STRING,
  pages: Sequelize.INTEGER
=======
var Shelter = sequelize.define("Shelter", {
  NAME: Sequelize.STRING,
  ADDRESS: Sequelize.STRING,
  CITY: Sequelize.STRING,
  STATE: Sequelize.STRING,
  ZIP: Sequelize.STRING,
  TYPE: Sequelize.STRING,
  STATUS: Sequelize.STRING,
  WEBSITE: Sequelize.STRING,
  PET_CODE: Sequelize.STRING,
  TELEPHONE: Sequelize.STRING
>>>>>>> 471a57188e23dd9b92deb3a3d11fd7b9bb79e1aa
});

// Makes the Book Model available for other files (will also create a table)
module.exports = Shelter;