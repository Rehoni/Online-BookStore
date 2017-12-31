function getTarget(e) {                     // Deklariert Funktion
  if (!e) {                                 // Wenn es kein event-Objekt gibt
    e = window.event;                       // Verwendet altes IE-event-Objekt
  }
  return e.target || e.srcElement;           // Ruft Ereignisziel ab
}

function itemDone(e) {                          // Deklariert Funktion
 // Entfernt einen Eintrag von der Liste
  var target, elParent, elGrandparent;          // Deklariert Variablen
  target = getTarget(e);                        // Ruft angeklickten Link ab

  /*
  Im Buch wird folgende Code benutzt - doch dieser weist gleich zwei Mängel auf:
  - Klick zwischen den List-Items entfernt die ganze Liste
  - Klick auf Italic Text entfernt den Link - nicht das List-Item

  elParent = target.parentNode;                 // Ruft dessen Listeneintrag ab
  elGrandparent = target.parentNode.parentNode; // Ruft dessen Liste ab
  elGrandparent.removeChild(elParent);          // Entfernt Eintrag von der Liste

  Die nächsten 10 Zeilen beheben die Situation
  */

  if ( target.nodeName.toLowerCase() == "a" ) {   // User klick auf ein <a> Element
    elListItem = target.parentNode;              // das <li> Element holen
    elList = elListItem.parentNode;              // und dann dessen <ul> Element
    elList.removeChild(elListItem);              // List-Item aus Liste entfernen
  }
  if ( target.nodeName.toLowerCase() == "em" ) {  // User klick auf ein <em> Element
    elListItem = target.parentNode.parentNode;   // dessen <li> Element holen
    elList = elListItem.parentNode;              // und dann dessen <ul> Element
    elList.removeChild(elListItem);              // List-Item aus Liste entfernen
  }
  // Ende Korrektur
  // Verhindert, dass der Link zu einer anderen Seite führt
  if (e.preventDefault) {                        // Wenn preventDefault() funktioniert
    e.preventDefault();                          // Verwendet preventDefault()
  } else {                                       // Anderenfalls
    e.returnValue = false;                       // Verwendet alte IE-Version
  }
}

// Richtet den Ereignislistener ein, um bei einem Klick itemDone() aufzurufen
var el = document.getElementById('shoppingList'); // Ruft Einkaufsliste ab
if (el.addEventListener) {                        // Wenn Ereignislistener funktioniert
  el.addEventListener('click', function(e) {       // Fügt Listener für click hinzu
    itemDone(e);                                  // Ruft itemDone() auf
  }, false);                                      // Nutzt Ereignis-Bubbling
} else {                                          // Anderenfalls
  el.attachEvent('onclick', function(e){           // Verwendet altes IE-Modell: onclick
    itemDone(e);                                  // Ruft itemDone() auf
  });
}