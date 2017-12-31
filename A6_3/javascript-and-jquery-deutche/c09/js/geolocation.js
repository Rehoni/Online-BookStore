// Note that this example might not work locally in Chrome (it works on a web server).
// In other browsers, you may get a prompt that allows you to share location data.
// It may take the browser a while to determine your location (his demonstrates why you should not depend on this information before loading the entire page).

var elMap = document.getElementById('loc');                // HTML-Element
var msg = 'Leider ist es nicht möglich Ihren Standort zu bestimmen.';
   // Fehler
   
if (Modernizr.geolocation) {                               // Bei Unterstützung
  navigator.geolocation.getCurrentPosition(success, fail); // Sucht Standort
  elMap.textContent = 'Prüfe Standort...';                 // Meldung über Vorgang
} else {                                                   // Keine Unterstützung
  elMap.textContent = msg;                                 // Fügt manuellen Eintrag hinzu
}

function success(position) {                               // Standort ermittelt
  msg = '<h3>Longitude:<br>';                              // Erstellt Meldung
  msg += position.coords.latitude + '</h3>';                // Fügt Breite hinzu
  msg += '<h3>Latitude:<br>';                              // Erstellt Meldung
  msg += position.coords.longitude + '</h3>';               // Fügt Länge hinzu
  elMap.innerHTML = msg;                                   // Zeigt Standort
}

function fail(msg) {                                       // Standort nicht ermittelt
  elMap.textContent = msg;                                 // Zeigt Texteingabe
  console.log(msg.code);                                   // Protokolliert den Fehler
}