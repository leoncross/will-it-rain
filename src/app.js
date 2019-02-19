var RainCheck = require('./rainCheck.js')
var OpenWeatherAPI = require('./openWeatherAPI.js')
var WeatherInterface = require('./weatherInterface.js')

var weatherInterface = new WeatherInterface()
var api = new OpenWeatherAPI(weatherInterface)
var rain = new RainCheck(api)
