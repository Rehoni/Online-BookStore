var contacts = {                 // Speichert Kontaktinformationen als Object Literal
  "London": {
    "Tel": "+44 (0)207 946 0128",
    "Country": "UK"},
  "Sydney": {
    "Tel": "+61 (0)2 7010 1212",
    "Country": "Australia"},
  "New York": {
    "Tel": "+1 (0)1 555 2104",
    "Country": "USA"}
};

console.table(contacts);                   // Schreibt daten in die Konsole

var city, contactDetails;                  // Deklariert Variablen für die Seite
contactDetails = '';                       // Enthält auf die Seite geschriebene Angaben

$.each(contacts, function(city, contacts) {            // Durchläuft die Daten
  contactDetails += city + ': ' + contacts.Tel + '<br />';
});
$('h2').after('<p>' + contactDetails + '</p>');   // Fügt Daten zur Seite hinzu