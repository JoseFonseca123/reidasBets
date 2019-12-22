const APIrequest = require('../createRequest')
var db = require('../Database/Relations');


async function insertCountries (params) {
    try {
    APIrequest.createRequest('https://api-football-v1.p.rapidapi.com/v2/countries/').then(body => {
        db.Country.insert(body.req.res.body.api.countries)
    })
    }
    catch (e) {
        console.log(e);
        console.log(body.req.res.body.api.countries)
    }
}

module.exports = {
    insertCountries
}