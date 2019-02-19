var RainCheck = require ('./rainCheck.js')
var OpenWeatherAPI = require ('./openWeatherAPI.js')
var Interface = require ('./interface.js')

interface = new Interface
api = new OpenWeatherAPI(interface)
rain = new RainCheck(api)
