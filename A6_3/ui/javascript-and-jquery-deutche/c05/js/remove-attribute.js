var firstItem = document.getElementById('one'); // Ruft 1. Eintrag ab
if (firstItem.hasAttribute('class')) {     // Wenn er ein class-Attribut hat
    firstItem.removeAttribute('class');    // Entfernt das class-Attribut
}