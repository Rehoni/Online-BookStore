$(function() {
  $('ul').before('<p class="notice">firsch aktualisiert</p>');
  $('li.hot').prepend('+ ');
  var $newListItem = $('<li><em>Glutenfreie</em> Sojasauce</li>');
  $('li:last').after($newListItem);
});