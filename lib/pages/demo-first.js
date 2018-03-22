var url = require("url");

module.exports = {
  url: function () {
    return url.format({
      protocol: "http",
      hostname: process.env.MOCK_HOSTNAME || this.api.globals.drydock.ip,
      port: this.api.globals.drydock.port,
      pathname: "/demo-first"
    });
  },

  sections: {
    tokyo: {
      selector: "body div:nth-of-type(3)",
      elements: {
        title: {
          selector: "#tokyo"
        },
        description: {
          selector: "body div:nth-of-type(3) p:nth-of-type(1)"
        },
        content: {
          selector: "body div:nth-of-type(3) p:nth-of-type(2)"
        }
      }
    },
    jumptoseconddemo: {
      selector: "#jump",
      elements: {
        link: {
          selector: "#gotoseconddemo"
        }
      }
    }
  },

  commands: [{
    jumpToSecondDemo: function () {
      var link = this.section.jumptoseconddemo;
      link
        .getEl('@link')
        .clickEl('@link');

      return this;
    }
  }]
};
