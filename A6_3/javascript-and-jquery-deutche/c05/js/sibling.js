// Wählt den Ausgangspunkt aus und findet dessen Geschwister
var startItem = document.getElementById('two');
var prevItem = startItem.previousSibling;
var nextItem = startItem.nextSibling;

// Ändert den Wert der class-Attribute der Geschwister
prevItem.className = 'complete';
nextItem.className = 'cool';
