function checkUsername() {                          // Deklariert Funktion
  var elMsg = document.getElementById('feedback');   // Ruft  -Element ab
  var elUsername = document.getElementById('username'); // Ruft username ab
  if (elUsername.value.length < 5) {                 // Wenn username zu lang ist
    elMsg.textContent = 'Der Benutzername muss mindestens 5 Zeichen lang sein';
  } else {                                             // Anderenfalls
    elMsg.textContent = '';                            // Löscht Meldung
  }
}