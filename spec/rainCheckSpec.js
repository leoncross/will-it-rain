describe('RainCheck', function () {

  var RainCheck = require('../src/rainCheck.js')
  var sinon = require('sinon');
  var raincheck

  beforeEach(function() {
    raincheck = new RainCheck()
  })

  describe('kelvinToCelsius', function () {
    it('converts kelvin into a celsius', function () {
      expect(raincheck.kelvinToCelsius(282.15)).toEqual(9)
    })
  })

  
})