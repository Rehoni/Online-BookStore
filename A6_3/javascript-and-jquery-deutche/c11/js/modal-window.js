var modal = (function() {                       // Deklariert modal-Objekt
  var $window = $(window);
  var $modal = $('<div class="modal"/>');       // Erstellt Markup für modal
  var $content = $('<div class="modal-content"/>');
  var $close = $('<button role="button" class="modal-close">Schließen</button>');

  $modal.append($content, $close);        // Fügt Schließen-Schaltfläche hinzu

  $close.on('click', function(e) {               // Bei Klick auf Schließen
    e.preventDefault();                         // Verhindert Linkverhalten
    modal.close();                              // Schließt modales Fenster
  });
  
  return {                              // Fügt Code zu modal hinzu
    center: function() {                        // Definiert center()
      // Berechnet Abstand von oben und links zur Zentrierung des Fensters
      var top = Math.max($window.height() - $modal.outerHeight(), 0) / 2;
      var left = Math.max($window.width() - $modal.outerWidth(), 0) / 2;
      $modal.css({                     // Richtet CSS für das Fenster ein
        top: top + $window.scrollTop(),         // Vertikale Zentrierung
        left: left + $window.scrollLeft()       // Horizontale Zentrierung
      });
    },
    open: function(settings) {                      // Definiert open()
      $content.empty().append(settings.content);    // Legt neuen Inhalt fest

      $modal.css({                                  // Legt Abmessungen fest
        width: settings.width || 'auto',            // Legt Breite fest
        height: settings.height || 'auto'           // Legt Höhe fest
      }). appendTo('body');             // Fügt Fenster zur Seite hinzu

      modal.center();                              // Ruft center() auf
      $(window).on('resize', modal.center);         // Bei Größenänderung
    },
    close: function() {                            // Definiert close()
      $content.empty();                            // Entfernt Fensterinhalt
      $modal.detach();                             // Entfernt Fenster
      $(window ).off('resize', modal.center);       // Entfernt Ereignishandler
    }
  };
}());