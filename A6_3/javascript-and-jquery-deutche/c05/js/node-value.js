var itemTwo = document.getElementById('two');   // Ruft 2. Listeneintrag ab

var elText = itemTwo.firstChild.nodeValue;          // Ruft Textinhalt ab

elText = elText.replace('Pinienkerne', 'Grünkohl'); // Pinienkerne > Grünkohl

itemTwo.firstChild.nodeValue = elText;         // Aktualisiert Listeneintrag
