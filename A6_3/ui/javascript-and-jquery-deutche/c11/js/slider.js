$('.slider').each(function(){               // Für jede Diashow
  // im Buch sind , anstelle von ; nach dem var ... statements, das gibt dann Fehler
  var $this = $(this);                      // Ruft aktuelle Diashow ab
  var $group = $this.find('.slide-group');  // Ruft slide-group ab (Container)
  var $slides = $this.find('.slide');    // jQuery-Objekt mit allen Folien
  var buttonArray = [];                  // Erstellt Array für Schaltflächen
  var currentIndex = 0;                  // Indexnummer der aktuellen Folie
  var timeout;                           // Speichert den Timer
  
  // move() - Hier steht die Funktion für den Folienwechsel (s. nächste Seite)
  function move(newIndex) {           // Wechselt von der alten zur neuen Folie
    var animateLeft, slideLeft;       // Deklariert Variablen

    advance();            // Ruft bei Bewegung der Folie advance() erneut auf

    // Tut nichts, wenn die neue Folie die aktuelle ist oder Animation läuft
    if ($group.is(':animated') || currentIndex === newIndex) {
      return;
    }
	
    buttonArray[currentIndex].removeClass('active');     // Entfernt Klasse
    buttonArray[newIndex].addClass('active');            // Fügt Klasse hinzu

    if (newIndex > currentIndex) {    // Wenn neuer Index > aktueller
      slideLeft = '100%';             // Platziert neue Folie rechts
      animateLeft = '-100%';          // Animiert aktuelle Folie nach links
    } else {                          // Anderenfalls
      slideLeft = '-100%';            // Platziert neue Folie links
      animateLeft = '100%';           // Animiert aktuelle Folie nach rechts
    }
    // Platziert neue Folie links oder rechts von der aktuellen
    $slides.eq(newIndex).css( {left: slideLeft, display: 'block'} );
    $group.animate( {left: animateLeft} , function() {   // Animiert Folien
      $slides.eq(currentIndex).css( {display: 'none'} ); // Verbirgt vorherige
      $slides.eq(newIndex).css( {left: 0} );     // Position der neuen Folie
      $group.css( {left: 0} );                  // Position der Foliengruppe
      currentIndex = newIndex;       // Setzt currentIndex auf neue Folie
    });
  }
  
  // Handhabung der Folien siehe Seite 519
  function advance() {                     // Richtet Timer ein
    clearTimeout(timeout);                 // Löscht den Timer in timeout
    // Startet den Timer, um die anonyme Funktion alle 4 s aufzurufen
    timeout = setTimeout(function(){       //
      if (currentIndex < ($slides.length - 1)) {   // Wenn nicht letzte Folie
        move(currentIndex + 1);             // Wechselt zur nächsten Folie
      } else {                              // Anderenfalls
        move(0);                            // Wechselt zur ersten Folie
      }
    }, 4000);                        // Timer-Wartezeit in Millisekunden
  }
  
  $.each($slides, function(index){
    // Erstellt Schaltflächenelement
    var $button = $('<button type="button" class="slide-btn">&bull;</button>');
    if (index === currentIndex) {     // Bei Index für aktuelle Folie
      $button.addClass('active');     // Fügt Klasse active hinzu
    }
    $button.on('click', function(){   // Erstellt Schaltflächen-Ereignishandler
      move(index);                    // Ruft move() auf
    }).appendTo('.slide-buttons');    // Fügt Schaltflächenhalter hinzu
    buttonArray.push($button);        // Fügt ihn zum Array hinzu
  });
  
  advance();

});