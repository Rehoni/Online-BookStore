// JavaScript validation of subscription form.
// A. Einrichtung des Skripts 
// B. Allgemeine Überprüfungen in Sektion A
// C. Spezifische Überprüfungen in Sektion A
// D. Funktionen für get / set / zeige / entferne Fehlermeldungen
// E. Objekte zur Überprüfung mit RegEx welche aus Sektion B benutzt werden

// Dependencies: jQuery, jQueryUI, birthday.js, styles.css

// EINRICHTUNG DES SKRIPTS
(function () {
  document.forms.register.noValidate = true; // Deaktiviert HTML5-Validierung
  // -------------------------------------------------------------------------
  //  A) Einrichtung des Skripts
  // -------------------------------------------------------------------------
  $('form').on('submit', function(e) { // Beim Abschicken
    var elements = this.elements; // Sammlung der Steuerelemente
    var valid = {}; // Eigenes valid-Objekt
    var isValid; // isValid prüft Steuerelemente
    var isFormValid; // isFormValid prüft Formular

    // ALLGEMEINE PRÜFUNGEN (ruft Funktionen außerhalb des Ereignishandlers auf)
    for (var i = 0, l = (elements.length - 1); i < l; i++) {
      // validateRequired() s. S. 606, validateTypes() s. S. 610
      isValid = validateRequired(elements[i]) && validateTypes(elements[i]);
      if (!isValid) { // Wenn Tests nicht bestanden
        showErrorMessage(elements[i]); // Zeigt Fehlermeldung (S. 608)
      } else { // Anderenfalls
        removeErrorMessage(elements[i]); // Entfernt Fehlermeldungen
      } // Ende der if-Anweisung
      valid[elements[i].id] = isValid; // Fügt Element zu valid-Objekt hinzu
    } // Ende der for-Schleife

    // SPEZIFISCHE PRÜFUNGEN (nur 1 von 3 Funktionen, siehe S. 614-617)
    if (!validateBio()) { // Ruft validateBio() auf wenn ungültig
      showErrorMessage(document.getElementById('bio')); // Zeigt Fehler
      valid.bio = false; // Ändert valid-Objekt: ungültig
    } else { // Anderenfalls
      removeErrorMessage(document.getElementById('bio')); // Entfernt Fehler
    } // Hier folgen 2 weitere Funktionen (siehe S. 614-617)
	
    // HAT DAS FORMULAR BESTANDEN / KANN ES ABGESCHICKT WERDEN?
    // Durchläuft valid-Objekt, setzt isFormValid bei Fehlern auf false
    for (var field in valid) { // Prüft Eigenschaften von valid-Objekt
      if (!valid[field]) { // Wenn ungültig
        isFormValid = false; // Setzt isFormValid auf false
        break; // Stoppt bei Fehler for-Schleife
      } // Anderenfalls
      isFormValid = true; // Formular gültig, Abschicken OK
    }
	
    // Ist das Formular ungültig, wird das Abschicken verhindert
    if (!isFormValid) { // Wenn isFormValid nicht true ist
      e.preventDefault(); // Verhindert Abschicken des Formulars
    }
  }); // Ende des Ereignishandlers
  
  // -------------------------------------------------------------------------
  // B) Allgemeine Überprüfungen in Sektion A
  // -------------------------------------------------------------------------

  // PRÜFE OB DAS FELD ERFORDERLICH IST UND OB ES EINEN WERT BESITZT 
  // Hängt ab von isRequired() und isEmpty(), beide unten gezeigt, und von setErrorMessage - folgt später.
  function validateRequired(el) {                   // Buch Seite 606
    if (isRequired(el)) {                           // Ist dieses Element erforderlich?
      var valid = !isEmpty(el);                     // Ist der Wert nicht leer (true / false)?
      if (!valid) {                                 // Wenn die Variable false enthält
        setErrorMessage(el,  'Dieses Feld ist erforderlich');              // Fehlermeldung
      }
      return valid;                                 // Gibt Variable valid zurück (true or false)?
    }
    return true;                                    // Wenn nicht erforderlich ist alles OK
  }

  // PRÜFE OB DAS FELD ERFORDERLICH IST
  // wird benutzt durch validateRequired()
  function isRequired(el) {                         // Buch Seite 607 oben
   return ((typeof el.required === 'boolean') && el.required) ||
     (typeof el.required === 'string');
  }

  // PRÜFE OB DAS ELEMENT LEER IST (oder sein Inhalt entspricht dem Platzhalter-Text)
  // HTML5 Browser verhindern Texteingaben die gleich lauten wie der Platzhalter-Text
  // wird benutzt durch validateRequired()
  function isEmpty(el) {                            // Buch Seite 607 unten
    return !el.value || el.value === el.placeholder;
  }

  // PRÜFE OB DER WERT DEM ATTRIBUT-TYP ENTSPRICHT
  // Wird benutzt durch validateType object (ganz am Ende von dieser IIFE)
  function validateTypes(el) {                      // Buch Seite 610
    if (!el.value) return true;                     // true wenn das Element keinen Wert hat
    var type = $(el).data('type') || el.getAttribute('type');  // oder Eingabetyp
    if (typeof validateType[type] === 'function') { // Hat Objekt Methode des Typs?
      return validateType[type](el);                // Wenn ja, nimmt Validierung vor
    } else {                                        // Wenn nicht
      return true;                                  // true, da Test nicht möglich
    }
  }

  // -------------------------------------------------------------------------
  // C) Spezifische Überprüfungen in Sektion A
  // -------------------------------------------------------------------------

  // FALLS BEUTZER JÜNGER ALS 13 IST, PRÜFE DASS ELTERN DIE REGISTRIERUNG BESTÄTIGT HABEN
  // Abhängigkeiten zu: birthday.js (andernfalls sind Prüfungen nicht möglich)
  function validateParentsConsent() {               // Buch Seite 617
    var parentsConsent   = document.getElementById('parents-consent');
    var consentContainer = document.getElementById('consent-container');
    var valid = true;                     // Setzt Variable valid auf true
    if (consentContainer.className.indexOf('hide') === -1) {     // KK nicht sichtbar
      valid = parentsConsent.checked;     // Ändert valid: markiert oder nicht?
      if (!valid) {                       // Fehlermeldung, wenn nicht
        setErrorMessage(parentsConsent, 'Du brauchst die Erlaubnis der Eltern.');
      }
    }
    return valid;                               // Gibt valid zurück
  }

  // Prüft ob Lebenslauf nicht 140 Zeichen übersteigt
  function validateBio() {                          // Buch Seite 615 oben
    var bio = document.getElementById('bio');
    var valid = bio.value.length <= 140;
    if (!valid) {
      setErrorMessage(bio, 'Lebenslauf darf nicht mehr als 140 Zeichen umfassen.');
    }
    return valid;
  }

  // Prüft ob Passwort mindestens 8 Zeichen lang ist
  function validatePassword() {                     // Buch Seite 615 unten
    var password = document.getElementById('password');
    var valid = password.value.length >= 8;
    if (!valid) {
      setErrorMessage(password, 'Passwort muss mindestens 8 Zeichen lang sein');
    }
    return valid;
  }

  // -------------------------------------------------------------------------
  // D) Funktionen für get / set / zeige / entferne Fehlermeldungen  
  // -------------------------------------------------------------------------

  function setErrorMessage(el, message) {            // Buch Seite 608
    $(el).data('errorMessage', message);             // Speichert Fehlermeldung im Element
  }

  function getErrorMessage(el) {
    return $(el).data('errorMessage') || el.title;       // Get error message or title of element
  }

  function showErrorMessage(el) {                    // Buch Seite 609
    var $el = $(el);                                     // Wählt Element mit dem Fehler aus
    var errorContainer = $el.siblings('.error.message'); // Hat es bereits Fehler?

    if (!errorContainer.length) {                         // Wenn kein Fehler gefunden
       // Erstellt <span> für Fehlermeldung und fügt es hinter dem Element ein
       errorContainer = $('<span class="error message"></span>').insertAfter($el);
    }
    errorContainer.text(getErrorMessage(el));             // Fehelermeldung
  }

  function removeErrorMessage(el) {
	// Get the sibling of this form control used to hold the error message
    var errorContainer = $(el).siblings('.error.message'); 
    errorContainer.remove();                             // Remove the element that contains the error message
  }



  // -------------------------------------------------------------------------
  // E) Objekte zur Überprüfung mit RegEx welche aus Sektion B benutzt werden
  // -------------------------------------------------------------------------

  // Prüft ob DATA gültig ist. Falls nit setErrorMessage
  // Gibt true zurück falls gültig, sonst false
  var validateType = {           // Buch Seite 611 - Aufruf durch Zeile 91 (weiter oben)
    email: function (el) {                                 // Erstellt E-Mail Methode
      // Rudemntäre RegEx auf ein @ in email prüft
      var valid = /[^@]+@[^@]+/.test(el.value);            // Speichert Testergebnis in valid
      if (!valid) {                                        // Wenn Wert von valid nicht true ist
        setErrorMessage(el, 'Bitte geben Sie eine gültige E-Mail Adresse ein'); 
	  }                                                   // Richtet Fehlermeldung ein
      return valid;                                       // Return the valid variable
    },
    number: function (el) {                                // Erstellt number Methode
      var valid = /^\d+$/.test(el.value);                  // Speichert Testergebnis in valid
      if (!valid) {                                        // Wenn Wert von valid nicht true ist
        setErrorMessage(el, 'Bitte gültige Nummer eingeben');
      }
      return valid;
    },
    date: function (el) {                                  // Erstellt date Methode
                                                          // Speichert Testergebnis in valid
      var valid = /^(\d{2}\.\d{2}\.\d{4})|(\d{4}\.\d{2}\.\d{2})$/.test(el.value);
      if (!valid) {                                        // Wenn Wert von valid nicht true ist
        setErrorMessage(el, 'Bitte gültiges Datum eingeben ');  
      }
      return valid;                                        
    }
  };
  
}()); // Ende des IIFEs