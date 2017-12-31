// Dieses Beispiel benutzt nun Modernizr - bitte beachten: localstorage in Kleinbuchstaben
if (Modernizr.localstorage) {

  var txtUsername = document.getElementById('username'); // Ruft Formular-
                                                        // elemente ab.
  var txtAnswer = document.getElementById('answer');

  txtUsername.value = localStorage.getItem('username');  // Durch
                                                        // localStorage-Daten
  txtAnswer.value = localStorage.getItem('answer');      // gefüllte Elemente

  txtUsername.addEventListener('input', function () {    // Speichert Daten
    localStorage.setItem('username', txtUsername.value);
  }, false);

  txtAnswer.addEventListener('input', function () {      // Speichert Daten
    localStorage.setItem('answer', txtAnswer.value);
  }, false);
}