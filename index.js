const http = require('http');

const hostname = '127.0.0.1';
const APIs = require('./getAPI')

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World\n');
});


// PORT 3000 CREATE DATABASE
server.listen(() => {
    const port = 3000;
    console.log(`Server running at http://${hostname}:${port}/`);
   
    //Get All Countries
    //APIs.get(APIs.createRequest('https://api-football-v1.p.rapidapi.com/v2/countries'));
    
    //Get all Leagues
    //APIs.get(APIs.createRequest('https://api-football-v1.p.rapidapi.com/v2/leagues/'));

    //Get all 

    //Get all bookmarkers
    //APIs.get(APIs.createRequest("https://api-football-v1.p.rapidapi.com/v2/odds/bookmakers/"));

    //Get all labels
    //APIs.get(APIs.createRequest("https://api-football-v1.p.rapidapi.com/v2/odds/labels"));



});

