$(function() {
  // var $p = $('p');     // ausgeblendet zu gunsten nächster Zeile
                          // damit die Notiz ganz unten in der Anzeige bleibt.
						  // nicht im Buch enthalten
  var $p = $('p:first');

  // Erzeuge ein Clone vom ersten <p> Element und füge dieses nach dem <h2> Element ein.
  var $clonedQuote = $p.clone();
  $p.remove();
  $clonedQuote.insertAfter('h2');

  // Entferne erstes <li> Element und füge dieses ans Ende der Liste.
  var $moveItem = $('#one').detach();
  $moveItem.appendTo('ul');

});