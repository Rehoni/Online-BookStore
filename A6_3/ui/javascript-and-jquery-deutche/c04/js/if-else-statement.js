var pass = 50; // Mindestpunktzahl
var score = 75; // Aktuelle Punktzahl
var msg; // Meldung

// Wählt anhand der Punktzahl eine Meldung aus
if (score >= pass) {
  msg = 'Du hast bestanden.';
} else {
  msg = 'Versuch es noch mal.';
}

var el = document.getElementById('answer');
el.textContent = msg;
