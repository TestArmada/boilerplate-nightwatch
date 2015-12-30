var Test = require("../lib/example-base-test-class");
var td = require("dpro").drydock;

module.exports =
  new Test(
    [td.tokyo, td.europe, td.beijing],
    function (tokyo, europe, beijing) {
      return {
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
            .assert.elContainsText("#tokyo", tokyo.name)
            .assert.elContainsText(".city:eq(1) p:eq(1)", europe);
        },

        "Jump to demo second page": function (client) {
          client
            .page["demo-first"]()
            .jumpToSecondDemo();
        },

        "Verify cities on second page": function (client) {
          var ds = client.page["demo-second"]();

          ds.section.beijing
            .getEl('@title')
            .assert.elContainsText("@title", beijing.name)
            .assert.elContainsText("@description", beijing.country)
            .assert.elContainsText("@content", beijing.description);

          client.end();
        }

      }
    }
  );
