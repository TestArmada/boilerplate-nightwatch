var Test = require("../lib/example-base-test-class");

module.exports = new Test({
  "Load walmart home page": function (client) {
    var hp = client.page["wm-homepage"]();
    hp
    // open url once
      .navigate()
      .api.resizeWindow(1200, 800)
      .assert.title('Walmart.com: Save money. Live better.')
  },

  "Search for tv": function (client) {
    var hp = client.page["wm-homepage"]();
    // no need to call `navigate`
    hp
      .search('tv');
  },

  "Jump to first item listed on search result page": function (client) {
    client.page["wm-search"]()
      .checkFirstItem();
  },

  "Verify item detail on item page": function (client) {
    var ip = client.page["wm-itempage"]();

    ip.section.buyingTable
      .assert.containsText('@mainPrice', '$159');

    ip.section.aboutProduct
      .assert.containsText('@specification', 'Specifications')
      .waitForElementVisible('@specification')
      .assert.containsText('@specification', 'Remote Included: Yes');

    client.end();
  }

});
