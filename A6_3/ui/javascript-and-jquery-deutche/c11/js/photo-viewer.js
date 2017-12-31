var request;                         // Letztes angefordertes Bild
var $current;                        // Zurzeit angefordertes Bild
var cache = {};                      // Cache-Objekt
var $frame = $('#photo-viewer');      // Container für Bild
var $thumbs = $('.thumb');            // Container für Vorschaubild

function crossfade($img) {           // Funktion zum Überblenden
                                    // Neues Bild wird als Parameter übergeben
  if ($current) {                    // Wenn zurzeit ein Bild angezeigt wird
    $current.stop().fadeOut('slow'); // Hält Animation an und blendet es aus 
  }
  
  $img.css({                        // Legt CSS-Ränder des Bildes fest
    marginLeft: -$img.width() / 2,  // Halbe Bildbreite als negativer Rand
    marginTop: -$img.height() / 2   // Halbe Bildhöhe als negativer Rand
  });
  
  $img.stop().fadeTo('slow', 1);    // Stoppt Animation des neuen Bilds,
                                   // blendet es ein     
  $current = $img;                  // Neues Bild wird aktuelles Bild
}

$(document).on('click', '.thumb', function(e){ // Bei Klick auf Vorschaubild
  var $img;                        // Erstellt lokale Variable $img
  var src = this.href;             // Speichert Pfad zum Bild
  request = src;                   // Speichert Pfad in request

  e.preventDefault();              // Verhindert Link-Standardverhalten

  $thumbs.removeClass('active');   // Entfernt active von allen Vorschauen
  $(this).addClass('active');      // Macht angeklickte Vorschau aktiv

  if (cache.hasOwnProperty(src)) { // Wenn Bild im Cache
    if (cache[src].isLoading === false) { // und wenn isLoading false ist
      crossfade(cache[src].$img); // Ruft crossfade() auf
    }
  } else {                        // Wenn nicht im Cache
    $img = $('<img/>');           // Speichert leeres <img/> in $img
    cache[src] = {                // Speichert Bild im Cache
      $img: $img,                 // Fügt Pfad zum Bild hinzu
      isLoading: true             // Setzt isLoading auf true
    };
    // Vorbereitung der nächsten Zeilen; sie laufen, wenn das Bild geladen ist
    $img.on('load', function() {  // Wenn Bild geladen ist
      $img.hide();               // Verbirgt das Bild
      // Entfernt is-loading vom Frame & hängt ihm neues Bild an
      $frame.removeClass('is-loading').append($img);
      cache[src].isLoading = false; // Aktualisiert isLoading im Cache
      // Wenn das Bild immer noch das zuletzt angeforderte ist
      if (request === src) {
        crossfade($img);           // Ruft crossfade() auf
      }                            // Löst Probleme mit asynchronem Laden
    });
  
    $frame.addClass('is-loading'); // Fügt is-loading zu Frame hinzu

    $img.attr({                    // Legt Attribute des <img> fest
      'src': src,                  // Fügt src-Attribut hinzu, um Bild zu laden
      'alt': this.title || ''       // Fügt ggf. Titel aus Link hinzu
    });
  
  }
  
});

// Läuft einmal (nach Laden des gesamten Skripts), um das erste Bild anzuzeigen
$('.thumb').eq(0).click();          // Simuliert Klick auf erste Vorschau
