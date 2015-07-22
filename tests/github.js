var Test = require("../lib/example-base-test-class");

module.exports = new Test({

  "Load TestArmada GitHub page": function (client) {
    client
      .url("https://github.com/TestArmada")
      .assert.elContainsText(".org-name", "TestArmada")
  },

  "Navigate to magellan-nightwatch repo": function (client) {
    client
      .clickEl("[href='/TestArmada/magellan-nightwatch']")
      .assert.elContainsText(".repository-description", "Nightwatch.js adapter for Magellan")
  }

});