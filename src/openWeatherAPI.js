// require('dotenv').config()
const fetch = require('node-fetch');

function OpenWeatherAPI () {
  this.result
}

// 'http://api.openweathermap.org/data/2.5/forecast?q=' + location + ',uk&APPID=' + process.env.API_Key

OpenWeatherAPI.prototype.callAPI = function (location) {
  var self = this

  fetch('https://data.cityofnewyork.us/resource/swhp-yxa4.json')
    .then(data => data.json())
    .then(data => {
      let promise = new Promise(function(resolve, reject) {
        setTimeout(() => resolve("done!"), 500);
      });
        promise.then(
          result => returnResults(data, self),
        )
    })
    .catch(err => console.log(err));

    function returnResults (data, self) {
      console.log('complete')
      self.saveResult(data)
    }
}

OpenWeatherAPI.prototype.saveResult = function (data) {
  this.result = data
}

OpenWeatherAPI.prototype.printResult = function () {
  console.log(this.result)
}

module.exports = OpenWeatherAPI

// api = new OpenWeatherAPI
// api.callAPI('london')
