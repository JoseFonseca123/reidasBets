const express = require("express");
const cors = require("cors");
const APIs = require('./getAPI')
const request = require('./createRequest')

const app = express();
app.use(cors());


//PORT 3000 CREATE DATABASE
//Create the Connection to the Database
app.get("/createdatabase", (request, response) => {
  var db = require('./Database/Relations')
  const connection = require('./Database/Config');
  connection.sync({force: true})
})


  //Get All Countries
  //APIs.get(request.createRequest('http://www.api-football.com/demo/api/v2/'));
    
  //Get all Leagues
  //APIs.get(request.createRequest('https://api-football-v1.p.rapidapi.com/v2/leagues/'));

  //Get all 

  //Get all bookmarkers
  //APIs.get(APIs.createRequest("https://api-football-v1.p.rapidapi.com/v2/odds/bookmakers/"));

  //Get all labels
  //APIs.get(APIs.createRequest("https://api-football-v1.p.rapidapi.com/v2/odds/labels"));

// Select Listen Port

app.listen(8000, () => {console.log("Listening on port 8000");});

