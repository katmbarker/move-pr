$(document).ready(function() {
  $.ajax({
    url : "http://api.wunderground.com/api/95f3ed1830df06dd/geolookup/conditions/q/PR/San_Juan.json",
    dataType : "jsonp",
    success : function(parsed_json) {
        var location = parsed_json['location']['city'];
        var temp_f = parsed_json['current_observation']['temp_f'];
        var precipitation = parsed_json['current_observation']['weather'];
        var icon = parsed_json['current_observation']['icon_url'];
        // console.log(parsed_json);
        var d = new Date();
        var e = formatDate(d);
        var $overlay = $('#overlay');
        var $spinner = $('.spinner');
        $spinner.remove();

        console.log(parsed_json);

        var condition = precipitation.replace(' ', '-').toLowerCase();
        var sunnyRecommendation = ['sunny', 'partly-sunny','overcast','clear','partly-cloudy','mostly-cloudy','scattered-clouds','cloudy'];
        var rainnyRecommendation = ['drizzle','rain','rain-mist','rain-showers','thunderstorm', 'thunderstorms','thunderstorms-and-rain','chance-of-a-thunderstorm','chance-of-rain','chance-of-showers','very-hot'];
        // var noReccomendation = ['snow','snow-grains','ice-crystals','ice-pellets','hail','mist','fog','fog-patches','smoke','volcanic-ash','widespread-dust','sand','haze','spray','dust-whirls','sandstorm','low-drifting-snow','low-drifting-widespread-dust','low-drifting-sand','blowing-snow','blowing-widespread-dust','blowding-sand','snow-showers','snow-blowing-snow-mist','ice-pellet-showers','hail-showers','small-hail-showers','thunderstorms-and-snow','thunderstorms-and-ice-pellets','thunderstorms-and-hail','thunderstorms-and-small-hail','freezing-drizzle','freezing-rain','freezing-fog','patches-of-fog','shallow-fog','partial-fog','small-hail','squalls','funnel-cloud','unknown-precipitation','unknown','hazy','foggy','very-cold']

        $overlay.append('<h1 class="overlay">' + e + '</h1>');
        $overlay.append('<h1 class="overlay">' + ' ' + location + ' ' + temp_f + '</h1>');
        $overlay.append('<h1 class="overlay">' + precipitation + ' ' + '</h1>');
        $overlay.append('<img class="dailyreport" src="' + icon + '" />');

        console.log(condition);
        if (sunnyRecommendation.indexOf(condition) > -1) {
            console.log('this is our recommmendation')
            $('.sunny-result').show();
        } else if (rainyRecommendation.indexOf(condition) > -1) {
            $('.rainy-result').show();
        } else {
            $('.buttons').hide();
        }
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

  $('.contact-form').on('submit', function(event) {
    console.log('--> on form submit');
    event.preventDefault();
    $('#msg').removeClass('hidden');
  });

});

