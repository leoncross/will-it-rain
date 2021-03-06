describe('RainCheck', function () {

  var RainCheck = require('../src/rainCheck.js')

  var OpenWeatherAPIStub
  var raincheck

  var weatherSuccess = {
    "cod":"200",
    "message":0.0038,
    "cnt":40,
    "list":[
      {"dt":1550070000,"main":{"temp":286.12,"temp_min":283.79,"temp_max":286.12,"pressure":1037.83,"sea_level":1045.62,"grnd_level":1037.83,"humidity":65,"temp_kf":2.33},"weather":[{"id":803,"main":"Clouds","description":"broken clouds","icon":"04d"}],"clouds":{"all":56},"wind":{"speed":4.36,"deg":210.01},"sys":{"pod":"d"},"dt_txt":"2019-02-13 15:00:00"},
      {"dt":1550080800,"main":{"temp":282.32,"temp_min":280.77,"temp_max":282.32,"pressure":1037.67,"sea_level":1045.49,"grnd_level":1037.67,"humidity":68,"temp_kf":1.55},"weather":[{"id":802,"main":"Clouds","description":"scattered clouds","icon":"03n"}],"clouds":{"all":48},"wind":{"speed":3.68,"deg":201.503},"sys":{"pod":"n"},"dt_txt":"2019-02-13 18:00:00"},
      {"dt":1550091600,"main":{"temp":278.22,"temp_min":277.44,"temp_max":278.22,"pressure":1037.78,"sea_level":1045.73,"grnd_level":1037.78,"humidity":88,"temp_kf":0.78},"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"02n"}],"clouds":{"all":8},"wind":{"speed":3.46,"deg":194.001},"sys":{"pod":"n"},"dt_txt":"2019-02-13 21:00:00"},
      {"dt":1550102400,"main":{"temp":275.704,"temp_min":275.704,"temp_max":275.704,"pressure":1037.88,"sea_level":1045.93,"grnd_level":1037.88,"humidity":97,"temp_kf":0},"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01n"}],"clouds":{"all":0},"wind":{"speed":3.37,"deg":192},"sys":{"pod":"n"},"dt_txt":"2019-02-14 00:00:00"},
      {"dt":1550113200,"main":{"temp":274.642,"temp_min":274.642,"temp_max":274.642,"pressure":1037.62,"sea_level":1045.63,"grnd_level":1037.62,"humidity":100,"temp_kf":0},"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01n"}],"clouds":{"all":0},"wind":{"speed":2.87,"deg":189.001},"sys":{"pod":"n"},"dt_txt":"2019-02-14 03:00:00"},
      {"dt":1550124000,"main":{"temp":271.135,"temp_min":271.135,"temp_max":271.135,"pressure":1037.65,"sea_level":1045.69,"grnd_level":1037.65,"humidity":88,"temp_kf":0},"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01n"}],"clouds":{"all":0},"wind":{"speed":1.55,"deg":159.002},"sys":{"pod":"n"},"dt_txt":"2019-02-14 06:00:00"},
      {"dt":1550134800,"main":{"temp":275.359,"temp_min":275.359,"temp_max":275.359,"pressure":1037.7,"sea_level":1045.8,"grnd_level":1037.7,"humidity":93,"temp_kf":0},"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01d"}],"clouds":{"all":0},"wind":{"speed":2.91,"deg":154.502},"sys":{"pod":"d"},"dt_txt":"2019-02-14 09:00:00"},
      {"dt":1550145600,"main":{"temp":282.633,"temp_min":282.633,"temp_max":282.633,"pressure":1037.29,"sea_level":1045.14,"grnd_level":1037.29,"humidity":70,"temp_kf":0},"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01d"}],"clouds":{"all":0},"wind":{"speed":2.56,"deg":169.005},"sys":{"pod":"d"},"dt_txt":"2019-02-14 12:00:00"},
      {"dt":1550156400,"main":{"temp":284.197,"temp_min":284.197,"temp_max":284.197,"pressure":1035.88,"sea_level":1043.75,"grnd_level":1035.88,"humidity":61,"temp_kf":0},"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01d"}],"clouds":{"all":0},"wind":{"speed":3.35,"deg":182.501},"sys":{"pod":"d"},"dt_txt":"2019-02-14 15:00:00"},
      {"dt":1550167200,"main":{"temp":279.359,"temp_min":279.359,"temp_max":279.359,"pressure":1035.7,"sea_level":1043.52,"grnd_level":1035.7,"humidity":73,"temp_kf":0},"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01n"}],"clouds":{"all":0},"wind":{"speed":3.24,"deg":175.5},"sys":{"pod":"n"},"dt_txt":"2019-02-14 18:00:00"},
      {"dt":1550178000,"main":{"temp":276.505,"temp_min":276.505,"temp_max":276.505,"pressure":1035.47,"sea_level":1043.52,"grnd_level":1035.47,"humidity":96,"temp_kf":0},"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01n"}],"clouds":{"all":0},"wind":{"speed":3.37,"deg":177},"sys":{"pod":"n"},"dt_txt":"2019-02-14 21:00:00"},
      {"dt":1550188800,"main":{"temp":276.059,"temp_min":276.059,"temp_max":276.059,"pressure":1035,"sea_level":1042.92,"grnd_level":1035,"humidity":100,"temp_kf":0},"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01n"}],"clouds":{"all":0},"wind":{"speed":3.29,"deg":177.502},"sys":{"pod":"n"},"dt_txt":"2019-02-15 00:00:00"},
      {"dt":1550199600,"main":{"temp":275.591,"temp_min":275.591,"temp_max":275.591,"pressure":1034.41,"sea_level":1042.32,"grnd_level":1034.41,"humidity":100,"temp_kf":0},"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01n"}],"clouds":{"all":0},"wind":{"speed":3.01,"deg":184.001},"sys":{"pod":"n"},"dt_txt":"2019-02-15 03:00:00"},
      {"dt":1550210400,"main":{"temp":275.455,"temp_min":275.455,"temp_max":275.455,"pressure":1033.93,"sea_level":1041.92,"grnd_level":1033.93,"humidity":100,"temp_kf":0},"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01n"}],"clouds":{"all":0},"wind":{"speed":3.05,"deg":181.502},"sys":{"pod":"n"},"dt_txt":"2019-02-15 06:00:00"},
      {"dt":1550221200,"main":{"temp":278.38,"temp_min":278.38,"temp_max":278.38,"pressure":1033.91,"sea_level":1041.76,"grnd_level":1033.91,"humidity":95,"temp_kf":0},"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01d"}],"clouds":{"all":0},"wind":{"speed":3.58,"deg":185.003},"sys":{"pod":"d"},"dt_txt":"2019-02-15 09:00:00"},
      {"dt":1550232000,"main":{"temp":285.356,"temp_min":285.356,"temp_max":285.356,"pressure":1033.07,"sea_level":1040.8,"grnd_level":1033.07,"humidity":65,"temp_kf":0},"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01d"}],"clouds":{"all":0},"wind":{"speed":3.63,"deg":191.004},"sys":{"pod":"d"},"dt_txt":"2019-02-15 12:00:00"},
      {"dt":1550242800,"main":{"temp":286.642,"temp_min":286.642,"temp_max":286.642,"pressure":1031.45,"sea_level":1039.09,"grnd_level":1031.45,"humidity":58,"temp_kf":0},"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01d"}],"clouds":{"all":0},"wind":{"speed":4.11,"deg":196.001},"sys":{"pod":"d"},"dt_txt":"2019-02-15 15:00:00"},
      {"dt":1550253600,"main":{"temp":281.94,"temp_min":281.94,"temp_max":281.94,"pressure":1030.78,"sea_level":1038.55,"grnd_level":1030.78,"humidity":67,"temp_kf":0},"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01n"}],"clouds":{"all":0},"wind":{"speed":3.41,"deg":191.001},"sys":{"pod":"n"},"dt_txt":"2019-02-15 18:00:00"},
      {"dt":1550264400,"main":{"temp":278.36,"temp_min":278.36,"temp_max":278.36,"pressure":1030.33,"sea_level":1038.13,"grnd_level":1030.33,"humidity":87,"temp_kf":0},"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01n"}],"clouds":{"all":0},"wind":{"speed":3.67,"deg":195.001},"sys":{"pod":"n"},"dt_txt":"2019-02-15 21:00:00"},
      {"dt":1550275200,"main":{"temp":277.899,"temp_min":277.899,"temp_max":277.899,"pressure":1029.22,"sea_level":1037.14,"grnd_level":1029.22,"humidity":98,"temp_kf":0},"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01n"}],"clouds":{"all":0},"wind":{"speed":3.71,"deg":199.507},"sys":{"pod":"n"},"dt_txt":"2019-02-16 00:00:00"},
      {"dt":1550286000,"main":{"temp":278.428,"temp_min":278.428,"temp_max":278.428,"pressure":1028.25,"sea_level":1036.05,"grnd_level":1028.25,"humidity":98,"temp_kf":0},"weather":[{"id":801,"main":"Clouds","description":"few clouds","icon":"02n"}],"clouds":{"all":24},"wind":{"speed":3.81,"deg":206.5},"sys":{"pod":"n"},"dt_txt":"2019-02-16 03:00:00"},
      {"dt":1550296800,"main":{"temp":279.198,"temp_min":279.198,"temp_max":279.198,"pressure":1027.69,"sea_level":1035.41,"grnd_level":1027.69,"humidity":98,"temp_kf":0},"weather":[{"id":500,"main":"Rain","description":"light rain","icon":"10n"}],"clouds":{"all":36},"wind":{"speed":3.56,"deg":217},"rain":{"3h":0.01},"sys":{"pod":"n"},"dt_txt":"2019-02-16 06:00:00"},
      {"dt":1550307600,"main":{"temp":281.692,"temp_min":281.692,"temp_max":281.692,"pressure":1028.02,"sea_level":1035.73,"grnd_level":1028.02,"humidity":94,"temp_kf":0},"weather":[{"id":500,"main":"Rain","description":"light rain","icon":"10d"}],"clouds":{"all":8},"wind":{"speed":3.86,"deg":213.001},"rain":{"3h":0.04},"sys":{"pod":"d"},"dt_txt":"2019-02-16 09:00:00"},
      {"dt":1550318400,"main":{"temp":286.135,"temp_min":286.135,"temp_max":286.135,"pressure":1028.11,"sea_level":1035.71,"grnd_level":1028.11,"humidity":76,"temp_kf":0},"weather":[{"id":500,"main":"Rain","description":"light rain","icon":"10d"}],"clouds":{"all":56},"wind":{"speed":4.46,"deg":218.003},"rain":{"3h":0.03},"sys":{"pod":"d"},"dt_txt":"2019-02-16 12:00:00"},
      {"dt":1550329200,"main":{"temp":286.977,"temp_min":286.977,"temp_max":286.977,"pressure":1027.16,"sea_level":1034.71,"grnd_level":1027.16,"humidity":70,"temp_kf":0},"weather":[{"id":801,"main":"Clouds","description":"few clouds","icon":"02d"}],"clouds":{"all":12},"wind":{"speed":4.81,"deg":215.502},"rain":{},"sys":{"pod":"d"},"dt_txt":"2019-02-16 15:00:00"},
      {"dt":1550340000,"main":{"temp":283.829,"temp_min":283.829,"temp_max":283.829,"pressure":1026.93,"sea_level":1034.62,"grnd_level":1026.93,"humidity":81,"temp_kf":0},"weather":[{"id":801,"main":"Clouds","description":"few clouds","icon":"02n"}],"clouds":{"all":12},"wind":{"speed":3.81,"deg":207.004},"rain":{},"sys":{"pod":"n"},"dt_txt":"2019-02-16 18:00:00"},
      {"dt":1550350800,"main":{"temp":280.675,"temp_min":280.675,"temp_max":280.675,"pressure":1026.64,"sea_level":1034.36,"grnd_level":1026.64,"humidity":90,"temp_kf":0},"weather":[{"id":801,"main":"Clouds","description":"few clouds","icon":"02n"}],"clouds":{"all":20},"wind":{"speed":3.12,"deg":190.502},"rain":{},"sys":{"pod":"n"},"dt_txt":"2019-02-16 21:00:00"},
      {"dt":1550361600,"main":{"temp":278.796,"temp_min":278.796,"temp_max":278.796,"pressure":1025.61,"sea_level":1033.33,"grnd_level":1025.61,"humidity":97,"temp_kf":0},"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01n"}],"clouds":{"all":0},"wind":{"speed":3.23,"deg":172.003},"rain":{},"sys":{"pod":"n"},"dt_txt":"2019-02-17 00:00:00"},
      {"dt":1550372400,"main":{"temp":278.741,"temp_min":278.741,"temp_max":278.741,"pressure":1023.72,"sea_level":1031.42,"grnd_level":1023.72,"humidity":100,"temp_kf":0},"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01n"}],"clouds":{"all":0},"wind":{"speed":3.56,"deg":177.5},"rain":{},"sys":{"pod":"n"},"dt_txt":"2019-02-17 03:00:00"},
      {"dt":1550383200,"main":{"temp":278.632,"temp_min":278.632,"temp_max":278.632,"pressure":1021.84,"sea_level":1029.56,"grnd_level":1021.84,"humidity":99,"temp_kf":0},"weather":[{"id":801,"main":"Clouds","description":"few clouds","icon":"02n"}],"clouds":{"all":20},"wind":{"speed":4.01,"deg":172.004},"rain":{},"sys":{"pod":"n"},"dt_txt":"2019-02-17 06:00:00"},
      {"dt":1550394000,"main":{"temp":280.971,"temp_min":280.971,"temp_max":280.971,"pressure":1021.04,"sea_level":1028.7,"grnd_level":1021.04,"humidity":86,"temp_kf":0},"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01d"}],"clouds":{"all":0},"wind":{"speed":5.21,"deg":177},"rain":{},"sys":{"pod":"d"},"dt_txt":"2019-02-17 09:00:00"},
      {"dt":1550404800,"main":{"temp":285.198,"temp_min":285.198,"temp_max":285.198,"pressure":1020.21,"sea_level":1027.84,"grnd_level":1020.21,"humidity":65,"temp_kf":0},"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01d"}],"clouds":{"all":0},"wind":{"speed":6.41,"deg":191.503},"rain":{},"sys":{"pod":"d"},"dt_txt":"2019-02-17 12:00:00"},
      {"dt":1550415600,"main":{"temp":286.229,"temp_min":286.229,"temp_max":286.229,"pressure":1018.97,"sea_level":1026.6,"grnd_level":1018.97,"humidity":61,"temp_kf":0},"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"02d"}],"clouds":{"all":8},"wind":{"speed":6,"deg":200.005},"rain":{},"sys":{"pod":"d"},"dt_txt":"2019-02-17 15:00:00"},
      {"dt":1550426400,"main":{"temp":284.292,"temp_min":284.292,"temp_max":284.292,"pressure":1019.08,"sea_level":1026.66,"grnd_level":1019.08,"humidity":80,"temp_kf":0},"weather":[{"id":500,"main":"Rain","description":"light rain","icon":"10n"}],"clouds":{"all":56},"wind":{"speed":5.57,"deg":205.001},"rain":{"3h":0.02},"sys":{"pod":"n"},"dt_txt":"2019-02-17 18:00:00"},
      {"dt":1550437200,"main":{"temp":285.332,"temp_min":285.332,"temp_max":285.332,"pressure":1019.11,"sea_level":1026.69,"grnd_level":1019.11,"humidity":77,"temp_kf":0},"weather":[{"id":500,"main":"Rain","description":"light rain","icon":"10n"}],"clouds":{"all":88},"wind":{"speed":6.18,"deg":203.004},"rain":{"3h":0.05},"sys":{"pod":"n"},"dt_txt":"2019-02-17 21:00:00"},
      {"dt":1550448000,"main":{"temp":285.089,"temp_min":285.089,"temp_max":285.089,"pressure":1019.25,"sea_level":1026.96,"grnd_level":1019.25,"humidity":72,"temp_kf":0},"weather":[{"id":802,"main":"Clouds","description":"scattered clouds","icon":"03n"}],"clouds":{"all":32},"wind":{"speed":5.92,"deg":206.5},"rain":{},"sys":{"pod":"n"},"dt_txt":"2019-02-18 00:00:00"},
      {"dt":1550458800,"main":{"temp":283.812,"temp_min":283.812,"temp_max":283.812,"pressure":1019.14,"sea_level":1026.79,"grnd_level":1019.14,"humidity":72,"temp_kf":0},"weather":[{"id":802,"main":"Clouds","description":"scattered clouds","icon":"03n"}],"clouds":{"all":48},"wind":{"speed":4.9,"deg":207.502},"rain":{},"sys":{"pod":"n"},"dt_txt":"2019-02-18 03:00:00"},
      {"dt":1550469600,"main":{"temp":282.383,"temp_min":282.383,"temp_max":282.383,"pressure":1018.91,"sea_level":1026.59,"grnd_level":1018.91,"humidity":71,"temp_kf":0},"weather":[{"id":803,"main":"Clouds","description":"broken clouds","icon":"04n"}],"clouds":{"all":76},"wind":{"speed":3.96,"deg":201.501},"rain":{},"sys":{"pod":"n"},"dt_txt":"2019-02-18 06:00:00"},
      {"dt":1550480400,"main":{"temp":282.192,"temp_min":282.192,"temp_max":282.192,"pressure":1019.42,"sea_level":1027.15,"grnd_level":1019.42,"humidity":80,"temp_kf":0},"weather":[{"id":500,"main":"Rain","description":"light rain","icon":"10d"}],"clouds":{"all":88},"wind":{"speed":3.37,"deg":201.001},"rain":{"3h":0.19},"sys":{"pod":"d"},"dt_txt":"2019-02-18 09:00:00"},
      {"dt":1550491200,"main":{"temp":283.757,"temp_min":283.757,"temp_max":283.757,"pressure":1020.18,"sea_level":1027.82,"grnd_level":1020.18,"humidity":83,"temp_kf":0},"weather":[{"id":500,"main":"Rain","description":"light rain","icon":"10d"}],"clouds":{"all":92},"wind":{"speed":3.31,"deg":217.502},"rain":{"3h":0.22},"sys":{"pod":"d"},"dt_txt":"2019-02-18 12:00:00"}
    ],
    "city":{"id":2643743,"name":"London","coord":{"lat":51.5085,"lon":-0.1258},
    "country":"GB",
    "population":1000000}}

    var cleanedData = ['Clouds', 'Clouds', 'Clear']
    var cityNotFound = {"cod":"404","message":"city not found"}
    var inValidAPIKey = {"cod":401, "message": "Invalid API key. Please see http://openweathermap.org/faq#error401 for more info."}

  beforeEach(function() {

    function OpenWeatherAPIStub () {}
    OpenWeatherAPIStub.prototype = {
      callAPI () {},
      returnResult () {}
    }

    api = new OpenWeatherAPIStub
    rainCheck = new RainCheck(api)

  })

  describe('#kelvinToCelsius', function () {
    it('converts kelvin into a celsius', function () {
      expect(rainCheck.kelvinToCelsius(282.15)).toEqual(9)
    })
  })

  describe('#location', function () {
    it('records location given', function () {
      rainCheck.saveLocation('london')
      expect(rainCheck.location).toEqual('london')
    })
  })

  describe('#callAPI', function () {
    it('calls the API and returns data successfully', function () {
      spyOn(api, "callAPI").and.returnValue(weatherSuccess)
      expect(rainCheck.callAPI()).toEqual(weatherSuccess)
    })
  })

  describe('#collectData', function () {
    it('saves data in weatherData', function () {
      spyOn(api, "returnResult").and.returnValue(weatherSuccess)
      rainCheck.collectData()
      expect(rainCheck.weatherData).toEqual(weatherSuccess)
    })
  })

  describe('#cleanData', function () {
    it('returns an array with 3 weather types', function () {
      spyOn(api, "returnResult").and.returnValue(weatherSuccess)
      rainCheck.collectData()
      rainCheck.cleanData()
      expect(rainCheck.result).toEqual(cleanedData)
    })
  })

  describe('#rainOrShine', function () {
    it('returns 0 if no rain', function () {
      rainCheck.result = ['Clouds', 'Clouds', 'Clear']
      expect(rainCheck.rainOrShine()).toEqual(0)
    })
    it('returns 1 when one rain present', function () {
      rainCheck.result = ['Clouds', 'Rain', 'Clear']
      expect(rainCheck.rainOrShine()).toEqual(1)
    })
    it('returns 2 when two rain present', function () {
      rainCheck.result = ['Clouds', 'Rain', 'Rain']
      expect(rainCheck.rainOrShine()).toEqual(2)
    })
  })
})
