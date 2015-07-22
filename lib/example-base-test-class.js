/*
 * This is an example "base class" from which your tests can inherit.
 * See /tests for examples of tests which inherit from this base class.
 * If you need a common setup/teardown (eg: for resetting the state of
 * a mock server, for example), put it in before() and after() in the base
 * class below. All inheritors will get this functionality.
 */

var Base = require("testarmada-magellan-nightwatch/lib/base-test-class");
var util = require("util");

var MyExampleBaseClass = function (steps) {
  // call super-constructor
  Base.call(this, steps);
};

util.inherits(MyExampleBaseClass, Base);

MyExampleBaseClass.prototype = {
  before: function (client) {
    // call super-before
    Base.prototype.before.call(this, client);
  },

  after: function (client, callback) {
    // call super-after
    Base.prototype.after.call(this, client, callback);
  },
 
  // Note: This method will not be mistaken by nightwatch for a step because
  // it is not enumerable (since it's on the prototype)
  getSiteURL: function () {
    return "http://www.walmart.com/";
  }
};

module.exports = MyExampleBaseClass;