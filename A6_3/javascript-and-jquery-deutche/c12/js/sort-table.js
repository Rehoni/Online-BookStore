var compare = {                           // Deklariert das compare-Objekt
  name: function(a, b) {                  // Fügt die Methode name hinzu
    a = a.replace(/^the /i, '');          // Entfernt "the" vom Parameteranfang
    b = b.replace(/^the /i, '');          // Entfernt "the" vom Parameteranfang

    if (a < b) {                          // Wenn a kleiner b
      return -1;                         // Gibt -1 zurück
    } else {                             // Anderenfalls
      return a > b ? 1 : 0;               // Gibt 1 bei a größer b zurück ODER
    }                                   // 0 wenn beide gleich sind
  },
  duration: function(a, b) {             // Fügt die Methode duration hinzu
    a = a.split(':');                    // Teilt Zeitangabe am Doppelpunkt auf
    b = b.split(':');                    // Teilt Zeitangabe am Doppelpunkt auf

    a = Number(a[0]) * 60 + Number(a[1]); // Rechnet Dauer in Sekunden um
    b = Number(b[0]) * 60 + Number(b[1]); // Rechnet Dauer in Sekunden um

    return a - b;                       // Gibt a - b zurück
  },
  date: function(a, b) {                // Fügt die Methode date zurück
    a = new Date(a);                    // Neues Date-Objekt für das Datum
    b = new Date(b);                    // Neues Date-Objekt für das Datum

    return a - b;                       // Gibt a - b zurück
  } 
};

$('.sortable').each(function() {
  var $table = $(this);                       // Diese sortierbare Tabelle
  var $tbody = $table.find('tbody');          // Speichert Tabellenrumpf
  var $controls = $table.find('th');          // Speichert Spaltenköpfe
  var rows = $tbody.find('tr').toArray();     // Speichert Zeilenarray

  $controls.on('click', function() {         // Bei Klick auf einen Spaltenkopf
    var $header = $(this);                   // Ruft Spaltenkopf ab
    var order = $header.data('sort');        // Ruft Wert von data-sort ab
    var column;                             // Deklariert Variable column

    // Umkehrung, wenn das Element die Klasse ascending oder descending hat
    if ($header.is('.ascending') || $header.is('.descending')) {
      $header.toggleClass('ascending descending');  // Schaltet Klassen um
      $tbody.append(rows.reverse());                // Kehrt Array um
    } else {                                        // Anderenfalls: Sortierung
      $header.addClass('ascending');            // Fügt Spaltenkopf Klasse hinzu
      // Entfernt asc oder desc von allen anderen Spaltenköpfen
      $header.siblings().removeClass('ascending descending');
      if (compare.hasOwnProperty(order)) {      // Wenn compare die Methode hat
        column = $controls.index(this);         // Sucht nach Spaltenindex

        rows.sort(function(a, b) {              // Ruft sort() für rows auf
          a = $(a).find('td').eq(column).text(); // Text der Spalte in Zeile a
          b = $(b).find('td').eq(column).text(); // Text der Spalte in Zeile b
          return compare[order](a, b);          // Ruft compare auf
        });
		
        $tbody.append(rows);
      }
    }
  });
});