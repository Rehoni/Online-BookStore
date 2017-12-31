function checkLength(e, minLength) {    // Deklariert Funktion
  var el, elMsg;                       // Deklariert Variablen
  if (!e) {                             // Wenn event-Objekt nicht existiert
    e = window.event;                   // Verwendet IE-Ausweichlösung
  }
  el = e.target || e.srcElement;        // Ruft Ereignisziel ab
  elMsg = el.nextSibling;               // Ruft nächsten Geschw.knoten ab

  if (el.value.length < minLength)       // Meldung bei zu kurzer Länge
    elMsg.innerHTML = 'Der Benutzername muss mindestens ' + minLength +
                      ' Zeichen lang sein';
  } else {                              // Anderenfalls
    elMsg.innerHTML = '';               // Löscht Meldung
  }
}

var elUsername = document.getElementById('username');    // Ruft username ab
if (elUsername.addEventListener) {       // Wenn Ereignislistener unterstützt
  elUsername.addEventListener('blur', function(e) {      // Bei blur-Ereignis
    checkLength(e, 5);                   // Ruft checkLength() auf
  }, false);                             // Erfassung in Bubble-Phase
} else {                                 // Anderenfalls
  elUsername.attachEvent('onblur', function(e){  // Rückgriff auf onblur für IE
    checkLength(e, 5);                           // Ruft checkLength() auf
  });
}