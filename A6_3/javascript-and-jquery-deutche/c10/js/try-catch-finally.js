var feed = document.getElementById('feed');

// Korrketer Feed
var response = '{"deals": [{"title": "Farrow and Ball","description": "New season 2.5l tins are all reduced this week","price": 30,"link": "http://www.example.com/farrow-and-ball/"},{"title": "Siecle Paints from the UK","description": "Probably the best named paints in the world","price": 28,"link": "http://www.example.com/siecle/"},{"title": "Kelly Hoppen","description": "Now stocking paints by interior designer Kelly Hoppen","price": 42,"link": "http://www.example.com/kelly-hoppen/"}]}';
// Feed mit Fehlern - Nächste Zeile auskommentieren für normalen Ablauf
response = '{"deals": [{"title": "Farrow and Ball","description": "New season 2.5l '; // JSON data

if (response) {
  try {
    var dealData = JSON.parse(response);              // Analysiert JSON-Daten
    showContent(dealData);                            // Zeigt JSON-Daten an
  } catch(e) {
    var errorMessage = e.name + ' ' + e.message;       // Erstellt Fehlermeldung
    console.log(errorMessage);                        // Zeigt Meldung
    feed.innerHTML = '<em>Abschlüsse konnten nicht geladen werden</em>';// Show users msg
  } finally {
    var link = document.createElement('a');           // Ergänzt Aktualisierungslink
    link.innerHTML = ' <a href="try-catch-finally.html">Aktualisieren</a>';
    feed.appendChild(link);
  }
}

function showContent(dealData) {
  var newContent = '';
  for (var i in dealData.deals) {
    newContent += '<div class="deal">';
    newContent += '<h2>' + dealData.deals[i].title + '</h2>';
    newContent += '<p>' + dealData.deals[i].description + '</p>';
    newContent += '<a href="' + dealData.deals[i].link + '">';
    newContent += ' ' + dealData.deals[i].link;
    newContent +='</a>';
    newContent += '</div>';
  }
  feed.innerHTML = newContent;
}