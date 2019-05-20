const cheerio = require("cheerio");
const request = require("request");
const db = require("../models");

module.exports = function (app) {
    app.get("/api/match", function (req, res) {
        var scrape = {
            method: 'GET',
            url: 'https://www.hltv.org/matches/2332961/cloud9-vs-infinity-esl-pro-league-season-9-americas',
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
                teamAodds += parseFloat(odds[i]);
                i++;
                i++;
                teamBodds += parseFloat(odds[i]);
                j++;
            }
            teamAodds /= j
            teamBodds /= j
            teamAodds = teamAodds.toFixed(2);
            teamBodds = teamBodds.toFixed(2);
            var time = $(".time").attr("data-unix")
            console.log(teamAodds)
            console.log(teamBodds)
            db.Game.create({
                gameDate: time,
                teamA: teamA,
                teamB: teamB,
                teamAOdds: teamAodds,
                teamBOdds: teamBodds
            })
        });
    })

    app.get("/api/result", function (req, res) {
        var scrape = {
            method: 'GET',
            url: 'https://www.hltv.org/matches/2333237/paradox-vs-chiefs-esea-mdl-season-31-australia',
        };
        request(scrape, function (error, response, body) {
            if (error) throw new Error(error);
            var $ = cheerio.load(body);
            var teamAres = $(".team").children(".team1-gradient").children(".won").text().trim();
            if (!teamAres) {
                var teamAres = $(".team").children(".team1-gradient").children(".lost").text().trim();
            }
            console.log("teamA")
            console.log(teamAres)
        });
    })
}