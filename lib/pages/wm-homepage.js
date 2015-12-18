module.exports = {
  url: "http://www.walmart.com",
  
  sections: {
    header: {
      selector: ".header-wrapper",
      sections: {
        search: {
          selector: ".header-searchbar-wrapper",
          elements: {
            searchBar: {
              selector: "#search"
            },
            searchBarSubmit: {
              selector: ".searchbar-submit"
            }
          }
        }
      }
    }
  },

  commands: [{
    search: function (query) {
      var searchSec = this.section.header.section.search;
      searchSec
        .waitForElementVisible('@searchBar')
        .setValue('@searchBar', query)
        .click('@searchBarSubmit');

      return this;
    }
  }]
};
