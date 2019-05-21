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
    var maplist = [];   
    $(".map-stats-infobox-maps").children(".map-stats-infobox-mapname-container").children(".map-stats-infobox-mapname-holder").children(".mapname").each(function(){
        maplist.push($(this).text())
    })
    var winlist = [];
    $(".map-stats-infobox-winpercentage").each(function (){
        winlist.push($(this).text())
    })
    console.log(maplist.toString())
    console.log(winlist.toString())
    
}

HTLVscrape()