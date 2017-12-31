// Create a variable called msg to hold a new message
var msg = 'Melden Sie sich für unseren Newsletter an, um 10% Rabatt zu erhalten!';

// Create a function to update the content of the element whose id attribute has a value of message
function updateMessage() {
  var el = document.getElementById('message');
  el.textContent = msg;
}

// Call the function
updateMessage();