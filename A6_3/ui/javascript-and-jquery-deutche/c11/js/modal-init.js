(function(){
  var $content = $('#share-options').detach();   // Entfernt Inhalt von der Seite

  $('#share').on('click', function() {           // Klick Handler zum Öffnen des Fensters
    modal.open({content: $content, width:340, height:300});
  });
}());