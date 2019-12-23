var Test = require("../lib/example-base-test-class");
var config = require("dpro");

module.exports = new Test({
  "@tags": ["prodb", "web"],

  "Load demo page": function (client) {
    client.url('https://www.walmart.com');
    config.cookies.forEach(client.setCookie)
    client
      .refresh() // Reload to use the cookies
      .waitForElementVisible('#global-search-input', 500)
  },

});
