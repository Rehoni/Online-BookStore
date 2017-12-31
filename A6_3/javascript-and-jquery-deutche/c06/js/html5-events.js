function setup() {
var textInput;
textInput = document.getElementById('message');
textInput.focus();
}

window.addEventListener('DOMContentLoaded', setup, false);
  
window.addEventListener('beforeunload', function(event) {
  // Dieses Beispiel wurde aktualisiert um Cross-Browser Kompatibilität zu verbessern
  // (wie durch MDN vorgeschlagen)
  var message = 'Sie haben Ihre Änderungen nicht gepeichert...';
  (event || window.event).returnValue = message;
  return message;
});
