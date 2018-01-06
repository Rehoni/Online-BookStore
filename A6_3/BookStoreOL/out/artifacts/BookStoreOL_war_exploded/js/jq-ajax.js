$('nav a').on('click', function(e) {
  e.preventDefault();
  var url = this.href; // Zu ladender URL
  var $content = $('#content'); // Speichert Auswahl 
  
  $('nav a.current').removeClass('current'); // Aktualisiert Links
  $(this).addClass('current');
  $('#container').remove(); // Entfernt Inhalt

  $.ajax({
    type: "POST", // GET oder POST
    url: url, // Pfad zur Datei
    timeout: 2000, // Wartezeit
    beforeSend: function() { // Vor Ajax
        $content.append('<div id="load">Lädt</div>'); // Lademeldung
    },
    complete: function() { // Bei Abschluss
        // $('#loading').remove(); // Fehler im Buch, Löscht Meldung
        $('#load').remove(); // Löscht Meldung
    },
    success: function(data) { // Zeigt Inhalt
        $content.html( $(data).find('#container') ).hide().fadeIn(400);
    },
    fail: function() { // Zeigt Fehlermeldung
        $('#panel').html(
		        '<div class="loading">Bitte versuchen Sie es später nochmal.</div>');
    }
  });
  
});