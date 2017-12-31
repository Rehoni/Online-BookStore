// querySelector() gibt nur die erste Übereinstimmung zurück
var el = document.querySelector('li.hot');
el.className = 'cool';

// querySelectorAll gibt eine Knotenliste zurück
// Das 2. gefundene Element (der 3. Listeneintrag) wird ausgewählt und geändert
var els = document.querySelectorAll('li.hot');
els[1].className = 'cool';