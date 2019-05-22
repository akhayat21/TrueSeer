const cheerio = require("cheerio");
const request = require("request");
const db = require("../models");

module.exports = function (app) {
    app.post("/api/match", function (req, res) {
        var scrape = {
            method: 'GET',
            url: req.body.url,
        };
        request(scrape, function (error, response, body) {
            if (error) throw new Error(error);
            // console.log(body)
            var $ = cheerio.load(body);
            var teamA = $(".team").children(".team1-gradient").text().trim();
            var teamB = $(".team").children(".team2-gradient").text().trim();
            var odds = []
            var teamAodds = 0;
            var teamBodds = 0;
            $(".betting_provider").children(".odds-cell").each(function () {
                odds.push($(this).text())
            })
            j = 0;
            for (let i = 0; i < odds.length; i++) {
                if (odds[i].indexOf('%') == -1) {
                    teamAodds += parseFloat(odds[i]);
                } else {
                    j--;
                }
                i++;
                i++;
                if (odds[i].indexOf('%') == -1) {
                    teamBodds += parseFloat(odds[i]);
                }
                j++;
            }
            teamAodds /= j
            teamBodds /= j
            teamAodds = teamAodds
            teamBodds = teamBodds
            var teamAImpOdds = 1 / teamAodds
            var teamBImpOdds = 1 / teamBodds
            var tem1 = 100 * teamAImpOdds;
            var tem2 = 100 * teamBImpOdds;
            var tem3 = 100 - tem1;
            var tem4 = 100 - tem2;
            var tem5 = (tem1 + tem4) / 2
            var tem6 = (tem2 + tem3) / 2
            console.log(tem5.toFixed(2))
            // console.log(tem6.toFixed(2))
            var time = $(".time").attr("data-unix")
            var winlist = [];
            $(".map-stats-infobox-maps").children(".map-stats-infobox-mapname-container").children(".map-stats-infobox-mapname-holder").children(".mapname").each(function () {
                winlist.push($(this).text())
            })
            $(".map-stats-infobox-winpercentage").each(function () {
                winlist.push($(this).text())
            })


            var arr = []
            var count = 0;
            var countTwo = 0;
            var teamAprob = 0;
            var teamBprob = 0;
            for (let j = 0; j < 7; j++) {
                arr.push(winlist[j])
                if (winlist[7 + count] == '-' && winlist[8 + count] != '-') {
                    var temp = 0
                    var temp2 = 100 - temp;
                    var temp3 = parseInt(winlist[8 + count].replace(/\%/g, '/'))
                    var temp4 = 100 - temp3
                    var temp5 = (temp + temp4) / 2
                    var temp6 = (temp3 + temp2) / 2
                    arr.push(temp5)
                    arr.push(temp6)
                    teamAprob += temp5
                    teamBprob += temp6
                    countTwo++;
                } else if (winlist[7 + count] != '-' && winlist[8 + count] == '-') {
                    var temp = parseInt(winlist[7 + count].replace(/\%/g, '/'))
                    var temp2 = 100 - temp;
                    var temp3 = 0
                    var temp4 = 100 - temp3
                    var temp5 = (temp + temp4) / 2
                    var temp6 = (temp3 + temp2) / 2
                    arr.push(temp5)
                    arr.push(temp6)
                    teamAprob += temp5
                    teamBprob += temp6
                    countTwo++;
                } else if (winlist[7 + count] == '-' && winlist[8 + count] == '-') {
                    var temp = 25
                    var temp2 = 100 - temp;
                    var temp3 = 25
                    var temp4 = 100 - temp3
                    var temp5 = (temp + temp4) / 2
                    var temp6 = (temp3 + temp2) / 2
                    arr.push(temp5)
                    arr.push(temp6)
                    teamAprob += temp5
                    teamBprob += temp6
                    countTwo++;
                }
                
                else {
                    winlist[7 + count] = parseInt(winlist[7 + count].replace(/\%/g, '/'))
                    winlist[8 + count] = parseInt(winlist[8 + count].replace(/\%/g, '/'))
                    var temp = winlist[7 + count];
                    var temp2 = 100 - temp;
                    var temp3 = winlist[8 + count];
                    var temp4 = 100 - temp3
                    var temp5 = (temp + temp4) / 2
                    var temp6 = (temp3 + temp2) / 2
                    arr.push(temp5)
                    arr.push(temp6)
                    teamAprob += temp5
                    teamBprob += temp6
                    countTwo++;
                }
                count += 2;
            }
            teamAprob /= countTwo;
            teamBprob /= countTwo;
            //calced prob
            var t1 = teamAprob;
            var t2 = teamBprob;
            var t3 = 100 - t1;
            var t4 = 100 - t2;
            var t5 = (t1 + t4) / 2
            var t6 = (t2 + t3) / 2
            console.log("t5", t5)
            console.log("t6", t6)
            arr = arr.toString()
            var betSize = 0;
            var betTeam = "";
            if (parseInt(t5) > parseInt(tem5)) {
                betTeam = teamA;
                var diff = parseInt(t5) - parseInt(tem5)
                console.log(diff)
                switch (true) {
                    case (diff <= 2.5):
                        betSize = 1.5;
                        break;
                    case (diff > 2.5 && diff <= 5):
                        betSize = 2.5;
                        break;
                    case (diff > 5 && diff <=10):
                        betSize = 3.5;
                        break;
                    case (diff > 10):
                        betSize = 5;
                        break;
                }
            } else if (parseInt(t5) < parseInt(tem5)) {
                betTeam = teamB;
                var diff = parseInt(tem5) - parseInt(t5) 
                console.log(diff)
                switch (true) {
                    case (diff <= 2.5):
                        betSize = 1.5;
                        break;
                    case (diff > 2.5 && diff <= 5):
                        betSize = 2.5;
                        break;
                    case (diff > 5 && diff <=10):
                        betSize = 3.5;
                        break;
                    case (diff > 10):
                        betSize = 5;
                        break;
                }
            }

            teamAImg = $(".team").children(".team1-gradient").children("a").children("img").attr("src")
            teamBImg = $(".team").children(".team2-gradient").children("a").children("img").attr("src")
            teamAFlag = $(".team").children(".team1").attr("src")
            teamBFlag = $(".team").children(".team2").attr("src")
            console.log(t5)
            db.Game.create({
                gameDate: time,
                gameLink: req.body.url,
                teamA: teamA,
                teamB: teamB,
                teamAImg: teamAImg,
                teamBImg: teamBImg,
                teamAFlag: teamAFlag,
                teamBFlag: teamBFlag,
                WinList: arr,
                teamAImpOdds: tem5.toFixed(2),
                teamBImpOdds: tem6.toFixed(2),
                teamACalcOdds: t5.toFixed(2),
                teamBCalcOdds: t6.toFixed(2),
                betSize: betSize,
                betTeam: betTeam,
                teamAOdds: teamAodds.toFixed(2),
                teamBOdds: teamBodds.toFixed(2)
            }).then(function (dbmatches) {
                res.json(dbmatches)
            })
        });
    })

    app.post("/api/result", function (req, res) {
        var scrape = {
            method: 'GET',
            url: req.body.url,
        };
        request(scrape, function (error, response, body) {
            if (error) throw new Error(error);
            var $ = cheerio.load(body);
            var teamAres = $(".team").children(".team1-gradient").children(".won").text().trim();
            if (!teamAres) {
                var teamAres = $(".team").children(".team1-gradient").children(".lost").text().trim();
            }
            var teamBres = $(".team").children(".team1-gradient").children(".won").text().trim();
            if (!teamAres) {
                var teamBres = $(".team").children(".team1-gradient").children(".lost").text().trim();
            }
            db.Game.update({
                teamAres: teamAres,
                teamBres: teamBres
            }, {
                    where: {
                        gameLink: req.body.url
                    }
                }).then(function (dbmatches) {
                    res.json(dbmatches)
                })
        });
    })

    app.get("/api/match", function (req, res) {
        var response = [];
        db.Game.findAll({}).then(function (games) {
            // for (let i = 0; i < games.length; i++) {
            //     response.push(games[i].dataValues.WinList.split(","))
            // }
            res.json(games)
        });
    });

    app.delete("/api/match/:id", function(req, res) {
        db.Game.destroy({
          where: {
            id: req.params.id
          }
        }).then(function(games) {
          res.json(games);
        }).catch(function (error) {
            console.log(error.response);
       });
      });
}