var Test = require("../lib/example-base-test-class");

module.exports = new Test({

  "Load homepage": function (client) {
    client.url(this.getSiteURL());
  },

  "Verify Walmart logo is visible": function (client) {
    client.getEl(".logo");
  }

});