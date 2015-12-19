module.exports = {
  url: "",

  sections: {
    resultList: {
      selector: "#tile-container",
      elements: {
        sceptre32inch: {
          selector: "#tile-container .js-tile[data-item-id='25059351'] .js-product-title"
        }
      }
    }
  },

  commands: [{
    checkFirstItem: function () {
      var results = this.section.resultList;
      results
        .waitForElementVisible('@sceptre32inch')
        .click('@sceptre32inch');

      return this;
    }
  }]
};
