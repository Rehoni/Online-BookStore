var xhr = new XMLHttpRequest();               // Erstellt XMLHttpRequest-Objekt

xhr.onload = function() {                     // Wenn Antwort geladen ist
// Die folgende Prüfung funktioniert nicht lokal, nur auf einem Server
  if(xhr.status === 200) {                    // Wenn Serverstatus OK war
    document.getElementById('content').innerHTML = xhr.responseText;// Änderung
  }
};

xhr.open('GET', 'data/data.html', true);     // Bereitet Anforderung vor
xhr.send(null);                              // Sendet Anforderung