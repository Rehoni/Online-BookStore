var table = 3;                  // Grundzahl der Berechnungen
var operator = 'addition';      // Art der Berechnung (Addition als Standard)
var i = 1;                      // Setzt den Zähler auf 1
var msg = '';                   // Meldung

if (operator === 'addition') { // Wenn operator den Wert addition hat
  while (i < 11) {               // Während der Zähler kleiner als 11 ist
    msg += i + ' + ' + table + ' = ' + (i + table) + '<br />'; // Berechnung
    i++;                        // Addiert 1 zum Zähler
  }
} else {                        // Anderenfalls
  while (i < 11) {               // Während der Zähler kleiner als 11 ist
    msg += i + ' x ' + table + ' = ' + (i * table) + '<br />'; // Berechnung
    i++;                        // Addiert 1 zum Zähler
  }
}

// Schreibt die Meldung auf die Seite
var el = document.getElementById('blackboard');
el.innerHTML = msg;