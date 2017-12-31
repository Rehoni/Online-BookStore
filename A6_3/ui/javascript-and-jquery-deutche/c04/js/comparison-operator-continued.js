var score1 = 90; // Punktzahl für Runde 1
var score2 = 95; // Punktzahl für Runde 2
var highScore1 = 75; // Höchste Punktzahl für Runde 1
var highScore2 = 95; // Höchste Punktzahl für Runde 2

// Prüft, ob die Punktzahlen größer sind als der bisherige Höchstwert
var comparison = (score1 + score2) > (highScore1 + highScore2);

// Schreibt die Meldung auf die Seite
var el = document.getElementById('answer');
el.textContent = 'Neuer Höchstwert: ' + comparison;
