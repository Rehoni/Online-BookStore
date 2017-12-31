$('.tab-list').each(function(){                   // Sucht Reiterliste
  var $this = $(this);                            // Speichert Liste
  var $tab = $this.find('li.active');             // Ruft aktiven Listeneintrag ab
  var $link = $tab.find('a');                     // Ruft Link vom aktiven Eintrag ab
  var $panel = $($link.attr('href'));             // Ruft aktives Feld ab
  
  $this.on('click', '.tab-control', function(e) { // Beim Klick auf den Reiter
    e.preventDefault();                          // Verhindert Linkverhalten
    var $link = $(this);                         // Speichert aktuellen Link
    var id = this.hash;                          // Ruft href des angeklickten Reiters ab
	
    if (id && !$link.is('.active')) {             // Wenn zurzeit nicht aktiv
      $panel.removeClass('active');              // Macht Feld inaktiv
      $tab.removeClass('active');                // Macht Reiter inaktiv
	  
      $panel = $(id).addClass('active');         // Macht neues Feld aktiv
      $tab = $link.parent().addClass('active');  // Macht neuen Reiter aktiv
    }
  });
});
