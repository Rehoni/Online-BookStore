$(function() {

  // hole Hintergrundfarbe von erstem <li> Element.
  var backgroundColor = $('li').css('background-color');

  // Schreibe, was die Hintergrundfarbe war unterhalb der Liste.
  $('ul').append('<p>Farbe war: ' + backgroundColor + '</p>');

  // Setze verschiedene Eigenschaften für alle <li> Elemente
  $('li').css({
    'background-color': '#c5a996',
    'border': '1px solid #fff',
    'color': '#000',
    'text-shadow': 'none',
    'font-family': 'Georgia',
    'padding-left': '+=75'
  });
 });