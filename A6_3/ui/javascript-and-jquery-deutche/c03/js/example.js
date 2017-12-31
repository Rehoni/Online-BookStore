/* Das Skript steht innerhalb eines unmittelbar aufgerufenen
Funktionsausdrucks, um den Gültigkeitsbereich der Variablen zu schützen */
(function() {
// TEIL 1: ERSTELLT DAS HOTEL-OBJEKT UND GIBT DAS ANGEBOT AUS
// Erstellt ein hotel-Objekt mit der Literalsyntax
var hotel = {
name: 'Park',
roomRate: 240, // Preis in Dollar
discount: 15, // Rabatt in Prozent
offerPrice: function() {
var offerRate = this.roomRate * ((100 - this.discount) / 100);
return offerRate;
}
}
// Gibt Hotelname, Standardpreis und Angebotspreis aus
var hotelName, roomRate, specialRate; // Deklariert Variablen
hotelName = document.getElementById('hotelName'); // Ruft Elemente ab
roomRate = document.getElementById('roomRate');
specialRate = document.getElementById('specialRate');
hotelName.textContent = hotel.name; // Schreibt Hotelname
roomRate.textContent = '$' + hotel.roomRate.toFixed(2); // Zimmerpreis
specialRate.textContent = '$' + hotel.offerPrice(); // Angebotspreis


// TEIL 2: BERECHNET DAS ABLAUFDATUM DES ANGEBOTS UND ZEIGT ES AN
var expiryMsg; // Angezeigte Meldung
var today; // Heutiges Datum
var elEnds; // Das Element, in dem die Meldung über das Ende des Angebots
// angezeigt wird
function offerExpires(today) {
// Deklariert Variablen in der Funktion, damit sie einen lokalen
// Gültigkeitsbereich haben
var weekFromToday, day, date, month, year, dayNames, monthNames;
// Addiert 7 Tage (angegeben in Millisekunden)
weekFromToday = new Date(today.getTime() + 7 * 24 * 60 * 60 * 1000);
// Erstellt Arrays mit den Tages- und Monatsnamen
dayNames = ['Sonntag', 'Montag', 'Dienstag', 'Mittwoch', 'Donnerstag',
'Freitag', 'Samstag'];
monthNames = ['Januar', 'Februar', 'März', 'April', 'Mai', 'Juni',
'Juli', 'August', 'September', 'Oktober', 'November', 'Dezember'];
// Ruft die anzuzeigenden Teile des Datums ab
day = dayNames[weekFromToday.getDay()];
date = weekFromToday.getDate();
month = monthNames[weekFromToday.getMonth()];
year = weekFromToday.getFullYear();
// Stellt die Meldung zusammen
expiryMsg = 'Das Angebot endet am nächsten ';
expiryMsg += day + ' <br />(' + date + ' ' + month + ' ' + year + ')';
return expiryMsg;
}
today = new Date(); // Stellt das heutige Datum in eine Variable
elEnds = document.getElementById('offerEnds'); // Ruft das Element offerEnds ab
elEnds.innerHTML = offerExpires(today); // Fügt die Ablaufmeldung hinzu
// Schließt den unmittelbar aufgerufenen Funktionsausdruck ab
}());
