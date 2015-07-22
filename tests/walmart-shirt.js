var Test = require("../lib/example-base-test-class");

module.exports = new Test({

  "Load homepage": function (client) {
    client.url(this.getSiteURL());
  },

  "Search for short sleeve shirt": function (client) {
    client
      .setElValue(".js-searchbar-input", "George Men's Short Sleeve Polo")
      .clickEl(".js-searchbar-submit")
  },

  "Check product description": function (client) {
    client
      .assert.elContainsText("[data-item-id='23954225'] .js-product-title", "George Men's Short Sleeve Polo")
  },

  "Click thru to product page": function (client) {
    client
      .clickEl("[data-item-id='23954225'] a.js-product-title");
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