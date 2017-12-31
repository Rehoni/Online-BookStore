var elList, addLink, newEl, newText, counter, listItems; // Dekl. Variablen

elList = document.getElementById('list');          // Ruft Liste ab
addLink = document.querySelector('a');       // Ruft Schaltfläche zum
                                            // Hinzufügen von Einträgen ab
counter = document.getElementById('counter');      // Ruft den Zähler ab

function addItem(e) {                             // Deklariert Funktion
  e.preventDefault();                             // Verhindert Linkaktion
  newEl = document.createElement('li');            // Neues <li>-Element
  newText = document.createTextNode('Eintrag hinzufügen'); // Neuer TK
  newEl.appendChild(newText);                  // Fügt Text zu <li> hinzu
  elList.appendChild(newEl);                   // Fügt <li> zur Liste hinzu
}

function updateCount() {                            // Deklariert Funktion
  listitems = list.getElementsByTagName('li').length;   // Anzahl <li>
  counter.innerHTML = listitems;                    // Aktualisiert Zähler
}

addLink.addEventListener('click', addItem, false);  // Klick
elList.addEventListener('DOMNodeInserted', updateCount, false); // DOM-
                                                               // Änderung