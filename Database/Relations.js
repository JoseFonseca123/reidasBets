var fs = require("fs");
var path = require("path");
var Sequelize = require("sequelize");
var env = process.env.NODE_ENV || "development";
const Op = Sequelize.Op;

var sequelize = new Sequelize("bets", "admin", "admin", {
  host: "localhost",
  dialect: "mysql",
  logging: console.log
});

var db = {};

fs.readdirSync(__dirname)
  .filter(function(file) {
    return file.indexOf(".") !== 0 && file !== "index.js";
  })
  .forEach(function(file) {
    var model = sequelize.import("./Country");
    db[model.name] = model;
    var model = sequelize.import("./League");
    db[model.name] = model;
    var model = sequelize.import("./Match");
    db[model.name] = model;
    var model = sequelize.import("./Team");
    db[model.name] = model;
    var model = sequelize.import("./Team_Stats");
    db[model.name] = model;
    var model = sequelize.import("./Bookmaker");
    db[model.name] = model;
    var model = sequelize.import("./Odd");
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
