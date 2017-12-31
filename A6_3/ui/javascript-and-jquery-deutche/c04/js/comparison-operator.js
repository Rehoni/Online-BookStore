var pass = 50; // Mindestpunktzahl zum Bestehen
var score = 90; // Punktzahl

// Prüft, ob der Benutzer bestanden hat
var hasPassed = score >= pass;

// Schreibt eine Meldung auf die Seite
var el = document.getElementById('answer');
el.textContent = 'Test bestanden: ' + hasPassed;
