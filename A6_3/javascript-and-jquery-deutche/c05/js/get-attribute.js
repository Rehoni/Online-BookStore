var firstItem = document.getElementById('one'); // Ruft ersten Listeneintrag ab

if (firstItem.hasAttribute('class')) {      // Wenn er ein class-Attribut hat
    var attr = firstItem.getAttribute('class');         // Ruft Attribut ab

    // Gibt den Attributwert hinter der Liste an
    var el = document.getElementById('scriptResults');
    el.innerHTML = '<p>Das erste Element hat die Klasse: ' + attr + '</p>';
}