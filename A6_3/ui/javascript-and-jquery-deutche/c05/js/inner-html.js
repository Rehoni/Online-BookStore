// Speichert den ersten Listeneintrag in einer Variable
var firstItem = document.getElementById('one');

// Ruft den Inhalt des ersten Listeneintrags ab
var itemContent = firstItem.innerHTML;

// Macht aus dem Inhalt des ersten Listeneintrags einen Link
firstItem.innerHTML = '<a href=\"http://example.org\">' + itemContent + '</a>';
