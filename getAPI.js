var unirest = require('unirest');
module.exports = {
  
  get: function (req) {
    return req.end(function (res) {
      if (res.error) throw new Error(res.error);
      console.log(res.body.api);
    });
  }
}