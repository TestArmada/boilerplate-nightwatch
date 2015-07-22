var Test = require("../lib/example-base-test-class");

module.exports = new Test({

  "Load homepage": function (client) {
    client.url(this.getSiteURL());
  },

  "Verify all departments dropdown exists": function (client) {
    client.assert.elContainsText(".js-global-lefthand-nav", "Departments");
  }

});