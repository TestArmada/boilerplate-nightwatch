var Test = require("../lib/example-base-test-class");

module.exports = new Test({

  "Load walmart home page": function (client) {
    client
      .url("http://www.walmart.com")
      .assert.elContainsText(".footer-copyright-text", "Walmart Stores")
  },

  "Navigate to cart": function (client) {
    client
      .clickEl(".header-cart a")
      .assert.elContainsText(".cart-list-title", "Your cart");
  }

});
