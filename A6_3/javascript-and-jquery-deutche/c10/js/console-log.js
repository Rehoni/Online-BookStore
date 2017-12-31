console.log('Und los geht\'s ...');                    // Zeigt, dass das Skript läuft
var $form, width, height, area;
$form = $('#calculator');

$('form input[type="text"]').on('blur', function() {   // Eingabe verliert Fokus
  console.log('Eingabe ', this.value );                // Schreibt Wert in Konsole
});

$('#calculator').on('submit', function(e) {            // Benutzer klickt auf Abschicken
  e.preventDefault();                                 // Verhindert Abschicken des Formulars
  console.log('Klicks auf Submit ...');               // Zeigt Klick auf Schaltfläche an

  width = $('#width').val();
  console.log('Breite ' + width);                     // Schreibt width in Konsole

  height = $('#height').val();
  console.log('Höhe ', height);                       // Schreibt height in Konsole

  area = width * height;
  console.log(area);                                 // Schreibt area in Konsole

  $form.append('<p>' + area + '</p>')
});