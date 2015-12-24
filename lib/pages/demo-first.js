module.exports = {
  url: "http://127.0.0.1:1337/demo-first",

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
      selector: "body div:nth-of-type(4)",
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
        .waitForElementVisible('@link')
        .click('@link');

      return this;
    }
  }]
};
