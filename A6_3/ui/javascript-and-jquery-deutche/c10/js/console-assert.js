var $form, width, height, area;
$form = $('#calculator');

$('form input[type="text"]').on('blur', function() {
  // Die Meldung wird nur angezeigt, wenn eine Zahl kleiner 10 eingegeben wird
  console.assert(this.value > 10, 'Eingaben kleiner als 10');
});

$('#calculator').on('submit', function(e) { 
  e.preventDefault();
  console.log('Klick auf Submit ...');

  width = $('#width').val();
  height = $('#height').val();
  area = width * height;
  // Die Meldung wird nur angezeigt, wenn keine Zahl eingegeben wurde
  console.assert($.isNumeric(area), 'Sie haben keine Zahl eingegeben');

  $form.append('<p>' + area + '</p>');
});