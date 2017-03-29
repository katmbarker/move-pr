$(document).ready(function() {
	console.log('hello');
  $.ajax({
    url : "http://api.wunderground.com/api/95f3ed1830df06dd/geolookup/conditions/q/PR/San_Juan.json",
    dataType : "jsonp",
    success : function(parsed_json) {
    var location = parsed_json['location']['city'];
    var temp_f = parsed_json['current_observation']['temp_f'];
    var precipitation = parsed_json['current_observation']['weather'];
    var icon = parsed_json['current_observation']['icon_url'];
    console.log(parsed_json);
    var d = new Date();
    var e = formatDate(d);

    $('#overlay').append('<h1 class="overlay">' + e + '</h1>');
    $("#overlay").append('<h1 class="overlay">' + ' ' + location + ' ' + temp_f + '</h1>');
    $("#overlay").append('<h1 class="overlay">' + precipitation + ' ' + '</h1>');
    $("#overlay").append('<img class="dailyreport" src="' + icon + '" />');

     }
   
  });
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

});


