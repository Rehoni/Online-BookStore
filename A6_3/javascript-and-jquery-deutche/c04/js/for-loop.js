var scores = [24, 32, 17]; // Punktzahlen-Array
var arrayLength = scores.length;
                          // Elemente im Array
var roundNumber = 0;       // Aktuelle Runde
var msg = '';              // Meldung
var i;                     // Zähler

// Durchläuft die Elemente im Array
for (i = 0; i < arrayLength; i++) {

  // Zählung in Arrays beginnt mit 0 (0 ist Runde 1)
  // Addiert 1 zur aktuellen Rundennummer
  roundNumber = (i + 1);
  
  // Schreibt aktuelle Rundennummer in die Meldung
  msg += 'Runde ' + roundNumber + ': ';

  // Ruft die Punktzahl vom Array scores ab
  msg += scores[i] + '<br />';
}

document.getElementById('answer').innerHTML = msg;