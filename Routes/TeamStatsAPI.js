const APIrequest = require('../createRequest')
var db = require('../Database/Relations');

async function insertTeamStatistics(params) {
    //get all countries
    var allLeagues = await db.League.getAll();
    allLeagues.forEach(
        league => {
            db.Team.getbyLeague(league.id).then(teamsofLeague => {
                teamsofLeague.forEach( 
                    team => {
                        APIrequest.createRequest('https://api-football-v1.p.rapidapi.com/v2/statistics/' + league.id + '/' + team.id).then(
                            body => {
                                try {
                                    //console.log(body.req.res.body.api.statistics)
                                    db.TeamStats.insert(body.req.res.body.api.statistics, league.id, team.id) 
                                }
                                catch (e) {
                                    console.log(e)
                                }
 
                            })
                            }
                        )  
                }
            );
        }
    )
}
module.exports = {
    insertTeamStatistics
}