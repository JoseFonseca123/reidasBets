var unirest = require('unirest');

module.exports = {

  createRequest: function (url) {
    var req = unirest("GET", url);    
    req.headers({
        "x-rapidapi-host": "api-football-v1.p.rapidapi.com",
        "x-rapidapi-key": "57c06d5290mshc938e6ddf4cae8dp132286jsn150851a6a46f"
    });
    return req;
  },
  
  get: function (req) {
    return req.end(function (res) {
      if (res.error) throw new Error(res.error);
      console.log(res.body.api);
    });
  }
}