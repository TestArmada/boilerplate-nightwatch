/*
 * This is an example "base class" from which your tests can inherit.
 * See /tests for examples of tests which inherit from this base class.
 * If you need a common setup/teardown (eg: for resetting the state of
 * a mock server, for example), put it in before() and after() in the base
 * class below. All inheritors will get this functionality.
 */

var Base = require("testarmada-nightwatch-extra/lib/base-test-class");
var util = require("util");
var argv = require("yargs").argv;

var MyExampleBaseClass = function (steps) {
  // call super-constructor
  Base.call(this, steps);
};

util.inherits(MyExampleBaseClass, Base);

MyExampleBaseClass.prototype = {
  // Note: This method will not be mistaken by nightwatch for a step because
  // it is not enumerable (since it's on the prototype)
  getSiteURL: function () {
    // android doesn't recognize localhost or mapping in the host files
    // use 10.0.2.2 instead 
    var host = process.env.ANDROID_OPEN_URL ? process.env.ANDROID_OPEN_URL : this.client.launchUrl;
    return host + ":" + argv.mocking_port;
  }
};

module.exports = MyExampleBaseClass;
