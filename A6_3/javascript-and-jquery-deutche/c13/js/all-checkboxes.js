(function() {
  var form     = document.getElementById('interests'); // Ruft Formular ab
  var elements = form.elements;             // Alle Elemente im Formular
  var options  = elements.genre;            // Array: Genre-Kontrollkästchen
  var all      = document.getElementById('all');     // Kontrollkästchen 'all'

  function updateAll() {
    for (var i = 0; i < options.length; i++) {        // Durchläuft alle Kästchen
      options[i].checked = all.checked;              // Ändert checked
    }
  }
  addEvent(all, 'change', updateAll);               // Fügt Ereignislistener hinzu

  function clearAllOption(e) {
    var target = e.target || e.srcElement;           // Ruft Ereignisziel ab
    if (!target.checked) {                           // Wenn nicht markiert
      all.checked = false;                 // Hebt Markierung von 'All' auf
    }
  }
  for (var i = 0; i < options.length; i++) {          // Durchläuft Kästchen 
    addEvent(options[i], 'change', clearAllOption);  // Fügt Listener hinzu
  }

}());