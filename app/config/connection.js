//NPM Packages Used//
var mysql = require("mysql");
var Sequelize = require("Sequelize");


//MySQL DB Connection Info and Error Message Handling//
var sequelize = new Sequelize("usa_shelters_db", "root", "Explorer98*!",{
   host: "127.0.0.1",
   port: 3306,
   dialect: "mysql"
})
//Connecting to DB//

module.exports = sequelize;