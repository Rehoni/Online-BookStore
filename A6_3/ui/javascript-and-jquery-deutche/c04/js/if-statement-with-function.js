var score = 75; // Punktzahl
var msg = ''; // Meldung

function congratulate() {
  msg += 'Herzlichen Glückwunsch!';
}

if (score >= 50) { // Bei 50 oder mehr Punkten
  congratulate();
  msg += 'Weiter mit der nächsten Runde.';
}
var el = document.getElementById('answer');
el.innerHTML = msg;