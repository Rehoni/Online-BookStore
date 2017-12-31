// Findet Elemente der Klasse "hot"
var elements = document.getElementsByClassName('hot');

if (elements.length > 2) {    // Wenn 3 oder mehr gefunden werden

    var el = elements[2];     // Wählt das 3. Element in der Knotenliste aus
    el.className = 'cool';    // Ändert den Wert des class-Attributs
}