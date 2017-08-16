const startAppium = require("testarmada-nightwatch-extra/lib/appium/start");
const stopAppium = require("testarmada-nightwatch-extra/lib/appium/stop");

module.exports = {
  before: function (callback) {
    startAppium(this, this.test_settings, callback);

  },

  after: function (callback) {
    stopAppium(this, callback);
  }
}; 