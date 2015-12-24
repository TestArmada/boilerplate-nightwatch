var Test = require("../lib/example-base-test-class");

module.exports = new Test({
  "Load demo first page": function (client) {
    var df = client.page["demo-first"]();

    df
    // open url once
      .navigate()
      .api.resizeWindow(1200, 800);
  },

  "Verify all cities on first page": function (client) {
    var df = client.page["demo-first"]();
    // no need to call `navigate`
    df
      .assert.elContainsText("#tokyo", "Tokyo")
      .assert.elContainsText(".city:eq(1) p:eq(1)", "Europe");
  },

  "Jump to demo second page": function (client) {
    client
      .page["demo-first"]()
      .jumpToSecondDemo();
  },

  "Verify cities on second page": function (client) {
    var ds = client.page["demo-second"]();

    ds.section.beijing
      .waitForElementVisible('@title')
      .assert.containsText("@title", "Beijing")
      .assert.containsText("@description", "China")
      .assert.containsText("@content", "It is the most populous city in the China");

    client.end();
  }

});
