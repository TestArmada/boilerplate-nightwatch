module.exports = {
  url: "",

  sections: {
    buyingTable: {
      selector: ".product-buying-table",
      elements: {
        mainPrice: {
          selector: ".product-buying-table .price-display"
        }
      }
    },
    aboutProduct: {
      selector: ".about-product-section",
      elements: {
        specification: ".product-specs-section"
      }
    }
  }
};
