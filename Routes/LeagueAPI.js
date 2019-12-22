const APIrequest = require('../createRequest')
var db = require('../Database/Relations');

async function insertLeague() {
    
     APIrequest.createRequest('http://www.api-football.com/demo/api/v2/leagues').then(body => {
        db.League.insert(body.req.res.body.api.leagues)
    })
}

module.exports = {
    insertLeague
}