// EINTRÄGE AM ANFANG UND ENDE DER LISTE HINZUFÜGEN
var list = document.getElementsByTagName('ul')[0];      // Ruft <ul>-Element ab

// EINEN NEUEN EINTRAG AM ENDE DER LISTE HINZUFÜGEN
var newItemLast = document.createElement('li');         // Erstellt Element
var newTextLast = document.createTextNode('cream');     // Erstellt Textknoten
newItemLast.appendChild(newTextLast);    // Fügt Textknoten zum Element hinzu
list.appendChild(newItemLast);           // Fügt Element am Ende hinzu

// EINEN NEUEN EINTRAG AM ANFANG DER LISTE HINZUFÜGEN
var newItemFirst = document.createElement('li');        // Erstellt Element
var newTextFirst = document.createTextNode('Grünkohl'); // Erstellt Textknoten
newItemFirst.appendChild(newTextFirst);  // Fügt Textknoten zum Element hinzu
list.insertBefore(newItemFirst, list.firstChild);       // Fügt Element hinzu

var listItems = document.querySelectorAll('li');        // Alle <li>-Elemente

// GIBT ALLEN LI-ELEMENTEN DIE KLASSE COOL
var i;                                                 // Zählervariable
for (i = 0; i < listItems.length; i++) {                 // Schleife durch Elemente
 listItems[i].className = 'cool';                       // Ändert class in cool
}

// FÜGT DIE ANZAHL DER LISTENEINTRÄGE ZUR ÜBERSCHRIFT HINZU
var heading = document.querySelector('h2'); // h2-Element
var headingText = heading.firstChild.nodeValue; // h2-Text
var totalItems = listItems.length; // Anzahl <li>-Elemente
var newHeading = headingText + '<span>' + totalItems + '</span>'; // Inhalt
heading.textContent = newHeading; // Ändert h2