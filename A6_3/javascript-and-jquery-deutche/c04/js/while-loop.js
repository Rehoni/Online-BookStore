var i = 1;       // Setzt den Zähler auf 1
var msg = '';    // Meldung

// Speichert die 5er-Reihe in einer Variable
while (i < 10) {
  msg += i + ' x 5 = ' + (i * 5) + '<br />';
  i++;
}

document.getElementById('answer').innerHTML = msg;