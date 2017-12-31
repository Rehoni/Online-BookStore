var width = 12;                                     // Variable width
var height = 'test';                                // Variable height

function calculateArea(width, height) {
  try {
    var area = width * height;                      // Versucht area zu berechnen
    if (!isNaN(area)) {                             // Wenn es eine Zahl ist
      return area;                                  // Gibt Fläche zurück
    } else {                                        // Löst andernfalls einen Fehler aus
      throw new Error('calculateArea() received invalid number');
    }
  } catch(e) {                                     // Bei einem Fehler
    console.log(e.name + ' ' + e.message);          // Zeigt Fehler in der Konsole
    return 'Fläche konnte nicht berechnet werden.'; // SZeigt Fehlermeldung an
  }
}

// VERSUCHT DIE FLÄCHE AUF DER SEITE ANZUZEIGEN
document.getElementById('area').innerHTML = calculateArea(width, height);