const cheerio = require("cheerio");
const fs = require('file-system');
const request = require("request");
 
// var options = { method: 'GET',
//   url: 'https://www.hltv.org/matches',
// };
 
// request(options, function (error, response, body) {
//   if (error) throw new   Error(error);
//   fs.writeFile('hltv2.html',body)
// })

function HTLVscrape(){
    var $ = cheerio.load(fs.readFileSync('hltv2.html')); 
    var teamBImg = [];
    $(".upcoming-match.standard-box").each(function(element){
        teamBImg.push($(element).text());
    })
    console.log(teamBImg)
    
}

HTLVscrape()