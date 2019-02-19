function RainCheck (weatherAPI) {
  this.weatherAPI = weatherAPI
}

RainCheck.prototype.kelvinToCelsius = function (number) {
  console.log(this.weatherAPI)
  return number - 273.15
}

RainCheck.prototype.saveLocation = function (location) {
  this.location = location
  console.log('location: ' + this.location)
}

RainCheck.prototype.callAPI = function () {
  return this.weatherAPI.callAPI(this.location)
}

RainCheck.prototype.collectData = function () {
  this.weatherData = this.weatherAPI.returnResult()
}

RainCheck.prototype.cleanData = function () {
  this.result = []
  for (let i = 0; i < 3; i++) {
    this.result.push(this.weatherData['list'][i]['weather'][0]['main'])
  }
}

RainCheck.prototype.rainOrShine = function () {
  let counter = 0
  for (let i = 0; i < this.result.length; i++) {
    if (this.result[i] === 'Rain') {
      counter += 1
    }
  }
  return counter
}

module.exports = RainCheck
