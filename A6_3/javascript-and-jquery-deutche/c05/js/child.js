// Wählt den Ausgangspunkt aus und findet dessen Kinder
var startItem = document.getElementsByTagName('ul')[0];
var firstItem = startItem.firstChild;
var lastItem = startItem.lastChild;

// Ändert den Wert der class-Attribute der Kinder
firstItem.setAttribute('class', 'complete');
lastItem.setAttribute('class', 'cool');