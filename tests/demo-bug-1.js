var Test = require("../lib/example-base-test-class");

module.exports = new Test({
  tags: ["smoke", "regression"],

  "Load demo page": function (client) {
    client
      .url(this.getSiteURL() + "/demo-first");
  },

  "Verify all cities": function (client) {
    client
      .assert.elContainsText("#tokyo", "Tokyo")
      .assert.elContainsText(".city:eq(1) p:eq(1)", "Europe");
  }

});
