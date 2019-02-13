require('dotenv').config()
var request = require('request');

function RainCheck () {
}

RainCheck.prototype.kelvinToCelsius = function (number) {
  return number - 273.15
}

module.exports = RainCheck
