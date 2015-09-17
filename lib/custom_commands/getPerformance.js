var util = require("util");
var EventEmitter = require("events").EventEmitter;


function PerformanceMetrics() {
    EventEmitter.call(this);
}

util.inherits(PerformanceMetrics, EventEmitter);

PerformanceMetrics.prototype.command = function(cb) {
    this.cb = cb;
    var self = this;
    this.client.api
        .execute(function() {
                try {
                    var performanceMetrics =[];
                    var loadTime =  window.performance.timing.domContentLoadedEventEnd - window.performance.timing.fetchStart ;
                    var fullPageLoad = window.performance.timing.loadEventEnd - window.performance.timing.fetchStart ;
                    var numOfRequests = window.performance.getEntries().length;

                     performanceMetrics.push("Page Load (DOM Ready): " + loadTime);
                     performanceMetrics.push("Full Page Load : " + fullPageLoad);
                     performanceMetrics.push("Number of Requests " + numOfRequests);

                     return performanceMetrics;

                } catch (e) {
                    return "Couldnt get timing, got exception instead : " + e;
                }
            }, [],
            function(result) {
                cb.call(this, result.value);
                console.log('Load Time : ', result.value);
                //call any callback here.
                 self.emit("complete");
                
            });




    return this;
};

module.exports = PerformanceMetrics;