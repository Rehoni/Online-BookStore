// Dieses Beispiel wurde aktualisiert um auf "keyup event" zu reagieren 
// als auf "keypress" (letzte Zeile, bei addEventListener). Somit ist neuer Text 
// in <textarea> erst drin bei Loslassen der Taste

var el;                                                    // Declariert Variable

function charCount(e) {                                    // Declariert Funktion
  var textEntered, charDisplay, counter, lastkey;          // Declariert Variable
  textEntered = document.getElementById('message').value;  // Text des Benutzers
  charDisplay = document.getElementById('charactersLeft'); // Zählerelement
  counter = (180 - (textEntered.length));                  // Verbleibende Zeichen
  charDisplay.textContent = counter;                      // Zeigt verbleibende Anzahl an
  
  lastkey = document.getElementById('lastKey');            // Ruft letzte Taste ab
  lastkey.textContent = 'ASCII-Code des letzten Zeichens: ' + e.keyCode; 
                                                          // Meldung zusammenstellen 
}
el = document.getElementById('message');                   // Ruft Meldungselement ab
el.addEventListener('keyup', charCount, false); // on keyup Ereignis charCount() Aufruf