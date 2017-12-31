$(function() {
  var listItem, itemStatus, eventType;

  $('ul').on(
    'click mouseover',
    ':not(#four)',
    // {status: 'important'}, // Text im Buch
    {status: 'wichtig'},       // geändert wie Anzeige S.331 
    function(e) {
      listItem = 'Eintrag: ' + e.target.textContent + '<br />';
      itemStatus = 'Status: ' + e.data.status + '<br />';
      eventType = 'Ereignis: ' + e.type;
      $('#notes').html(listItem + itemStatus + eventType);
    }
  );

});