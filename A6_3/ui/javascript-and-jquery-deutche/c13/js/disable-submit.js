(function(){
  var form      = document.getElementById('newPwd');  // Das Formular
  var password  = document.getElementById('pwd');     // Passwortfeld
  var submit    = document.getElementById('submit');  // Abschicken Button

  var submitted = false;                            // Wurde daas Formular schon abgeschickt?
  submit.disabled = true;                           // Deaktiviert "Abschicken"
  submit.className = 'disabled';                    // Formatiert "Abschicken"
  console.log(submit.className);
  
  // Bei Eingabe: Prüft, ob "Abschicken" aktiviert werden soll
  addEvent(password, 'input', function(e) {         // Bei Passworteingabe
    var target = e.target || e.srcElement;          // Ereignisziel
    submit.disabled = submitted || !target.value;   // Legt disabled fest
    // Wenn Formular schon abgeschickt oder P'wort kein Wert hat: disabled
    submit.className = (submitted || !target.value) ? 'disabled' : 'enabled';
  }); 

  // Bei Abschicken: Deaktiviert Formular, um erneutes Abschicken zu verhindern
  addEvent(form, 'submit', function(e) {            // Bei Abschicken
    if (submit.disabled || submitted) {             // Wenn dekativiert oder gesendet
      e.preventDefault();                          // Verhindert Abschicken
      return;                                      // Stoppt Verarbeitungsfunktion
    }                                              // Andernfalls fortfahren
    submit.disabled = true;                         // Deaktiviert "Abschicken"
    submitted = true;                               // Aktualisiert submitted
    submit.className = 'disabled';                  // Ändert Stil

    // Nur zur Demo: Was gesendet worden wäre/zeigt "Abschicken" deaktiviert
    e.preventDefault();                             // Verhindert Abschicken
    alert('Passwort ist ' + password.value);         // Zeigt Text
  });
}());