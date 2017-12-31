$(function() { // Wenn das DOM bereit ist

  var times; // Deklariert globale Variable
  $.ajax({ // Richtet Anforderung ein
    beforeSend: function(xhr){ // Vor Anforderung der Daten
      if (xhr.overrideMimeType) { // Falls unterstützt
        xhr.overrideMimeType("application/json"); // Legt MIME fest
      }
    }
  });
  
  // FUNKTION, DIE DATEN VON DER JSON-DATEI ABRUFT
  function loadTimetable() { // Deklariert Funktion
    $.getJSON('data/example.json') // Versucht JSON-Daten abzurufen
       .done( function(data){ // Bei Erfolg
          times = data; // Speichert Daten in Variable
        }).fail( function() { // Zeigt bei Problemen Meldung an
          $('#event').html('Leider können wir das Programm zurzeit nicht laden');
        });
  }
	
  loadTimetable(); // Ruft Funktion auf

  // LÄDT BEI EINEM KLICK AUF EINE VERANSTALTUNG DEREN PROGRAMM
  $('#content').on('click', '#event a', function(e) { // Klick auf Ort
  
    e.preventDefault(); // Verhindert Laden der Seite
    var loc = this.id.toUpperCase(); // Ruft id-Wert ab

    var newContent = ''; // Baut Programm auf
    for (var i = 0; i < times[loc].length; i++) { // Durchläuft Kurse
      newContent += '<li><span class="time">' + times[loc][i].time + '</span>';
      newContent += '<a href="descriptions.html#';
      newContent += times[loc][i].title.replace(/ /g, '-') + '">';
      newContent += times[loc][i].title + '</a></li>';
    }
	
    $('#sessions').html('<ul>' + newContent + '</ul>'); // Zeigt Zeit an

    $('#event a.current').removeClass('current'); // Aktualisiert ausgew. Link
    $(this).addClass('current');

    $('#details').text(''); // Löscht dritte Spalte
  });

  // LÄDT DIE BESCHREIBUNG BEI EINEM KLICK AUF EINEN KURS
  $('#content').on('click', '#sessions li a', function(e) { // Klick auf Kurs
    e.preventDefault(); // Verhindert Laden
    var fragment = this.href; // Titel ist in href

    fragment = fragment.replace('#', ' #'); // Fügt Leerzeichen hinter # hinzu
    $('#details').load(fragment); // Lädt Informationen

    $('#sessions a.current').removeClass('current'); // Aktualisiert Auswahl
    $(this).addClass('current');
  });
  
  // KLICK AUF DEN HAUPTNAVIGATIONSBEREICH
  $('nav a').on('click', function(e) { // Klick auf nav
    e.preventDefault(); // Verhindert Laden
    var url = this.href; // Ruft zu ladenden URL ab

    $('nav a.current').removeClass('current'); // Aktualisiert nav
    $(this).addClass('current');

    $('#container').remove(); // Entfernt alten Inhalt
    $('#content').load(url + ' #container').hide().fadeIn('slow'); // Inhalt neu
  });

});