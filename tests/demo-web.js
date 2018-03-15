var Test = require("../lib/example-base-test-class");
var dpro = require("dpro");

module.exports = new Test({
  tags: ["pageobject", "web"],

  "Load demo first page": function(client) {
    var df = client.page["demo-first"]();

    df
    // open url once
      .navigate()
      .api.resizeWindow(1200, 800);
  },

  "Verify all cities on first page": function(client) {
    var df = client.page["demo-first"]();
    // no need to call `navigate`
    df
      .assert.elContainsText("#tokyo", "Tokyo")
      .assert.elContainsText(".city:eq(1) p:eq(1)", "Europe");
  },

  "Jump to demo second page": function(client) {
    client
      .page["demo-first"]()
      .jumpToSecondDemo();
  },

  "Verify cities on second page": function(client) {
    var ds = client.page["demo-second"]();

    ds.section.beijing
      .getEl('@title')
      .assert.elContainsText("#beijing", "Beijing")
      .assert.elContainsText("@description", "China")
      .assert.elContainsText("@content", "It is the most populous city in the China");
  },

  "Verify cities on second page - performance improvement": function(client) {
    var ds = client.page["demo-second"]();
    var beijing = ds.section.beijing;

    beijing
      .getEl(beijing.elements.title.selector)
      .assert.elContainsText(beijing.elements.title.selector,
        "Beijing")
      .assert.elContainsText(beijing.elements.description.selector,
        "China")
      .assert.elContainsText(beijing.elements.content.selector,
        "It is the most populous city in the China");
  },

  "Verify cities on second page - maintenance improvement": function(client) {
    var ds = client.page["demo-second"]();
    var beijing = ds.section.beijing;
    
    beijing
      .getEl(beijing.elements.title.selector)
      .assert.elContainsText(beijing.elements.title.selector,
        dpro.beijing.title)
      .assert.elContainsText(beijing.elements.description.selector,
        dpro.beijing.description)
      .assert.elContainsText(beijing.elements.content.selector,
        dpro.beijing.content);
  }, 

  "Verify type in on second page": function(client) {
    var ds = client.page["demo-second"]();
    var beijing = ds.section.beijing;

    beijing
      .setElValue(beijing.elements.input.selector, "hahahaha")
      .assert.elContainsText(beijing.elements.title.selector,
        dpro.beijing.title);
  }
});
