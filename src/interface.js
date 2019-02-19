var $ = require ('jquery')

$( document ).ready(function() {
  console.log( 'ready!' );
  $("#main").text("Hello!");

  $("#locationSearch").click(function(){
    rain.saveLocation($("#box").val())
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
    $("#main").text("Expecting Rain - bring an umbrella");
  } else {
    $("#main").text("No rain - you're all good!");
  }
}

module.exports = Interface
