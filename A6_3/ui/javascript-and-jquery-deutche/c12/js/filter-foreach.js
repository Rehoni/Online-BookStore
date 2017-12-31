$(function() {

  // Speichere jede Person als ein Objekt Literal in einem Array (Seite 534)
  var people = [
    {                                              // Jeder Person ist ein Objekt
      name: 'Casey',                               // welches Namen und Stundensatz enthält
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

  // PRÜFT ALLE PERSONEN UND FÜGT ÜBEREINSTIMMUNGEN ZUM ARRAY HINZU (Seite 537 oben)
  var results = [];                                 // Ergebnisarray
  people.forEach(function(person) {                 // Für jede Person
    if (person.rate >= 65 && person.rate <= 90) {    // Ist Std.-Satz im Bereich?
      results.push(person);                         // Wenn ja, zum Array hinzufügen
    }
  });

  // DURCHLÄUFT ARRAY UND FÜGT ÜBEREINSTIMMUNGEN IN ERGEBNISTABELLE EIN (Seite 535)
  var $tableBody = $('<tbody></tbody>');            // Neuer jQuery-Inhalt
  for (var i = 0; i < results.length; i++) {         // Durchläuft results
    var person = results[i];                        // Speichert aktuelle Person
    var $row = $('<tr></tr>');                      // Erstellt eine Zeile dafür
    $row.append($('<td></td>').text(person.name));  // Fügt den Namen hinzu
    $row.append($('<td></td>').text(person.rate));  // Fügt Stundensatz hinzu
    $tableBody.append( $row );                     // Fügt Zeile zum neuen Inhalt hinzu
  }
  
  // Fügt neuen Inhalt hinter dem Seitenrumpf hinzu
  $('thead').after($tableBody); // Fügt tbody hinter thead ein
});
