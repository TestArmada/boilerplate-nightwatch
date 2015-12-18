module.exports = {
  url: "",

  sections: {
    resultList: {
      selector: "#tile-container",
      elements: {
        first: {
          selector: "#tile-container .js-tile:nth-child(1) .js-product-title"
        }
      }
    }
  },

  commands: [{
    checkFirstItem: function () {
      var results = this.section.resultList;
      results
        .waitForElementVisible('@first')
        .click('@first');

      return this;
    }
  }]
};
