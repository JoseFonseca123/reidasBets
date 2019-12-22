const APIrequest = require('../createRequest')
var db = require('../Database/Relations');

async function insertAllTeams(params) {
    
    // BY COUNTRY   

    //get all countries
    var allLeagues = await db.League.getAll();

           var timetosleep = 0;
            var numberofLoops = Math.ceil(allLeagues.length / 30);
            console.log('Number of loops' + numberofLoops);
    
            const sleep = (milliseconds) => {
                return new Promise(resolve => setTimeout(resolve, milliseconds))
            }

            function make_requests(sleeptime) {
                sleep(sleeptime).then(() => {
                    console.log('Request made with sleep time of ' + sleeptime)
                    var league_30 = [];
                  
                    for (let i = 0; i < 25; i++) 
                        league_30.push(allLeagues.pop());
                    
                    league_30.forEach(league => {
                        try {
                        APIrequest.createRequest('https://api-football-v1.p.rapidapi.com/v2/teams/league/' + league.id).then(body => {
                            body.req.res.body.api.teams.push({ league_id: league.id })
                            db.Team.insert(body.req.res.body.api.teams)
                        })
                        } catch (e) {
                        console.log(e + '/n' + body.req.res.body);
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
    insertAllTeams
}