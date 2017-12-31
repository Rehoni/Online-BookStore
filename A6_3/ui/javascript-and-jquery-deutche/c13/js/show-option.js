(function() {
  var form, options, other, otherText, hide;           // Deklariert Variablen
  form      = document.getElementById('how-heard');    // Ruft das Formular ab
  options   = form.elements.heard;                // Ruft Optionsschalter ab
  other     = document.getElementById('other');   // Optionsschalter Sonstige
  otherText = document.getElementById('other-text');   // Textfeld Sonstoge
  otherText.className = 'hide';                        // Verbirgt Textfeld

  for (var i = [0]; i < options.length; i++) {      // Durchläuft Optionsschalter
    addEvent(options[i], 'click', radioChanged);  // Fügt ereignislistener hinzu
  }

  function radioChanged() {
    hide = other.checked ? '' : 'hide';            // Ist Sonstige markiert?
    otherText.className = hide;                   // Sichtbarkeit des Textfelds
    if (hide) {                                   // Textfeld verborgen
      otherText.value = '';                       // Leert Textfeld
    }
  }
}());