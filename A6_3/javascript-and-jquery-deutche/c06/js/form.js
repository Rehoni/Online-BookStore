var elForm, elSelectPackage, elPackageHint, elTerms; // Deklariert Variablen
elForm          = document.getElementById('formSignup'); // Speichert Elemente
elSelectPackage = document.getElementById('package');
elPackageHint   = document.getElementById('packageHint');
elTerms         = document.getElementById('terms');
elTermsHint     = document.getElementById('termsHint');

function packageHint() {                         // Deklariert Funktion
  var package = this.options[this.selectedIndex].value;   // Ausgew. Option
  if (package == 'monthly') {                     // Bei Auswahl von monthly
    elPackageHint.innerHTML = 'Wenn Sie den Jahresbetrag bezahlen, ' +
                              'sparen Sie $10!'; // Zeigt diese Meldung an
  } else {                                       // Anderenfalls
    elPackageHint.innerHTML = 'Kluge Wahl!';     // Zeigt diese Meldung an
  }
}

function checkTerms(event) {                     // Deklariert Funktion
  if (!elTerms.checked) {            // Wenn Kontrollkästchen nicht aktiviert
    elTermsHint.innerHTML = 'Sie müssen den Geschäftsbedingungen zustimmen!';
                                                // Zeigt Meldung an
    event.preventDefault();                     // Schickt Formular nicht ab
  }
}

// Ereignislistener: submit ruft checkTerms() auf, change ruft packageHint() auf
elForm.addEventListener('submit', checkTerms, false);
elSelectPackage.addEventListener('change', packageHint, false);
