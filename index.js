const express = require("express");
const cors = require("cors");
const countryAPI = require("./Routes/CountryAPI");
const leagueAPI = require("./Routes/LeagueAPI");
const teamAPI = require("./Routes/TeamAPI");
const standingAPI = require("./Routes/StandingAPI");
const teamStatsAPI = require("./Routes/TeamStatsAPI");
const matchAPI = require("./Routes/MatchAPI");
const h2hAPI = require("./Routes/h2hAPI");
const predictionsAPI = require("./Routes/PredictionsAPI")

const app = express();
app.use(cors());
process.env.requestsNumber = 0


//PORT 3000 CREATE DATABASE
//Create the Connection to the Database
app.get("/createdatabase", (request, response) => {
  request.connection.setTimeout(1000 * 60 * 10*10);
  const connection = require('./Database/Config');
  connection.sync({ force: true })
  response.end('Done')
})


// Add countries to the Database
app.get("/addcountries", (request, response) => {

  //Avoid Duplicated Requests from Browser
  request.connection.setTimeout(600000);
  countryAPI.insertCountries().then (response.end('Done')); 
})


// Add countries to the Database
app.get("/addleagues", (request, response) => {

  //Avoid Duplicated Requests from Browser
  request.connection.setTimeout(600000);
  leagueAPI.insertLeague().then (response.end('Done')); 
})

// Add Teams to the Database
app.get("/addTeams", (request, response) => {
  //Avoid Duplicated Requests from Browser
  request.connection.setTimeout(600000);
  teamAPI.insertAllTeams().then (response.end('Done')); 
})

// Add Standings to the Database
app.get("/addStandings", (request, response) => {
  //Avoid Duplicated Requests from Browser
  request.connection.setTimeout(600000);
  standingAPI.insertAllStandings().then (response.end('Done')); 
})

// Add TeamStatistics to the Database
app.get("/addTeamStatistics", (request, response) => {
  //Avoid Duplicated Requests from Browser
  request.connection.setTimeout(600000);
  teamStatsAPI.insertTeamStatistics().then (response.end('Done')); 
})


// Add Matches to the Database
app.get("/addtodayMatches", (request, response) => {
  //Avoid Duplicated Requests from Browser
  request.connection.setTimeout(600000);
  matchAPI.insertAllMatches().then (response.end('Done')); 
})

app.get("/addH2H", (request, response) => {
  //Avoid Duplicated Requests from Browser
  request.connection.setTimeout(600000);
  h2hAPI.insertH2H().then (response.end('Done')); 
})

app.get("/addpredictions", (request, response) => {
  //Avoid Duplicated Requests from Browser
  request.connection.setTimeout(600000);
  predictionsAPI.insertPredictions().then (response.end('Done')); 
})


app.get("/getStatsView", (request, response) => {
  //Avoid Duplicated Requests from Browser
  request.connection.setTimeout(600000);
  predictionsAPI.getView().then(response.end('Done')); 
})

// Select Listen Port

app.listen(8000, () => { console.log("Listening on port 8000"); });
app.timeout = 1000000000;

