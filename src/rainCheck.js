require('dotenv').config()
var request = require('request');

function RainCheck () {
  this.location = ''
}

RainCheck.prototype.kelvinToCelsius = function (number) {
  return number - 273.15
}

RainCheck.prototype.saveLocation = function (location) {
  this.location = location
}
