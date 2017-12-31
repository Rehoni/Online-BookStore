var i = 1;       // Setzt den Zähler auf 1
var msg = '';    // Meldung

// Speichert die 5er-Reihe in einer Variable
do {
  msg += i + ' x 5 = ' + (i * 5) + '<br />';
  i++;
} while (i < 1);
// i ist bereits 1, aber der Code wird trotzdem
// ausgeführt

document.getElementById('answer').innerHTML = msg;