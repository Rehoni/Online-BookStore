// Create variables and assign them values
var inStock;
var shipping;

inStock = true;
shipping = false;

/* Hier kann irgendeine Form der Verarbeitung
erfolgen, als deren Ergebnis der Wert dieser
Variablen geändert werden muss. */

inStock = false;
shipping = true;

// Get the element with an id of stock
var elStock = document.getElementById('stock');
// Set class name with value of inStock variable
elStock.className = inStock;
// Get the element with an id of shipping
var elShip = document.getElementById('shipping');
// Set class name with value of shipping variable
elShip.className = shipping;