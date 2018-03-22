const extraGlobals = require("testarmada-nightwatch-extra/lib/globals");

module.exports = {
  before: function (callback) {
    extraGlobals.before.apply(this, [callback]);
  },

  after: function (callback) {
    extraGlobals.after.apply(this, [callback]);
  },

  beforeEach: function (browser, callback) {
    extraGlobals.beforeEach.apply(this, [browser, callback]);
  },

  afterEach: function (browser, callback) {
    extraGlobals.afterEach.apply(this, [browser, callback]);
  }
};