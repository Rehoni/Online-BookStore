(function(){                                       // HIER STEHT DAS ARRAY PEOPLE

  // STORE EACH PERSON AS AN OBJECT IN AN ARRAY (Seite 534)
  var people = [
    {                                              // Each person is an object
      name: 'Casey',                               // It holds name and rate
      rate: 60
    },
    {
      name: 'Camille',
      rate: 80
    },
    {
      name: 'Gordon',
      rate: 75
    },
    {
      name: 'Nigel',
      rate: 120
    }
  ];

  var rows = [],                       // Array rows
      $min = $('#value-min'),          // Eingestellter Mindestwert
      $max = $('#value-max'),          // Eingestellter Höchstwert
      $table = $('#rates');            // Ergebnistabelle
  function makeRows() {                // Erstellt Tabellenzeilen und Array
    people.forEach(function(person) {  // Für alle Personenobjekte in people
      var $row = $('<tr></tr>');       // Erstellt eine Zeile
      $row.append( $('<td></td>').text(person.name) ); // Fügt Namen hinzu
      $row.append( $('<td></td>').text(person.rate) ); // Fügt Std.-Satz hinzu
      rows.push({                     // Fügt Objekt für Verbindung zwischen Person und Zeile hinzu
        person: person,               // Verweis auf Personenobjekt
        $element: $row                // Verweis auf Zeile als jQuery-Auswahl
      });
    });
  }
  function appendRows() {             // Fügt Zeile zur Tabelle hinzu
    var $tbody = $('<tbody></tbody>'); // Erstellt <tbody>-Element
    rows.forEach(function(row) {       // Für alle Objekte im Array rows
      $tbody.append(row.$element);     // Fügt HTML für die Zeile hinzu
    });
    $table.append($tbody);             // Fügt Zeilen zur Tabelle hinzu
  }
  function update(min, max) {          // Aktualisiert Tabelleninhalt
    rows.forEach(function(row) {       // Für jede Zeile im Array rows
      if (row.person.rate >= min && row.person.rate <= max) {// Wenn im Bereich
        row.$element.show();           // Zeigt die Zeile an
      } else {                         // Anderenfalls
        row.$element.hide();           // Verbirgt die Zeile
      }
    });
  }
  function init() {                    // Aufgaben beim Start des Skripts
    $('#slider').noUiSlider({          // Richtet Schieberegler ein
      range: [0, 150], start: [65, 90], handles: 2, margin: 20, connect: true,
      serialization: { to: [$min,$max], resolution: 1 }
    }).change(function() { update($min.val(), $max.val()); });
    makeRows();                        // Erstellt Tabellenzeilen und Array rows
    appendRows();                      // Fügt Zeilen zur Tabelle hinzu
    update($min.val(), $max.val());     // Aktualisiert Tabelle
  }
  $(init);                             // Ruft init() auf, wenn DOM bereit ist
}());