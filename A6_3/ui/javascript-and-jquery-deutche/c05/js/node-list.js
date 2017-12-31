var hotItems = document.querySelectorAll('li.hot');
    // Speichert Knotenliste in einem Array

if (hotItems.length > 0) {                     // Wenn sie Elemente enthält
    for (var i=0; i<hotItems.length; i++) {     // Durchläuft jedes Element
        hotItems[i].className = 'cool';        // Ändert Wert von class
    }
}
