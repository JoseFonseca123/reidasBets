const APIrequest = require('../createRequest')
var db = require('../Database/Relations');

async function insertAllTeams(params) {
    
    /**
     * GET TEAM BY ID
     * get("https://api-football-v1.p.rapidapi.com/v2/teams/team/{team_id}");
     * GET TEAM BY COUNTRY
     * get("https://api-football-v1.p.rapidapi.com/v2/teams/search/{country}");
     * GET TEAM BY NAME
     * get("https://api-football-v1.p.rapidapi.com/v2/teams/search/{name}")
     */

    
    
    // BY COUNTRY   

    //get all countries
    var allLeagues = await db.League.getAll();
    allLeagues.forEach(
        element => {
            APIrequest.createRequest('http://www.api-football.com/demo/api/v2/teams/league/' + element.id).then(body => {
                body.req.res.body.api.teams.push({ league_id: element.id })
                db.Team.insert(body.req.res.body.api.teams)
            })
        });
}

module.exports = {
    insertAllTeams
}