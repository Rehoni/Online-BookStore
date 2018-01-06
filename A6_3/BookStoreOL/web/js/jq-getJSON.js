$('#exchangerates').append('<div id="rates"></div><div id="reload"></div>');

function loadRates() {
  $.getJSON('data/rates.json')
    .done( function(data){ // SERVER GIBT DATEN ZURÜCK
        var d = new Date(); // Erstellt Datumsobjekt
        var hrs = d.getHours(); // Ruft Stunden ab
        var mins = d.getMinutes(); // Ruft Minuten ab
		// folgende Zeile nicht im Buch, macht Minuten 2-stellig
		mins = (mins < 10 ? '0' : '') + mins;
        var msg = '<h2>Wechselkurse</h2>'; // Beginn der Meldung
        $.each(data, function(key, val) { // Fügt Kurse hinzu
            msg += '<div class="' + key + '">' + key + ': ' + val + '</div>';
        });
        msg += '<br>Letzte Aktualisierung: ' + hrs + ':' + mins + '<br>';  // Akt.-Zeit
	  
        $('#rates').html(msg); // Fügt Kurse zur Seite hinzu
    }).fail( function() { // BEI FEHLER
        $('aside').append('Leider können zurzeit keine Wechselkurse geladen werden.');
    }).always( function() { // LÄUFT IMMER
        var reload = '<a id="refresh" href="#">'; // Fügt Akt.-Link hinzu
        reload += '<img src="img/refresh.png" alt="Aktualisieren" /></a>';
        $('#reload').html(reload); // Fügt Akt.-Link hinzu
        $('#refresh').on('click', function(e) { // Fügt click-Handler hinzu
             e.preventDefault(); // Stoppt Link
             loadRates(); // Ruft loadRates() auf
        });
    });
}

loadRates(); // Ruft loadRates() auf 