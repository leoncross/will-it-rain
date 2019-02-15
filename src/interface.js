var $ = require ('jquery')

$( document ).ready(function() {
  console.log( 'ready!' );
  $("#main").text("Hello!");

  $("#locationSearch").click(function(){
    rain.saveLocation($("#box").val())
  });

  $("#callAPI").click(function(){
    rain.callAPI()
  });

  $("#main").text("Hello!");

});
