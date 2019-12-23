const APIrequest = require('../createRequest')
var db = require('../Database/Relations');

async function insertH2H() {

    db.Match.getbyDate(new Date().toISOString().slice(0, 10)).then(matches => {

        var timetosleep = 0;
        var numberofLoops = Math.ceil(matches.length / 30);
        console.log('Number of loops' + numberofLoops);

        const sleep = (milliseconds) => {
            return new Promise(resolve => setTimeout(resolve, milliseconds))
        }

        function make_requests(sleeptime) {
            sleep(sleeptime).then(() => {
                console.log('Request made with sleep time of ' + sleeptime)
              var matches_30 = [];
              for (let i = 0; i < 25; i++) 
                  matches_30.push(matches.pop());
                
                  matches_30.forEach(match => {
                      try {
                          console.log('https://api-football-v1.p.rapidapi.com/v2/fixtures/h2h/'+ match.HomeId +'/' + match.AwayId)
                          APIrequest.createRequest('https://api-football-v1.p.rapidapi.com/v2/fixtures/h2h/'+ match.HomeId +'/' + match.AwayId).then(body => {
                              try {
                                console.log(body.req.res.body)
                                db.H2H.insert(body.req.res.body.api.fixtures ,match.id)
                          } catch (e) {
                            console.log(e + '/n' + body.req.res.body);
                          }
                        });
                      } catch (e) {
                        console.log(e + '/n' + body.req.res.body);
                      }
                    });
            })
        }
        
        for (let i = 0; i < numberofLoops; i++) {
            console.log('Create bulk request with time of ' + timetosleep)
            make_requests(timetosleep)
            timetosleep += 65000;
        }
    })
}



module.exports = {
    insertH2H
}