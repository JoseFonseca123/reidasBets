const APIrequest = require('../createRequest')
var db = require('../Database/Relations');

async function insertH2H() {
    
    APIrequest.createRequest('https://api-football-v1.p.rapidapi.com/v2/fixtures/h2h/33/34').then(body => {
        db.H2H.insert(body.req.res.body.api.fixtures)
    })
}

module.exports = {
    insertH2H
}