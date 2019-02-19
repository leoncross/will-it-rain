const fetch = require('node-fetch');

function OpenWeatherAPI (interface) {
  this.interface = interface
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
    self.result = data
    self.interface.displayData()
  }
}

OpenWeatherAPI.prototype.returnResult = function () {
  return this.result
}

module.exports = OpenWeatherAPI
