// NOTE: Because this example uses jQuery's load() method (as introduced in the previous chapter)
// It will not work locally in some browsers
// You can try it online at http://javascriptbook.com/code/c09 
// or run it on your own web server

$(function() {                                  // DOM ist geladen
  function loadContent(url){                    // Lädt neuen Inhalt auf die Seite
    $('#content').load(url + ' #container').hide().fadeIn('slow');
  }

  $('nav a').on('click', function(e) {          // Click handler 
    e.preventDefault();                         // Verhindert das Laden der neuen Seite
    var href = this.href;                       // Ruft href-Attribut des Links ab
    var $this = $(this);                        // Speichert Link im jQuery-Object
    $('a').removeClass('current');              // Entfernt aktuellen Link
    $this.addClass('current');                  // Aktualisiert aktuellen Link
    loadContent(href);                          // Funktion lädt Inhalt
    history.pushState('', $this.text, href);    // Aktualisiert Verlauf
  });

  window.onpopstate = function() {              // Vor/Zurück
    var path = location.pathname;               // Ruft Dateipfad ab
    loadContent(path);                          // Funktion lädt die Seite
    var page = path.substring(location.pathname.lastIndexOf('/')+1);
    $('a').removeClass('current');              // Entfernt aktuellen Link
    $('[href="' + page + '"]').addClass('current'); // Aktualisiert aktuellen Link
  };
});