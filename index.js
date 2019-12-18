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
  //APIs.get(request.createRequest('https://api-football-v1.p.rapidapi.com/v2/countries/'));
    
  //Get all Leagues
  //APIs.get(request.createRequest('https://api-football-v1.p.rapidapi.com/v2/leagues/country/spain/2019'));

  //Get all teams from 1 league
  //APIs.get(request.createRequest('https://api-football-v1.p.rapidapi.com/v2/teams/league/2'));

  //Get all Statistics from one Team
  //APIs.get(request.createRequest('https://api-football-v1.p.rapidapi.com/v2/statistics/2/33'));
  
  //GET matches from league id
  //APIs.get(request.createRequest('https://api-football-v1.p.rapidapi.com/v2/fixtures/league/775/2019-12-14'));

  //GET bookmarkres
  //APIs.get(request.createRequest('https://api-football-v1.p.rapidapi.com/v2/odds/bookmakers/'));

  //Get Markets
  //APIs.get(request.createRequest('https://api-football-v1.p.rapidapi.com/v2/odds/labels/'));

  //Get all bookmarkers
  //APIs.get(request.createRequest('https://api-football-v1.p.rapidapi.com/v2/odds/fixture/214113/bookmaker/11'));

  //Get all labels
  //APIs.get(APIs.createRequest("https://api-football-v1.p.rapidapi.com/v2/odds/labels"));

// Select Listen Port

app.listen(8000, () => {console.log("Listening on port 8000");});

