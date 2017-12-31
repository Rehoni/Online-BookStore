$(function() {

  $('li').on('click', function(e) {
    $('li span').remove();
    var date = new Date();
    date.setTime(e.timeStamp);
	// folgende zwei Zeilen angepasst für lokales Datum
	var options = { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' };
    var clicked = date.toLocaleDateString('de-DE', options);
	// folgende Zeile zeigt US Datum
    // var clicked = date.toDateString('de-DE', options);
    $(this).append('<span class="date">' + clicked + ' ' + e.type + '</span>');
  });

});