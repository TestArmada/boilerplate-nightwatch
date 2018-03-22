var getDrydock = require("./../drydock/launch");
var logger = require("testarmada-nightwatch-extra/lib/util/logger").default;
var url = require("url");
var argv = require("yargs").argv;

module.exports = plugin = {
  name: "Drydock Plugin",

  before: function (globals) {
    return new Promise(function (resolve, reject) {
      globals.drydock = getDrydock(
        url.parse(globals.test_settings.launch_url).hostname,
        argv.mocking_port);

      globals.drydock.start(function () {
        logger.log(`[${plugin.name}] Drydock server started`);
        return resolve();
      });
    });

  },

  after: function (globals) {
    return new Promise(function (resolve, reject) {
      globals.drydock.stop(function () {
        logger.log(`[${plugin.name}] Drydock server terminated`);
        return resolve();
      });
    });
  }
};
