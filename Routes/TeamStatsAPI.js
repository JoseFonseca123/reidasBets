const APIrequest = require('../createRequest')
var db = require('../Database/Relations');

async function insertTeamStatistics(params) {

    var todaymatches = await db.Match.getbyDate(new Date().toISOString().slice(0, 10));

    var timetosleep = 0;
    var numberofLoops = Math.ceil(todaymatches.length / 15);
    console.log('Number of loops' + numberofLoops);
    
    const sleep = (milliseconds) => {
        return new Promise(resolve => setTimeout(resolve, milliseconds))
    }
    
    function make_requests(sleeptime) {
        sleep(sleeptime).then(() => {
            console.log('Request made with sleep time of ' + sleeptime)
            var stats_15 = [];

            for (let i = 0; i < 13; i++)
                stats_15.push(todaymatches.pop());
            
            stats_15.forEach(match => {
                APIrequest.createRequest('https://api-football-v1.p.rapidapi.com/v2/statistics/' + match.LeagueId + '/' + match.HomeId).then(
                    body => {
                        try {
                            //console.log(body.req.res.body.api.statistics)
                            //console.log(match.HomeId)
                            db.TeamStats.insert(body.req.res.body.api.statistics, match.LeagueId, match.HomeId)
                        }
                        catch (e) {
                            console.log(e)
                        }
                                    
                    })
            })
            stats_15.forEach(match => {
                APIrequest.createRequest('https://api-football-v1.p.rapidapi.com/v2/statistics/' + match.LeagueId + '/' + match.AwayId).then(
                    body => {
                        try {
                            //console.log(body.req.res.body.api.statistics)
                            db.TeamStats.insert(body.req.res.body.api.statistics, match.LeagueId, match.AwayId)
                        }
                        catch (e) {
                            console.log(e)
                        }
                                    
                    })
            })
        })
    }

    for (let i = 0; i < numberofLoops; i++) {
        console.log('Create bulk request with time of ' + timetosleep)
        make_requests(timetosleep)
        timetosleep += 65000;
    }
}
module.exports = {
    insertTeamStatistics
}