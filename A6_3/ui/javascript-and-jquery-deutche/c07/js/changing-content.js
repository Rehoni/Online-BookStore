$(function() {
  $('li:contains("Pinien")').text('Mandeln');
  $('li.hot').html(function() {
    return '<em>' + $(this).text() + '</em>';
  });
  $('li#one').remove();
});