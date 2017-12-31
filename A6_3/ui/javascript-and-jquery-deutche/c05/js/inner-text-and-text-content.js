var firstItem = document.getElementById('one'); // Findet 1. Listeneintrag
var showTextContent = firstItem.textContent;    // Ruft Wert von textContent ab
var showInnerText = firstItem.innerText;        // Ruft Wert von innerText ab

// Zeigt den Inhalt der beiden Eigenschaften am Ende der Liste an
var msg = '<p>textContent: ' + showTextContent + '</p>';
msg += '<p>innerText: ' + showInnerText + '</p>';
var el = document.getElementById('scriptResults');
el.innerHTML = msg;

firstItem.textContent = 'Sauerteigbrot';       // Ändert 1. Listeneintrag