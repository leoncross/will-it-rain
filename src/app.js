var RainCheck = require ('./rainCheck.js')
var OpenWeatherAPI = require ('./openWeatherAPI.js')
var interface = require ('./interface.js')

api = new OpenWeatherAPI()
rain = new RainCheck(api)
