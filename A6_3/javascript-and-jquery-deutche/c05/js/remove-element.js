var removeEl = document.getElementsByTagName('li')[3];
// Zu entfernendes Element

var containerEl = removeEl.parentNode;          // Einschließendes Element

containerEl.removeChild(removeEl);              // Entfernen des Elements
