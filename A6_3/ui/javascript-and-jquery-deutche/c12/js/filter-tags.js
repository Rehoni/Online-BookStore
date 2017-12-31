(function() {
	
  var $imgs = $('#gallery img');                  // Speichert alle Bilder
  var $buttons = $('#buttons');                   // Speichert Schaltflächenelement
  var tagged = {};                                // Erstellt tagged-Objekt

  $imgs.each(function() {                         // Durchläuft Bilder
    var img = this;                               // Speichert Bild in Variable
    var tags = $(this).data('tags');               // Ruft Schlagwörter ab
	
    if (tags) {                                   // Wenn Schlagwörter vorhanden
      tags.split(',').forEach(function(tagName) {  // Aufteilung beim Komma
        if (tagged[tagName] == null) {             // Wenn keine Schlagwörter vorhanden
          tagged[tagName] = [];                    // Fügt leeres Array zum Objekt hinzu
        }
        tagged[tagName].push(img);                 // Fügt Bild zum Array hinzu
      });
    }
  });

  // Hier stehen die Schaltflächen, Ereignishandler und Filter (s. S. 549)
  $('<button/>', {                                 // Erstellt leere Schaltfläche
     text: 'Alle',                                 // Fügt Text "Alle" hinzu
     class: 'active',                              // Macht die Schaltfläche aktiv
     click: function() {                           // Fügt click-handler hinzu
       $(this)                                     // Ruft angeklickte Schaltfläche ab
         .addClass('active')                       // Fügt Klasse active hinzu
         .siblings()                               // Ruft Geschwister ab
         .removeClass('active');                   // Entfernt active von ihnen
       $imgs.show();                               // Zeigt alle Bilder an
     }
   }).appendTo($buttons);                          // Fügt Schaltfläche hinzu
   
   $.each(tagged, function(tagName){               // Für jedes Schlagwort
     $('<button/>', {                              // Erstellt leere Schaltfläche
       text: tagName + ' (' + tagged[tagName].length + ')', // Nennt Schlagwort
       click: function() {                         // Fügt click-Handler hinzu
         $(this)                                   // Angeklickte Schaltfläche
           .addClass('active')                     // Macht angeklicktes Element aktiv
           .siblings()                             // Ruft die Geschwister ab
           .removeClass('active');                 // Entfernt active von ihnen
         $imgs                                     // Für alle Bilder
           .hide()                                 // Verbirgt sie
           .filter(tagged[tagName])                // Findet Bilder mit dem Schlagwort
           .show();                                // Zeigt nur diese an
       }
     }).appendTo($buttons);                        // Fügt Schaltfläche hinzu
   });
 }());