var score = 75; // Punktzahl
var msg; // Meldung

if (score >= 50) { // Bei 50 oder mehr Punkten
  msg = 'Herzlichen Glückwunsch!';
  msg += ' Weiter mit der nächsten Runde.';
}
var el = document.getElementById('answer');
el.textContent = msg;
