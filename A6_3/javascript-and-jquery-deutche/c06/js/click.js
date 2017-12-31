// Erstellt das HTML-Element für die Meldung
var msg = '<div class=\"header\"><a id=\"close\" href="#">schließen X</a></div>';
msg += '<div><h2>Systemwartung</h2>';
msg += 'Unsere Server werden zwischen 15 und 16 Uhr aktualisiert. ';
msg += 'In dieser Zeit kann es zu leichten Störungen kommen.</div>';

var elNote = document.createElement('div');        // Erstellt neues Element
elNote.setAttribute('id', 'note');                 // Fügt id 'note' hinzu
elNote.innerHTML = msg;                            // Fügt Meldung hinzu
document.body.appendChild(elNote);                 // Fügt sie der Seite hinzu

function dismissNote() {                           // Deklariert Funktion
document.body.removeChild(elNote);                 // Entfernt Meldung
}

var elClose = document.getElementById('close');        // Holt Schließen-Schaltfläche
elClose.addEventListener('click', dismissNote, false); // Löscht Meldung bei
                                                      // Klick auf Schließen