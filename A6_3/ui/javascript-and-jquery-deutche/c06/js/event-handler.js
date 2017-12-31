function checkUsername() {                                 // Deklariert Funktion
  var  elMsg = document.getElementById('feedback');         // Holt feedback-Element
  if (this.value.length < 5) {                              // Wenn username zu kurz
    elMsg.textContent = 'Der Benutzername muss mindestens 5 Zeichen lang sein';
  } else {                                                 // Anderenfalls
    elMsg.textContent = '';                                // Löscht Meldung
  }
}

var elUsername = document.getElementById('username');      // Ruft username ab
elUsername.onblur = checkUsername; // Ruft bei Verlust des Fokus checkuserName() auf