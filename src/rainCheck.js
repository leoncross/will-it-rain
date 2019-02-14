function RainCheck (weatherAPI) {
  this.weatherAPI = weatherAPI
  this.location
  this.weatherData
}

RainCheck.prototype.kelvinToCelsius = function (number) {
  return number - 273.15
}

RainCheck.prototype.saveLocation = function (location) {
  this.location = location
}

RainCheck.prototype.callAPI = function () {
  return this.weatherAPI.callAPI(this.location)
}

RainCheck.prototype.collectData = function () {
  this.weatherData = this.weatherAPI.returnResult()
}

module.exports = RainCheck
