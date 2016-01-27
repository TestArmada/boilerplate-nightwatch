module.exports = {
  "drydock": {
    "tokyo": {
      "name": "Tokyo"
    },
    "europe": "Europe",
    "beijing": {
      "name": "Beijing",
      "country": "China",
      "description": "It is the most populous city in the China"
    },
    "timestamp": function () {
      return new Date().getTime();
    }
  },
  "loop": {
    "cities": [{
      "tokyo": {
        "name": "Tokyo"
      }
    }, {
      "beijing": {
        "name": "Beijing"
      }
    }]
  }
}
