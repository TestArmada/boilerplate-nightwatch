var Test = require("../lib/example-base-test-class");

module.exports = new Test({
  "@tags": ["mweb"],

  "Load goole page": function (client) {
    client
      .url("http://www.google.com");
  },

  "wait for lage load": function (client) {
    client
      .getEl("[name='q']")
      .getEls("[name='q']", function (els) {
        console.log(els);
      });
  },

  "type search term": function (client) {
    client
      .setElValue("[name='q']", "xixixix")
      .clearElValue("[name='q']")
      .setElValue("[name='q']", "hahaha")
      .clickEl("#tsbb");
  }
});
