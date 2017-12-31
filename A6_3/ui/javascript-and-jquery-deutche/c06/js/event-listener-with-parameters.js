var elUsername = document.getElementById('username');  // Ruft username ab
var elMsg = document.getElementById('feedback');       // Ruft feedback ab

function checkUsername(minLength) {                // Deklariert Funktion
  if (elUsername.value.length < minLength) {        // Wenn username zu kurz
    // Richtet die Fehlermeldung ein
    elMsg.textContent = 'Der Benutzername muss mindestens ' + minLength +
                       ' Zeichen lang sein';
  } else {                                            // Anderenfalls
    elMsg.innerHTML = '';                             // Löscht Meldung
  }
}

elUsername.addEventListener('blur', function() {   // Bei Verlust des Fokus
  checkUsername(5);                                // Übergibt Argumente
}, false);