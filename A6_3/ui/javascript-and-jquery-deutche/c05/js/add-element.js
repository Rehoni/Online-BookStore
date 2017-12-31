// Erstellt ein neues Element und speichert es in einer Variable.
var newEl = document.createElement('li');

// Erstellt einen Textknoten und speichert ihn in einer Variable.
var newText = document.createTextNode('Quinoa');

// Hängt den neuen Textknoten an das neue Element an.
newEl.appendChild(newText);

// Sucht die Position, an der das neue Element hinzugefügt werden soll.
var position = document.getElementsByTagName('ul')[0];

// Fügt das neue Element an der Stelle ein.
position.appendChild(newEl);