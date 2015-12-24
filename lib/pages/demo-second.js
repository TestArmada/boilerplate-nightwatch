module.exports = {
  url: "http://127.0.0.1:1337/demo-second",

  sections: {
    beijing: {
      selector: "body div:nth-of-type(1)",
      elements: {
        title: {
          selector: "#beijing"
        },
        description: {
          selector: "body div:nth-of-type(1) p:nth-of-type(1)"
        },
        content: {
          selector: "body div:nth-of-type(1) p:nth-of-type(2)"
        }
      }
    }
  }
};
