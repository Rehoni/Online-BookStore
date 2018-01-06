$('nav a').on('click', function(e) {      // Klick auf nav-Link
  e.preventDefault();                    // Verhindert Laden des neuen Links
  var url = this.href;                    // Ruft href-Wert ab

  $('nav a.current').removeClass('current');  // Löscht Indikator für akt. Seite
  $(this).addClass('current');             // Neuer Indikator für aktuelle Seite

  $('#container').remove();                           // Entfernt alten Inhalt
  $('#content').load(url + ' #content').hide().fadeIn('slow');  // Neuer Inhalt
});
