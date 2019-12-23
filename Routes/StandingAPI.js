const APIrequest = require("../createRequest");
var db = require("../Database/Relations");

async function insertAllStandings() {
    var todayMatches = await db.Match.getbyDate(new Date().toISOString().slice(0, 10));

           var timetosleep = 0;
            var numberofLoops = Math.ceil(todayMatches.length / 30);
            console.log('Number of loops' + numberofLoops);
    
            const sleep = (milliseconds) => {
                return new Promise(resolve => setTimeout(resolve, milliseconds))
            }

            function make_requests(sleeptime) {
                sleep(sleeptime).then(() => {
                    console.log('Request made with sleep time of ' + sleeptime)
                    var league_30 = [];
                  
                    for (let i = 0; i < 25; i++) 
                        league_30.push(todayMatches.pop());
                        league_30.forEach(match => {
                            try {
                                APIrequest.createRequest('https://api-football-v1.p.rapidapi.com/v2/leagueTable/' + match.LeagueId).then(body => {
                                console.log(body.req.res.body.api)
                                db.Standing.insert(body.req.res.body.api.standings[0], match.LeagueId)
                            })
                            } catch (e) {
                                console.log('Error inserting Standing');
                                console.log('Logging error')
                                console.log(e);
                                console.log('Logging Body')
                                console.log(body.req.res.body)
                            }
                        });
                })
            }

            for (let i = 0; i < numberofLoops; i++) {
                console.log('Create bulk request with time of ' + timetosleep)
                make_requests(timetosleep)
                timetosleep += 65000;
            }
}

module.exports = {
  insertAllStandings
};