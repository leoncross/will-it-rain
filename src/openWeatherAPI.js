const fetch = require('node-fetch');

function OpenWeatherAPI () {
  this.result
}

OpenWeatherAPI.prototype.callAPI = function (location) {
  var self = this
  fetch('https://api-handler.herokuapp.com/weather?location=' + location )
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
