(function(){ 
  var form = document.getElementById('login');       // Ruft Formularelement ab

  addEvent(form, 'submit', function(e) {             // Beim Abschicken
    e.preventDefault();                              // Verhindert Abschicken
    var elements = this.elements;                    // Ruft alle Formularelemente ab
    var username = elements.username.value;          // Wählt Benutzername aus
    var msg      = 'Willkommen ' + username;            // Erstellt Begrüssung
    document.getElementById('main').textContent = msg; // Schreibt Begrüssung
  });
}());