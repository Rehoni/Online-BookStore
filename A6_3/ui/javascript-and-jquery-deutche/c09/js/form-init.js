$(function() {
  // zusätzlich zum Buch das deutsche Format zum datepicker()	
  if( typeof $.datepicker !== 'undefined' ) {
    $('#arrival').datepicker( $.datepicker.regional[ "de" ] );  // Wandelt Eingabe
	                                                          // in JQUI-Datumsauswahl
															  // und setzt deutsches Datumformat
    // obiger Aufruf setzt ein zusätzliches Modul voraus, hier deutsche Sprache
    // https://github.com/jquery/jquery-ui/tree/master/ui/i18n
  } else {
    $('#arrival').datepicker();    // Wandelt Eingabe in JQUI-Datumsauswahl
  }

  var $amount = $('#amount');      // speichert Preiseingabe 
  var $range = $('#price-range');  // Speicher <div> für Preisbereich
  
  $('#price-range').slider({       // Wandelt Preiseingabe in Regler um
    range: true,                   // Bereichsregler bekommt zwei Griffe
    min: 0,                        // Mindestwert
    max: 400,                      // Höchstwert
    values: [175, 300],            // Wert beim Laden der Seite 
    slide: function(event, ui) {   // Aktualisiert Betrag
      $amount.val('$' + ui.values[0] + ' - $' + ui.values[1]);
    }
  });
  $amount                          // Legt Anfangswert fest
    .val('$' + $range.slider('values', 0)     // $ und unterer Grenzwert
    + ' - $' + $range.slider('values', 1));   // $ und oberer Grenzwert

});