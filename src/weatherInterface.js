var $ = require('jquery')

$(document).ready(function () {
  console.log('ready!')
  $('#main').text('Hello!')

  $('#search').click(function () {
    $('#result').text('Loading...')
    rain.saveLocation($('#searchBox').val())
    rain.callAPI()
  })
})

function Interface () {

}
Interface.prototype.displayData = function () {
  try {
    console.log('API called')
    rain.collectData()
    rain.cleanData()
    rain.rainOrShine()
    console.log(rain.result)
    if (rain.result.includes('Rain')) {
      $('#result').text('Yes! Bring an umbrella!')
    } else {
      $('#result').text("No rain expected! You're good!")
    }
  } catch (err) {
    $('#result').text('An error occurred, please try again')
    console.log('error: ' + err)
  }
}

module.exports = Interface
