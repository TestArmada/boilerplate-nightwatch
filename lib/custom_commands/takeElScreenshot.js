var jimp = require("jimp");
var path = require("path");
var util = require("util");

var GetEl = require("testarmada-nightwatch-extra/lib/commands/getEl");
var selectorUtil = require("testarmada-nightwatch-extra/lib/util/selector").default;
var settings = require("testarmada-nightwatch-extra/lib/settings").default;

var TakeElScreenshot = function () {
  GetEl.call(this);
  this.cmd = "takeelscreenshot";
};

util.inherits(TakeElScreenshot, GetEl);

TakeElScreenshot.prototype.do = function (magellanSel) {
  var self = this;
  var now = (new Date()).getTime();
  this.time.executeAsyncTime = now - self.startTime;

  var sel = "[" + this.selectorPrefix + "=" + magellanSel + "]";

  this.client.api.getLocation(sel, function (location) {
    self.client.api.getElementSize(sel, function (size) {
      self.time.seleniumCallTime = (new Date()).getTime() - now;

      self.client.api
        .screenshot(false, function (result) {
          jimp.read(new Buffer(result.value, "base64"), function (err, image) {

            if (err) {
              self.fail();
            }

            image.crop(
              location.value.x,
              location.value.y,
              size.value.width,
              size.value.height)
              .write(path.resolve(settings.screenshotPath + path.sep + self.filename), function () {
                self.pass();
              });
          });
        });
    });
  });
};

TakeElScreenshot.prototype.injectedJsCommand = function ($el) {
  return "return $el[0].getAttribute('data-magellan-temp-automation-id')";
};

TakeElScreenshot.prototype.command = function (selector, filename, cb) {
  this.selector = selectorUtil.normalize(selector);
  this.filename = filename;
  this.cb = cb;

  this.successMessage = `Screenshot for selector <${this.selector}> is taken after %d milliseconds`;
  this.failureMessage = `Failed to take screenshot for selector <${this.selector}> after %d milliseconds`;

  this.startTime = (new Date()).getTime();

  // Track how many times we've seen selector as :visible
  this.seenCount = 0;
  this.decide();
  this.checkConditions();

  return this;
};

module.exports = TakeElScreenshot;