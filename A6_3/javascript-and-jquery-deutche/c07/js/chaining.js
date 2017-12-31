$('li[id!="one"]').hide().delay(500).fadeIn(1400); 
// Strichpunkt (semi-colon) zeigt Ende der Verkettung - 
// könnte auch auf eigener Zeile stehen
$('li:first-child').addClass('next');
$('li.priority').addClass('highlight');