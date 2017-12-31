(function() {

  var pwd = document.getElementById('pwd');     // Ruft Passworteingabe ab
  var chk = document.getElementById('showPwd'); // Ruft Kontrollkästchen ab

  addEvent(chk, 'change', function(e) {         // Wenn Kontrollkästchen angeklickt
    var target = e.target || e.srcElement;      // Ruft Element ab
    try {                                       // Versucht folgenden Codeblock
      if (target.checked) {                     // wenn Kontrollkästchen markiert
        pwd.type = 'text';                      // Setzt Eingabetyp auf text
      } else {                                  // Andernfalls
        pwd.type = 'password';                  // Setzt Eingabetyp auf password
      }
    } catch(error) {                            // Bei einem Fehler
      alert('Dieser Browser kann den Typ nicht ändern'); // Fehlermeldung
    }
  });

}());