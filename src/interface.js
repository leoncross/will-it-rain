var $ = require ('jquery')

$( document ).ready(function() {
  console.log( 'ready!' );
  $("#main").text("Hello!");

  $("#search").click(function(){
    $("#result").text("Loading...");
    rain.saveLocation($("#searchBox").val())
    rain.callAPI()
  });

});

function Interface () {

}
Interface.prototype.displayData = function () {
  console.log('called')
  rain.collectData()
  rain.cleanData()
  rain.rainOrShine()
  console.log(rain.result)
  if (rain.result.includes('Rain')) {
    $("#result").text("Yes! Bring an umbrella!");
  } else {
    $("#result").text("No rain expected! You're good!");
  }
}

module.exports = Interface
