const cheerio = require("cheerio");
const fs = require('file-system');
const request = require("request");
 
// var options = { method: 'GET',
//   url: 'https://www.hltv.org/matches/2332980/order-vs-chiefs-esl-pro-league-season-9-asia',
// };
 
// request(options, function (error, response, body) {
//   if (error) throw new   Error(error);
//   fs.writeFile('hltv2.html',body)
// })

function HTLVscrape(){
    var $ = cheerio.load(fs.readFileSync('hltv.html')); 
    teamBImg = $(".team").children(".team2").attr("src")
    console.log(teamBImg)
    
}

HTLVscrape()