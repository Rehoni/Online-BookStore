var elements = document.getElementsByTagName('li');  // Findet <li>-Elemente

if (elements.length > 0) {             // Wenn mindestens eins gefunden wird

    var el = elements[0];              // Wählt das erste Element
                                      // mit der Arraysyntax aus
    el.className = 'cool';             // Ändert den Wert des class-Attributs

}