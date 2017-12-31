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


  // DIE FUNKTION WIRKT ALS FILTER (Seite 537 unten)
  function priceRange(person) {                        // Deklariert priceRange()
    return (person.rate >= 65) && (person.rate <= 90);  // Im Bereich, dann true
  };

  // FILTERT PERSONENARRAY & FÜGT ÜBEREINSTIMMUNGEN ZUM ERGEBNISARRAY HINZU
  var results = [];                              // Array für Übereinstimmungen
  results = people.filter(priceRange);           // filter() ruft priceRange() auf


  // DURCHLÄUFT ERGEBNISARRAY UND FÜGT ÜBEREINSTIMMUNGEN ZUR ERGEBNISTABELLE HINZU (Seite 535)
  var $tableBody = $('<tbody></tbody>');           // neuer jQuery-Inhalt
  for (var i = 0; i < results.length; i++) {        // Durchläuft results
    var person = results[i];                       // speichert aktuelle Person
    var $row = $('<tr></tr>');                     // Erstellt eine Zeile dafür
    $row.append($('<td></td>').text(person.name)); // Fügt den Namen hinzu
    $row.append($('<td></td>').text(person.rate)); // Fügt Stundensatz hinzu
    $tableBody.append( $row );                     // Fügt Zeile zum neuen Inhalt hinzu
  }

  // Fügt neuen Inhalt hinter dem Seitenrumpf hinzu 
  $('thead').after($tableBody);                    // Fügt tbody hinter thead ein
});