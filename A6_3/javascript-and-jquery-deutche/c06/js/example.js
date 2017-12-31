var username, noteName, textEntered, target;      // Deklariert Variablen

noteName = document.getElementById('noteName');   // Element mit Meldung
// folgende Zeile fehlt im Buch
username = document.getElementById('noteInput');  // Namen Element 

function writeLabel(e) {                          // Deklariert Funktion
  if (!e) {                                       // Wenn event-Objekt fehlt
    e = window.event;                             // Nutzt Lösung für IE5-8
  }
  target = event.target || event.srcElement;      // Ruft Elementziel ab
  textEntered = e.target.value;                   // Wert dieses Elements
  noteName.textContent = textEntered;             // Ändert Meldungstext
}

// Hier stehen die Steuerelemente und Funktionen für Aufnahme/Pause
// Siehe rechte Seite
if (document.addEventListener) {   // Wenn Ereignislistener unterstützt werden
  document.addEventListener('click', function(e){ // Bei Klick im Dokument
    recorderControls(e);                      // Ruft recorderControls() auf
  }, false);                                  // Erfassung in Bubble-Phase
  // Ruft writeLabel() auf, wenn das input-Ereignis für username eintritt
  username.addEventListener('input', writeLabel, false);
} else {                                      // Anderenfalls
  document.attachEvent('onclick', function(e){ // IE-Lösung: Beliebiger Klick
    recorderControls(e);                      // Ruft recorderControls() auf
  });
  // Ruft writeLabel() auf, wenn das keyup-Ereignis für username eintritt
  username.attachEvent('onkeyup', writeLabel, false);
}

function recorderControls(e) {                // Deklariert recorderControls()
  if (!e) {                                   // Wenn kein event-Objekt vorhanden
    e = window.event;                         // Verwendet IE5-8-Lösung
  }
  target = event.target || event.srcElement;  // Ruft Zielelement ab
  if (event.preventDefault) {      // Wenn preventDefault() unterstützt wird
    e.preventDefault();                      // Unterbindet Standardaktion
  } else {                                   // Anderenfalls
    event.returnValue = false;               // IE-Lösung: Unterbindet Standardaktion
  }
  switch(target.getAttribute('data-state')) { // Ruft data-state-Attribut ab
    case 'record':                           // Beim Wert record
      record(target);                        // Ruft record() auf
      break;                                 // Beendet Funktion
    case 'stop':                             // Beim Wert value
      stop(target);                          // Ruft stop() auf
      break;                                 // Beendet Funktion
    // Hier können weitere Schaltflächen folgen
  }
};

function record(target) {                    // Deklariert Funktion
  target.setAttribute('data-state', 'stop'); // Setzt data-state auf stop
  target.textContent = 'stop';               // Setzt text auf 'stop'
}

function stop(target) {
  target.setAttribute('data-state', 'record'); // Setzt data-state auf record
  target.textContent = 'record';               // Setzt text auf 'record'
}