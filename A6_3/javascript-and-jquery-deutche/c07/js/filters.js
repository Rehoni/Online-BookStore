$(function() {
  var $listItems = $('li');

  $listItems.filter('.hot:last').removeClass('hot');
  $('li:not(.hot)').addClass('cool');
  $listItems.has('em').addClass('complete');

  $listItems.each(function() {
    var $this = $(this);
    if ($this.is('.hot')) {
      $this.prepend('Eintrag mit Vorrang: ');
    }
  });

  $('li:contains("Honig")').append(' (regional)');
});