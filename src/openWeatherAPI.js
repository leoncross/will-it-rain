require('dotenv').config()
const fetch = require('node-fetch');

function OpenWeatherAPI () {
  this.result
}


OpenWeatherAPI.prototype.callAPI = function (location) {
  var self = this
  fetch('http://api.openweathermap.org/data/2.5/forecast?q=' + location + ',uk&APPID=' + process.env.API_KEY)
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
      self.result = data
    }
}

OpenWeatherAPI.prototype.returnResult = function () {
  return this.result
}

module.exports = OpenWeatherAPI

console.log(process.env.API_KEY)
