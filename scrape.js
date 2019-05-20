const cheerio = require("cheerio");
const fs = require('file-system');
const request = require("request");
 
var options = { method: 'GET',
  url: 'https://www.hltv.org/matches/2332961/cloud9-vs-infinity-esl-pro-league-season-9-americas',
};
 
request(options, function (error, response, body) {
  if (error) throw new Error(error);
  fs.writeFile('hltv.html',body)
})
var odds = []
var teamAodds = 0;
var teamBodds = 0;
function HTLVscrape(){
    var $ = cheerio.load(fs.readFileSync('hltv.html'));
    var teamA = $(".team").children(".team1-gradient").children(".teamName").text().trim();
$(".betting_provider").children(".odds-cell").each(function(){
odds.push($(this).text())
})
j=0;
for(let i=0; i<odds.length;i++){
teamAodds += parseInt(odds[i]);
i++;
i++;
teamBodds += parseInt(odds[i]);
j++;
}   
    teamAodds /= j
    teamBodds /= j
    teamBodds = teamBodds.toFixed(2);
    var time = $(".time").attr("data-unix")
    console.log(teamA)
}

HTLVscrape()