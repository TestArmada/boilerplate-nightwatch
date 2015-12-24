var url = require("url");

module.exports = {
  url: function () {
    return url.format({
      protocol: "http",
      hostname: this.api.drydock.ip,
      port: this.api.drydock.port,
      pathname: "/demo-second"
    });;
  },

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
