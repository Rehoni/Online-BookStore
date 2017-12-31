var xhr = new XMLHttpRequest();              // Erstellt XMLHttpRequest-Objekt

xhr.onload = function() {           // Wenn sich der Bereitschaftsstatus ändert
  if(xhr.status === 200) {                    // Wenn Serverstatus OK war
    responseObject = JSON.parse(xhr.responseText);
	
    // BAUT DEN STRING MIT DEM NEUEN INHALT AUF (auch DOM-Bearbeitung ist möglich)
    var newContent = '';
    for (var i = 0; i < responseObject.events.length; i++) {      // Durchläuft
                                                               // Objekte
      newContent += '<div class="event">';
      newContent += '<img src="' + responseObject.events[i].map + '" ';
      newContent += 'alt="' + responseObject.events[i].location + '" />';
      newContent += '<p><b>' + responseObject.events[i].location + '</b><br>';
      newContent += responseObject.events[i].date + '</p>';
      newContent += '</div>';
    }
	
    // Aktualisiert die Seite mit dem neuen Inhalt
    document.getElementById('content').innerHTML = newContent;
  }
};

xhr.open('GET', 'data/data.json', true);     // Bereitet Anforderung vor
xhr.send(null);                              // Sendet Anforderung