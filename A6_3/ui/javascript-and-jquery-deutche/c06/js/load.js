function setup() {                                 // Deklariert Funktion
var textInput;                                     // Erstellt Variable
textInput = document.getElementById('username');    // Ruft username ab
textInput.focus();                                 // Gibt username Fokus
}

window.addEventListener('load', setup, false);   // Ruft nach Laden der Seite
                                                 // setup() auf


/* Längere Version FÜR IE8 (und tiefer)

if (el.addEventListener) {
      el.addEventListener('click', function(e) {
        itemDone(e);
    }, false);
} else {
    el.attachEvent('onload', function(e){
      itemDone(e);
    });
}

*/