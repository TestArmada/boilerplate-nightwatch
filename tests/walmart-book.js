var Test = require("../lib/example-base-test-class");

module.exports = new Test({

  "Load homepage": function (client) {
    client.url(this.getSiteURL());
  },

  "Search for Sam Walton Book": function (client) {
    client
      .setElValue(".js-searchbar-input", "Sam Walton Made In America")
      .clickEl(".js-searchbar-submit")
  },

  "Check product description": function (client) {
    client
      .assert.elContainsText("[data-item-id='403453'] .tile-heading", "My Story")
      .assert.elContainsText("[data-item-id='403453'] .media-details", "Paperback")
  }


});