var Test = require("../lib/example-base-test-class");

module.exports = new Test({
  "@tags": ["prodb", "web"],

  "It should set the prodenv cookie": function (client) {
    client
      .setDproCookies('https://www.walmart.com')
      .waitForElementVisible('#global-search-input', 500)
      .getCookie('SENV', function(response){
        client.assert.equal(response.value, 'prodb');
        return response.value;
      })
  },
});
