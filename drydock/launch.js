var path = require("path");
var Drydock = require("drydock");

var drydock = function (host, port) {
  var d = new Drydock({
    port: port || 1337,
    ip: host || "127.0.0.1",
    verbose: false,
    initialState: {},
    cors: true
  });

  d.htmlRoute({
    name: "demo-first",
    method: "GET",
    path: "/demo-first",
    handlers: {
      "get-cities": {
        description: "Return three cities",
        handler: function (request) {

          return '<!DOCTYPE html>\n<html lang=en-us>\n<head>\n<style>.city{float:left;margin:5px;padding:15px;width:300px;height:300px;border:1px solid black}</style>\n</head>\n<body>\n<h1>Responsive Web Design Demo</h1>\n<div class=city>\n<h2 id=\"london\">London</h2>\n<p>London is the capital city of England.</p>\n<p>It is the most populous city in the United Kingdom,\nwith a metropolitan area of over 13 million inhabitants.</p>\n</div>\n<div class=city>\n<h2 id=\"paris\">Paris</h2>\n<p>Paris is the capital of France.</p>\n<p>The Paris area is one of the largest population centers in Europe,\nwith more than 12 million inhabitants.</p>\n</div>\n<div class=city>\n<h2 id=\"tokyo\">Tokyo</h2>\n<p>Tokyo is the capital of Japan.</p>\n<p>It is the center of the Greater Tokyo Area,\nand the most populous metropolitan area in the world.</p>\n</div>\n<div id="jump" class=city><a id=\"gotoseconddemo\" href=\"/demo-second\">jump to second</a></div></body>\n</html>';;
        }
      }
    }
  });

  d.htmlRoute({
    name: "demo-second",
    method: "GET",
    path: "/demo-second",
    handlers: {
      "get-city": {
        description: "Return one city",
        handler: function (request) {

          return '<!DOCTYPE html>\n<html lang=en-us>\n<head>\n<style>.city{float:left;margin:5px;padding:15px;width:300px;height:300px;border:1px solid black}</style>\n</head>\n<body>\n<h1>Responsive Web Design Demo Part 2</h1>\n<div class=city>\n<h2 id=beijing>Beijing</h2>\n<p id=description>Beijing is the capital city of China.</p>\n<p id=content>It is the most populous city in the China, with a metropolitan area of over 35 million inhabitants.</p>\n<input type=text id="inp">\n</div>\n</body>\n</html>';
        }
      }
    }
  });

  return d;
};


if (require.main === module) {
  new drydock().start();
} else {
  module.exports = drydock;
}
