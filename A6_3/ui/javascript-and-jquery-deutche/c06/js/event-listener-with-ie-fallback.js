var elUsername = document.getElementById('username');  // Ruft username ab
var elMsg = document.getElementById('feedback');       // Ruft feedback ab

function checkUsername(minLength) {                // Deklariert Funktion
  if (elUsername.value.length < minLength) {        // Wenn username zu kurz
    elMsg.innerHTML = 'Der Benutzername muss mindestens ' + minLength +
                      ' Zeichen lang sein ';
  } else {                                            // Anderenfalls
    elMsg.innerHTML = '';                             // Löscht Meldung
  } 
}

if (elUsername.addEventListener) {      // Wenn Ereignislistener unterstützt
  elUsername.addEventListener('blur', function(){  // username verliert Fokus
  checkUsername(5);                                // Ruft checkUsername() ab
  }, false );                                      // Erfassung in Bubble-Phase
} else {                                           // Anderenfalls
  elUsername.attachEvent('onblur', function(){     // IE-Ausweichlösung onblur
  checkUsername(5);                                // Ruft checkUsername() auf
  });
}