var score1 = 8; // Punktzahl für Runde 1
var score2 = 8; // Punktzahl für Runde 2
var pass1 = 6; // Mindestpunktzahl für Runde 1
var pass2 = 6; // Mindestpunktzahl für Runde 2

// Prüft, ob der Benutzer beide Runden bestanden hat, und speichert
// das Ergebnis in einer Variable
var passBoth = (score1 >= pass1) && (score2 >= pass2);

// Erstellt die Meldung
var msg = 'Beide Runden bestanden: ' + passBoth;

// Schreibt die Meldung auf die Seite
var el = document.getElementById('answer');
el.textContent = msg;
