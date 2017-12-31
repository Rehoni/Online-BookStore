console.info('Und los geht\'s ...');                    // Info: Skript läuft

var $form, width, height, area;
$form = $('#calculator');

$('form input[type="text"]').on('blur', function() {    // Bei blur-Ereignis
  console.warn('Eingabe ', this.value);                 // Warnung: Eingegebener Wert
});

$('#calculator').on('submit', function(e) {              // Bei Abschicken des Formulars
  e.preventDefault();

  width = $('#width').val();
  height = $('#height').val();

  area = width * height;
  console.error(area);                                 // Fehler: Zeigt area an

  $form.append('<p class="result">' + area + '</p>');
});