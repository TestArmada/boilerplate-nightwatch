var util = require("util");
var BaseReporter = require("testarmada-magellan").Reporter;

var Reporter = function () {
  this.reports = [];
};

util.inherits(Reporter, BaseReporter);

Reporter.prototype.listenTo = function (testRun, source) {
  var self = this;

  source.on("message", function (message) {
    if (message.type === "performance-metrics") {
      self.reports.push(message);
    }
  });
};

Reporter.prototype.flush = function () {
  if (this.reports.length > 0) {
    console.log("");
    console.log("---------------------------------------")
    console.log("Gathered performance metrics: ")

    /* 
    { type: 'performance-metrics',
    url: 'http://www.walmart.com/search/?query=sam%20walton%20made%20in%20america',
    metrics: 
     [ 'Page Load (DOM Ready): 1700',
       'Full Page Load : -1442448691798',
       'Number of Requests 25' ] }
  Load Time :  [ 'Page Load (DOM Ready): 1700',
    'Full Page Load : -1442448691798',
    'Number of Requests 25' ]
    */

    this.reports.forEach(function (result) {
      console.log("---------------------------------------")
      console.log("");
      console.log("url: " + result.url);
      console.log("metrics:");
      console.log(JSON.stringify(result.metrics, null, 2));
    });
  } else {
    console.log("Performance metrics reporter has no metrics to show.");
  }

};

module.exports = Reporter;