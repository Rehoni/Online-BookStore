$(function() {
  var listHeight = $('#page').height();

  $('ul').append('<p>Höhe: ' + listHeight + 'px</p>');
  $('li').width('50%');
  // $('li#one').width(125);  // im Buch
  $('li#one').width(175);      // deutsche Worte sind länger
  $('li#two').width('75%');
});