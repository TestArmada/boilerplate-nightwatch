var Test = require("../lib/example-base-test-class");

module.exports = new Test({

  "Search for Sam Walton Book": function (client) {
    client
      .resizeWindow(1280, 1024)
      .url("http://www.walmart.com/search/?query=sam%20walton%20made%20in%20america")
  },

  "Check product description": function (client) {
    client
      .assert.elContainsText("[data-item-id='403453'] .tile-heading", "My Story")
      .assert.elContainsText("[data-item-id='403453'] .media-details", "Paperback")
  }


});