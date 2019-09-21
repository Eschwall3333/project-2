//NPM Packages Used//
//var mysql = require("mysql");
var Sequelize = require("Sequelize");

var sequelize = new Sequelize("usa_shelters_db","root", "Emory123456789987654321", {
   host: "localhost",
   port: 3306, 
   dialect: "mysql"
});
//MySQL DB Connection Info and Error Message Handling//
//Connecting to DB//

module.exports = sequelize;
// {
//    "development": {
//      "username": "root",
//      "password": "Explorer98*!",
//      "database": "usa_shelters_db",
//      "host": "127.0.0.1",
//      "port": 3306,
//      "dialect": "mysql"
//    },
//    "test": {
//      "username": "root",
//      "password": "Explorer98*!",
//      "database": "testdb",
//      "host": "localhost",
//      "port": 3306,
//      "dialect": "mysql",
//      "logging": false
//    },
//    "production": {
//      "use_env_variable": "JAWSDB_URL",
//      "username": "root",
//      "password": "Explorer98*!",
//      "database": "usa_shelters_db",
//      "host": "127.0.0.1",
//      "port": 3306,
//      "dialect": "mysql"
//    }
//  }