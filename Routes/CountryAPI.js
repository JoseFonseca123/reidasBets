const APIrequest = require('../createRequest')
var db = require('../Database/Relations');


async function insertCountries (params) {
    APIrequest.createRequest('http://www.api-football.com/demo/api/v2/countries/').then(body => {
        db.Country.insert(body.req.res.body.api.countries)
    })
}

module.exports = {
    insertCountries
}