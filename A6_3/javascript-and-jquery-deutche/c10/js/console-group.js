var $form = $('#calculator');

$form.on('submit', function(e) {              // Läuft beim Klick auf Abschicken
  e.preventDefault();
  console.log('Klicks auf Submit ...');      // Zeigt Klick auf Schaltfläche an

  var width, height, area;
  width = $('#width').val();
  height = $('#height').val();
  area = width * height;

  console.group('Flächenberechnungen');      // Beginnt Gruppe
    console.info('Breite ', width);          // Schreibt Breite
    console.info('Höhe ', height);           // Schreibt Höhe
    console.log(area);                       // Schreibt Fläche
  console.groupEnd();                        // Ende der Gruppe

  $form.append('<p>' + area + '</p>');
});
