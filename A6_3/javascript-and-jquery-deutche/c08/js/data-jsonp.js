function showEvents(data) {          // Callback beim Laden der JSON-Daten
  var newContent = '';               // Variable für den HTML-Inhalt

  // BAUT DEN STRING MIT DEM NEUEN INHALT AUF (auch DOM-Bearbeitung ist möglich)
  for (var i = 0; i < data.events.length; i++) {            // Durchläuft die Daten
    newContent += '<div class="event">';
    newContent += '<img src="' + data.events[i].map + '"';
    newContent += ' alt="' + data.events[i].location + '" />';
    newContent += '<p><b>' + data.events[i].location + '</b><br>';
    newContent += data.events[i].date + '</p>';
    newContent += '</div>';
  }
  // Aktualisiert die Seite mit dem neuen Inhalt
  document.getElementById('content').innerHTML = newContent; 
}