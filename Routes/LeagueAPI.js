const APIrequest = require('../createRequest')
var db = require('../Database/Relations');

async function insertLeague() {
    
     APIrequest.createRequest('https://api-football-v1.p.rapidapi.com/v2/leagues').then(body => {
        db.League.insert(body.req.res.body.api.leagues)
    })
}

module.exports = {
    insertLeague
}