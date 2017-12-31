(function() {                            // Steht in IIFE
  var $imgs = $('#gallery img');          // Ruft Bilder ab
  var $search = $('#filter-search');      // Ruft Eingabeelement ab
  var cache = [];                         // Erstellt Array cache
 
  $imgs.each(function() {                 // Für jedes Bild
    cache.push({                          // Fügt Objekt zum Array cache hinzu
      element: this,                      // Dieses Bild
      text: this.alt.trim().toLowerCase()  // Sein alt-Text (klein, beschnitten)
    });
  });

  function filter() {                     // Deklariert Funktion filter()
    var query = this.value.trim().toLowerCase();    // Ruft Suchbegriff ab

    cache.forEach(function(img) {    // Übergibt Bild für jeden Eintrag in cache
      var index = 0;                      // Setzt index auf 0
      if (query) {                        // Wenn es eine Suchabfrage gibt
        index = img.text.indexOf(query);  // Sucht Abfragetext
      }

      img.element.style.display = index === -1 ? 'none' : ''; // Zeigt/verbirgt
    });
  }

  if ('oninput' in $search[0]) {          // Wenn der Browser input unterstützt
    $search.on('input', filter);         // Ruft filter() bei input auf
  } else {                               // Anderenfalls
    $search.on('keyup', filter);         // Ruft filter() bei keyup auf
  }
}());