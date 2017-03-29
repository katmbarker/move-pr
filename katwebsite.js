function formatDate(date) {
  var hours = date.getHours();
  var minutes = date.getMinutes();
  var ampm = hours >= 12 ? 'pm' : 'am';
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  minutes = minutes < 10 ? '0'+minutes : minutes;
  var strTime = hours + ':' + minutes + ' ' + ampm;
  return date.getMonth()+1 + "/" + date.getDate() + "/" + date.getFullYear() + "  " + strTime;
}
var d = new Date();
var e = formatDate(d);

$('#overlay').html('<h1>' + d + '</h1>');


(document).ready(function($) {
	console.log('hello');
  $.ajax({
  url : "http://api.wunderground.com/api/95f3ed1830df06dd/geolookup/conditions/q/PR/San_Juan.json",
  dataType : "jsonp",
  success : function(parsed_json) {
  var location = parsed_json['location']['city'];
  var temp_f = parsed_json['current_observation']['temp_f'];
  var precipitation = parsed_json['precipitation'];
  $("#overlay").html('<h1>' + location + temp_f + precipitation + '</h1>');
   // if (temp_f > 75) {
   //      function show_image(src) {
   //      var img = document.createElement("#sun_icon");
   //      img.src = "sun_icon.png";

   }
});

