const APIrequest = require("../createRequest");
var db = require("../Database/Relations");
const Sequelize = require("../Database/Config");

async function insertPredictions() {
  db.Match.getbyDate(new Date().toISOString().slice(0, 10)).then(matches => {
    
    var timetosleep = 0;
    var numberofLoops = Math.ceil(matches.length / 30);
    console.log('Number of loops' + numberofLoops);
      
    const sleep = (milliseconds) => {
     return new Promise(resolve => setTimeout(resolve, milliseconds))
      }
      
      function make_requests(sleeptime) {
          sleep(sleeptime).then(() => {
              console.log('Request made with sleep time of ' + sleeptime)
            var matches_30 = [];
            for (let i = 0; i < 25; i++) 
                matches_30.push(matches.pop());
              
                matches_30.forEach(match => {
                    try {
                      APIrequest.createRequest("https://api-football-v1.p.rapidapi.com/v2/predictions/" + match.id).then(body => {
                          try {
                          console.log(body.req.res.body.api)
                          db.Predictions.insert(body.req.res.body.api.predictions,match.id);
                        } catch (e) {
                          //console.log(e + '/n' + body.req.res.body);
                        }
                      });
                    } catch (e) {
                      //console.log(e + '/n' + body.req.res.body);
                    }
                  });
          })
    }

      for (let i = 0; i < numberofLoops; i++) {
          console.log('Create request with time of ' + timetosleep)
          make_requests(timetosleep)
          timetosleep += 65000;
      }
  });
}

async function getView() {

  Sequelize.query('SELECT * FROM bets.matchStats', {
  })
  .then(projects => {
    console.log(projects)
  })
}


module.exports = {
  insertPredictions, getView
};
