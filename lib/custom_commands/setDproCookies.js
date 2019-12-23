var config = require("dpro");
var util = require('util');
var events = require('events');

function SetDproCookies() {
  events.EventEmitter.call(this);
}

util.inherits(SetDproCookies, events.EventEmitter);

SetDproCookies.prototype.command = function(url, cb) {
  var self = this;
  this.client.api.url(url);
  config.cookies.forEach(this.client.api.setCookie)
  this.client.api.refresh(function() {
    if (cb) {
      cb.call(self.client.api);
    }

    self.emit('complete');
  })

  return this;
};

module.exports = SetDproCookies;
