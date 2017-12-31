var xhr = new XMLHttpRequest();             // Erstellt XMLHttpRequest-Objekt

xhr.onload = function() {                   // Wenn Antwort geladen ist
  // Die folgende Prüfung funktioniert nicht lokal, nur auf einem Server
  if (xhr.status === 200) {                 // Wenn Serverstatus OK war

    // DIESER TEIL IST ANDERS, DA XML UND NICHT HTML VERARBEITET WIRD
    var response = xhr.responseXML;                  // Ruft XML vom Server ab
    var events = response.getElementsByTagName('event');
    // Sucht <event>-Elemente

    for (var i = 0; i < events.length; i++) {         // Durchläuft sie
      var container, image, location, city, newline; // Deklariert Variablen
      container = document.createElement('div');     // Erstellt <div>-Container
      container.className = 'event';                 // Fügt class-Attribut hinzu
      
	  image = document.createElement('img');         // Fügt Kartenbild hinzu
      image.setAttribute('src', getNodeValue(events[i], 'map'));
      image.appendChild(document.createTextNode(getNodeValue(events[i], 'map')));
      container.appendChild(image);
      
	  location = document.createElement('p');        // Fügt Ortsdaten hinzu
      city = document.createElement('b');
      newline = document.createElement('br');
      city.appendChild(document.createTextNode(getNodeValue(events[i],
                                                               'location')));
      location.appendChild(newline);
      location.insertBefore(city, newline);
      location.appendChild(document.createTextNode(getNodeValue(events[i],
                                                                   'date')));
      container.appendChild(location);

      document.getElementById('content').appendChild(container);
    }
	
    function getNodeValue(obj, tag) {                // Ruft Inhalte von XML ab
      return obj.getElementsByTagName(tag)[0].firstChild.nodeValue;
    }
	
    // DER LETZTE TEIL ENTSPRICHT DEM HTML-BEISPIEL, RUFT ABER EINE XML-DATEI AB
  }
};
xhr.open('GET', 'data/data.xml', true);              // Bereitet Anforderung vor
xhr.send(null);                                      // Sendet Anforderung