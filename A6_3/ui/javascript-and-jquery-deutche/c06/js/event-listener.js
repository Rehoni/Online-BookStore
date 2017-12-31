function checkUsername() {                              // Deklariert Funktion
  var elMsg = document.getElementById('feedback');       // Ruft feedback-Element ab
  if (this.value.length < 5) {                           // Wenn username zu kurz
    elMsg.textContent = 'Benutzername muss mindesten.5 Zeichen lang sein';
  } else {                                              // Anderenfalls
    elMsg.textContent = '';                             // Löscht die Meldung
  }
}

var elUsername = document.getElementById('username');   // Ruft username ab
// Ruft bei Verlust des Fokus checkUsername() auf
elUsername.addEventListener('blur', checkUsername, false);