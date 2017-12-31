var msg; // Meldung
var level = 2; // Stufe

// Bestimmt die Meldung aufgrund der Stufe
switch (level) {
case 1:
    msg = 'Viel Glück beim ersten Test!';
    break;
case 2:
    msg = 'Nr. 2 von 3 - bleib dran!';
    break;
case 3:
    msg = 'Letzte Runde - fast geschafft!';
    break;
default:
    msg = 'Viel Glück!';
    break;
}

var el = document.getElementById('answer');
el.textContent = msg;
