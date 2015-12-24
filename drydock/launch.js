var path = require("path");
var Drydock = require("drydock");
var drydock = new Drydock({
  port: 1337,
  ip: "0.0.0.0",
  verbose: false,
  initialState: {},
  cors: true
});

drydock.htmlRoute({
  name: "demo-first",
  method: "GET",
  path: "/demo-first",
  handlers: {
    "get-cities": {
      description: "Return three cities",
      handler: function (request) {

        return '<!DOCTYPE html>\n<html lang=en-us>\n<head>\n<style>.city{float:left;margin:5px;padding:15px;width:300px;height:300px;border:1px solid black}</style>\n</head>\n<body>\n<h1>Responsive Web Design Demo</h1>\n<div class=city>\n<h2 id=\"london\">London</h2>\n<p>London is the capital city of England.</p>\n<p>It is the most populous city in the United Kingdom,\nwith a metropolitan area of over 13 million inhabitants.</p>\n</div>\n<div class=city>\n<h2 id=\"paris\">Paris</h2>\n<p>Paris is the capital of France.</p>\n<p>The Paris area is one of the largest population centers in Europe,\nwith more than 12 million inhabitants.</p>\n</div>\n<div class=city>\n<h2 id=\"tokyo\">Tokyo</h2>\n<p>Tokyo is the capital of Japan.</p>\n<p>It is the center of the Greater Tokyo Area,\nand the most populous metropolitan area in the world.</p>\n</div>\n<div class=city><a id=\"gotoseconddemo\" href=\"/demo-second\">jump to second</a></div></body>\n</html>';;
      }
    }
  }
});

drydock.htmlRoute({
  name: "demo-second",
  method: "GET",
  path: "/demo-second",
  handlers: {
    "get-city": {
      description: "Return one city",
      handler: function (request) {

        return '<!DOCTYPE html>\n<html lang="en-us">\n<head>\n<style>\n.city {\n    float: left;\n    margin: 5px;\n    padding: 15px;\n    width: 300px;\n    height: 300px;\n    border: 1px solid black;\n} \n</style>\n</head>\n<body>\n\n<h1>Responsive Web Design Demo Part 2</h1>\n\n<div class="city">\n  <h2 id="beijing">Beijing</h2>\n  <p>Beijing is the capital city of China.</p>\n  <p>It is the most populous city in the China,\n  with a metropolitan area of over 35 million inhabitants.</p>\n</div>\n\n</body>\n</html>';
      }
    }
  }
});

if (require.main === module) {
  drydock.start();
} else {
  module.exports = drydock;
}
