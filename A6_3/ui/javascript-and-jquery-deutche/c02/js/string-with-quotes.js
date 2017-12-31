// Create variables to hold the title and note text.
var title; 
var message;

// Assign values to these variables.
title = "Sonderangebote für Molly";
message = '<a href=\"sale.html\">25% Rabatt!</a>';

// Get the element with an id of title.
var elTitle = document.getElementById('title');
// Replace the content of this element.
elTitle.textContent = title;

// Get the element with an id of note.
var elNote = document.getElementById('note');
// Replace the content of this element.
elNote.innerHTML = message;

/* 
NOTE: textContent does not work in IE8 or earlier
You can use innerHTML on line 12, but note the security issues on p228-231
elTitle.innerHTML = title;

innerHTML is used on line 17 because it is adding markup (not just text)
*/