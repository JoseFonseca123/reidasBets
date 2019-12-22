const APIrequest = require("../createRequest");
var db = require("../Database/Relations");

async function insertAllStandings(params) {
    await db.League.getAll().then(leagues => {
        leagues.forEach(league => {
            APIrequest.createRequest("https://api-football-v1.p.rapidapi.com/v2/leagueTable/" + league.id).then(body => {
                db.Standing.insert(body.req.res.body.api.standings[0], league.id)
            })
        })
    })
}

module.exports = {
  insertAllStandings
};
