var url = require("url");

module.exports = {
  url: function () {
    return url.format({
      protocol: "http",
      hostname: process.env.MOCK_HOSTNAME || this.api.drydock.ip,
      port: this.api.drydock.port,
      pathname: "/demo-second"
    });
  },

  sections: {
    beijing: {
      selector: "body div.city",
      elements: {
        title: {
          selector: "#beijing"
        },
        description: {
          selector: "#description"
        },
        content: {
          selector: "#content"
        },
        input: {
          selector: "#inp"
        }
      }
    }
  }
};
