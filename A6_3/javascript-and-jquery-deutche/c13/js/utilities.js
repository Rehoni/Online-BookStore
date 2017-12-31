// Hilfsfunktion zum Hinzufügen von Ereignislistenern
function addEvent(el, event, callback) {
  if ('addEventListener' in el) {       // Wenn addEventListener funktioniert
    el.addEventListener(event, callback, false); // Verwendet die Methode
  } else {                                       // Anderenfalls
    el['e' + event + callback] = callback; // Callback wird Methode von el
    el[event + callback] = function() {       // Fügt zweite Methode hinzu
    el['e' + event + callback](window.event); // Ruft damit erste Methode auf
  };
  el.attachEvent('on' + event, el[event + callback]);  // Nutzt attachEvent(),
  }         // um zweite Methode aufzurufen, die die erste aufruft
}

// Hilfsfunktion zum Entfernen von Ereignislistenern (nicht im Buch)
function removeEvent(el, event, callback) {
  if ('removeEventListener' in el) {     // Wenn removeEventListener funktioniert
    el.removeEventListener(event, callback, false); // Verwendet Methode
  } else {                                          // Andernfalls
    el.detachEvent('on' + event, el[event + callback]);   // Nutzt detachEvent 
    el[event + callback] = null;                    // löscht Methode aus el
    el['e' + event + callback] = null;              // löscht Aufruf-Eintrag aus el 
  }
}