$('#register').on('submit', function(e) {     // Bei Abschicken des Formulars
  e.preventDefault();                        // Verhindert Senden des Formulars
  var details = $('#register').serialize();   // Serialisiert Formulardaten
  $.post('register.php', details, function(data) {   // Sendet Daten mit $.post()
    $('#register').html(data);        // Gibt an, wo das Ergebnis angezeigt wird
  });
});
