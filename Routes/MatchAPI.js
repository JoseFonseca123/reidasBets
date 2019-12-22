const APIrequest = require('../createRequest')
var db = require('../Database/Relations');

async function insertAllMatches(params) {
    // BY COUNTRY   

    //get all countries
    var today = new Date().toISOString().slice(0, 10);
    APIrequest.createRequest('https://api-football-v1.p.rapidapi.com/v2/fixtures/date/'+today).then(body => {
        //console.log('%j',body.req.res.body.api.fixtures)
        db.Match.insert(body.req.res.body.api.fixtures)
    })
};

module.exports = {
    insertAllMatches
}