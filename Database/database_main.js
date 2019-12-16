var fs        = require("fs");
var path      = require("path");
var Sequelize = require("sequelize");
var env       = process.env.NODE_ENV || "development";
const Op = Sequelize.Op;

var sequelize = new Sequelize('guesser', 'postgres', '27352735', {
    host: 'localhost',
    dialect: 'postgres',
    logging: console.log
  });
  
var db = {};

fs
  .readdirSync(__dirname)
  .filter(function(file) {
    return (file.indexOf(".") !== 0) && (file !== "index.js");
  })
  .forEach(function(file) {
        var model = sequelize.import("./Match");
        db[model.name] = model;
        var model = sequelize.import("./Results");
        db[model.name] = model;  
        var model = sequelize.import("./GoalStats");
        db[model.name] = model;  
        var model = sequelize.import("./Streaks");
        db[model.name] = model;  
        var model = sequelize.import("./ScoringStats");
        db[model.name] = model;  
        var model = sequelize.import("./Half_time");
        db[model.name] = model;  
        var model = sequelize.import("./vsLeague");
        db[model.name] = model;
        var model = sequelize.import("./bookMarkerOdds");
        db[model.name] = model;
        var model = sequelize.import("./TeamMapper");
        db[model.name] = model;  
      });
  

Object.keys(db).forEach(function(modelName) {
    if ("associate" in db[modelName]) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;