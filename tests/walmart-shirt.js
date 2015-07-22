var Test = require("../lib/example-base-test-class");

module.exports = new Test({

  "Search for short sleeve shirt": function (client) {
    client
      .resizeWindow(1280, 1024)
      .url("http://www.walmart.com/search/?query=George%20Men%27s%20Short%20Sleeve%20Polo")
  },

  "Check product description": function (client) {
    client
      .assert.elContainsText("[data-item-id='23954225'] .js-product-title", "George Men's Short Sleeve Polo")
  },

  "Click thru to product page": function (client) {
    client
      .clickEl("[data-item-id='23954225'] .product-image")
      .pause(5000)
  },

  "Check product details": function(client) {
    client
      .assert.elContainsText(".product-short-description", "Flat knit collar and cuffs");
  },

  "Check default color": function(client) {
    client
      .assert.elContainsText("[data-id='actual_color'] .variant-label", "Dk Navy")
  },

  "Pick the blue shirt": function(client) {
    client
      .clickEl("[data-id='actual_color-luvyoublue']")
      .assert.elContainsText("[data-id='actual_color'] .variant-label", "Luv You Blue")
  }


});