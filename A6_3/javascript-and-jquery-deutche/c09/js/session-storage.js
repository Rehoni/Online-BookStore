// Dieses Beispiel benutzt nun Modernizr - bitte beachten: sessionstorage in Kleinbuchstaben
if (Modernizr.sessionstorage) {

  var txtUsername = document.getElementById('username'),  // Ruft Formular-
      txtAnswer = document.getElementById('answer');      // element ab.

  txtUsername.value = sessionStorage.getItem('username'); // Durch
  txtAnswer.value = sessionStorage.getItem('answer');     // sessionStorage
                                                         // gefüllte Elemente

  txtUsername.addEventListener('input', function () {     // Speichert Daten
    sessionStorage.setItem('username', txtUsername.value);
  }, false);

  txtAnswer.addEventListener('input', function () {       // Speichert Daten
    sessionStorage.setItem('answer', txtAnswer.value);
  }, false);
}