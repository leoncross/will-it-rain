# will-it-rain
var RainCheck = require('./src/rainCheck.js')
var OpenWeatherAPI = require('./src/openWeatherAPI')

weather = new OpenWeatherAPI
rain = new RainCheck(weather)

rain.callAPI()


# instructions

call npm run bundle when any changes have been made
