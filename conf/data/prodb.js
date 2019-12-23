"use strict";
module.exports = {
  cookies: [
    {
      name: "SENV",
      value: "prodb",
      path: "/",
      domain: "walmart.com"
    },
    // Add the cookies required for your tests
    {
      name: "useCartA",
      value: "true",
      path: "/",
      domain: "walmart.com"
    }
  ]
};
