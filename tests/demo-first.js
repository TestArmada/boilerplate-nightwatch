var Test = require("../lib/example-base-test-class");

module.exports = new Test({

  "Load demo page": function (client) {
    client
      .url("http://127.0.0.1:1337/demo-first");
  },

  "Verify all cities": function (client) {
    client
      .assert.elContainsText("#tokyo", "Tokyo")
      .assert.elContainsText(".city:eq(1) p:eq(1)", "Europe");
  }

});
