(function () {                                     // Stellt Code in IIFE
  // Test: Erstellt ein Eingabeelement und prüft Unterstützung von placeholder
  if ('placeholder' in document.createElement('input')) {
    return;
  }

  var length = document.forms.length;              // Ruft Anzahl Formulare ab
  for (var i = 0, l = length; i < l; i++ ) {         // Durchläuft alle Formulare
    showPlaceholder(document.forms[i].elements);   // Ruft showPlaceholder() auf
  }

  function showPlaceholder(elements) {             // Deklariert Funktion
    for (var i = 0, l = elements.length; i < l; i++) { // Für jedes Element
      var el = elements[i];                        // Speichert das Element
      if (!el.placeholder) {                       // Wenn kein Platzhalter
        continue;                                 // Zum nächsten Element
      } // Anderenfalls
      el.style.color = '#666666';                  // Setzt Text auf Grau
      el.value = el.placeholder;                   // Fügt Platzhaltertext hinzu

      addEvent(el, 'focus', function () {          // Bei Fokus
        if (this.value === this.placeholder) {     // If value=placeholder
          this.value = '';                        // Leert Texteingabe
          this.style.color = '#000000';           // Macht Text schwarz
        }
      });

      addEvent(el, 'blur', function () {           // Bei blur-Ereignis
        if (this.value === '') {                   // Wenn Eingabe leer ist
          this.value = this.placeholder;          // Setzt value auf placeholder
          this.style.color = '#666666';           // Macht Text grau
        }
      });
    }                                             // Ende der for-Schleife
  }                                               // Ende von showPlaceholder(
}());