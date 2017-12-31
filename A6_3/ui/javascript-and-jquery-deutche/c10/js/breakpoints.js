var $form, width, height, area;
$form = $('#calculator');

$('#calculator').on('submit', function(e) {
  e.preventDefault();
  console.log('Klicks auf Submit ...');

  width = $('#width').val();
  height = $('#height').val();
  area = (width * height);

  if (area < 100) {
    debugger;             // Erstellt bei geöffneten Entwicklerwerkzeugen einen Haltepunkt
  }

  $form.append('<p>' + area + '</p>');
});