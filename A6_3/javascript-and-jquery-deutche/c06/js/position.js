var sx = document.getElementById('sx');            // Element für screenX
var sy = document.getElementById('sy');            // Element für screenY
var px = document.getElementById('px');            // Element für pageX
var py = document.getElementById('py');            // Element für pageY
var cx = document.getElementById('cx');            // Element für clientX
var cy = document.getElementById('cy');            // Element für clientY

function showPosition(event) {       // Deklariert die Funktion
  sx.value = event.screenX;          // Aktualisiert das Element mit screenX
  sy.value = event.screenY;          // Aktualisiert das Element mit screenY
  px.value = event.pageX;            // Aktualisiert das Element mit pageX
  py.value = event.pageY;            // Aktualisiert das Element mit pageY
  cx.value = event.clientX;          // Aktualisiert das Element mit clientX
  cy.value = event.clientY;          // Aktualisiert das Element mit clientY
}

var el = document.getElementById('body');        // Ruft das body-Element ab
el.addEventListener('mousemove', showPosition, false);   // Bewegung ändert
                                                        // Position