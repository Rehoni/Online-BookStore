$(function() {
	
  // EINRICHTUNG
  var $list, $newItemForm, $newItemButton;
  var item = '';                                // Eintrag ist leerer String
  $list = $('ul');                              // Speichert ungeordnete Liste
  $newItemForm = $('#newItemForm');       // Speichert Formular zum Hinzufügen
                                               // von neuen Eintragen
  $newItemButton = $('#newItemButton');         // Speichert Schaltfläche
                                               // zum Anzeigen des Formulars
  $('li').hide().each(function(index) {         // Verbirgt Listeneinträge
    $(this).delay(450 * index).fadeIn(1600);    // Blendet sie ein
  });

  // EINTRAGSZÄHLER
  function updateCount() {                      // Deklariert Funktion
    var items = $('li[class!=complete]').length; // Anzahl Listeneinträge
    $('#counter').text(items);                   // Zum Zählerkreis hinzugefügt
  }
  updateCount();                                // Ruft Funktion auf

  // EINRICHTUNG FÜR NEUE EINTRÄGE
  $newItemButton.show();                        // Zeigt Schaltfläche an
  $newItemForm.hide();                          // Verbirgt Formular
  $('#showForm').on('click', function() {        // Beim Klick auf Schaltfläche
    $newItemButton.hide();                      // Verbirgt Schaltfläche
    $newItemForm.show();                        // Zeigt Formular an  
  }); 

  // EINEN NEUEN LISTENEINTRAG HINZUFÜGEN
  $newItemForm.on('submit', function(e) {        // Beim Abschicken eines neuen Eintrags
    e.preventDefault();                         // Verhindert Abschicken des Formulars
    var text = $('input:text').val();            // Ruft Wert der Texteingabe ab
    $list.append('<li>' + text + '</li>');       // Fügt Eintrag am Ende hinzu
    $('input:text').val('');                     // Leert Texteingabe
    updateCount();                              // Aktualisiert Zähler
  });
  
  // VERARBEITUNG VON KLICKS MIT DELEGIERUNG AUF DEM <ul>-ELEMENT
  $list.on('click', 'li', function() {
    var $this = $(this);            // Speichert Element in einem jQuery-Objekt
    var complete = $this.hasClass('complete');   // Bei erledigtem Eintrag

    if (complete === true) {        // Prüft, ob Eintrag erledigt ist
      $this.animate({               // Wenn ja: animiert Deckkraft und Auffüllung
        opacity: 0.0,
        paddingLeft: '+=180'
      }, 500, 'swing', function() {  // Callback bei Abschluss der Animation
        $this.remove();             // Entfernt Eintrag vollständig
      });
    } else {                        // Markiert Eintrag anderenfalls als erledigt
      item = $this.text();          // Ruft Text des Eintrags ab
      $this.remove();               // Entfernt Eintrag
      $list                         // Fügt ihn als erledigt am Ende wieder ein
        .append('<li class=\"complete\">' + item + '</li>')
        .hide().fadeIn(300);         // Verbirgt ihn vorläufig
      updateCount();                 // Aktualisiert Zähler
    }                                // Ende der else-Option
  });                                // Ende des Ereignishandlers

});