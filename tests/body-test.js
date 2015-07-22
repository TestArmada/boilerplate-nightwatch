var Test = require("../lib/example-base-test-class");

module.exports = new Test({

  "Load homepage": function (client) {
    client.url(this.getSiteURL());
  },

  "Verify body is visible": function (client) {
    client.getEl("body");
  }

});