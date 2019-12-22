const APIrequest = require("../createRequest");
var db = require("../Database/Relations");

async function insertAllStandings(params) {
    await db.League.getAll().then(leagues => {
        leagues.forEach(league => {
            console.log('UMA LIGA')
            APIrequest.createRequest("http://www.api-football.com/demo/api/v2/leagueTable/" + league.id).then(body => {
                db.Standing.insert(body.req.res.body.api.standings[0], league.id)
            })
        })
    })
}

module.exports = {
  insertAllStandings
};
