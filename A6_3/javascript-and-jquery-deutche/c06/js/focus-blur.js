function checkUsername() {                 // Deklariert Funktion
  var username = el.value;                 // Speichert username in Variable
  if (username.length < 5) {               // Wenn username < 5 Zeichen
    elMsg.className = 'warning';          // Ändert class der Meldung
    elMsg.textContent = 'Immer noch zu kurz...';  // Ändert Meldung
  } else {                                        // Anderenfalls
    elMsg.textContent = '';                       // Löscht Meldung
  }
}

function tipUsername() {                          // Deklariert Funktion
  elMsg.className = 'tip';                        // Ändert class der Meldung
  elMsg.innerHTML = 'Der Benutzername muss mindestens 5 Zeichen lang sein';
}                                                // Fügt Meldung hinzu

var el = document.getElementById('username');     // Username-Eingabe
var elMsg = document.getElementById('feedback');  // Element für Meldung

// Ruft die obigen Funktionen auf, wenn username den Fokus erhält/verliert:
el.addEventListener('focus', tipUsername, false); // Bei focus: tipUsername()
el.addEventListener('blur', checkUsername, false);// Bei blur: checkUsername()

/* Längere Version Für IE8 (und tiefer)

if (el.addEventListener) {
  el.addEventListener('focus', tipUsername, false);
  el.addEventListener('blur', checkUsername, false);
} else {
  el.attachEvent('onfocus', tipUsername);
  el.attachEvent('onblur', checkUsername);
}

*/