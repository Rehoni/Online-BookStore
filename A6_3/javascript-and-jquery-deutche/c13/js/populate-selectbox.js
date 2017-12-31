(function() {
  var type  = document.getElementById('equipmentType'); // Geräteauswahlfeld
  var model = document.getElementById('model');         // Modellauswahlfeld
  var cameras = {                                       // Objekt für Kameras
    bolex: 'Bolex Paillard H8',
    yashica: 'Yashica 30',
    pathescape: 'Pathescape Super-8 Relax',
    canon: 'Canon 512'
  };
  var projectors = {                                 // Objekt für Projektoren
    kodak: 'Kodak Instamatic M55',
    bolex: 'Bolex Sound 715',
    eumig: 'Eumig Mark S',
    sankyo: 'Sankyo Dualux'
  };

  // WENN DER BENUTZER DAS GERÄTEAUSWAHLFELD ÄNDERT
  addEvent(type, 'change', function() {
    if (this.value === 'choose') {                      // Keine Auswahl
      model.innerHTML = '<option>Bitte erst den Typ auswählen</option>';
      return;                            // Keine weitere Verarbeitung nötig
    }
    var models = getModels(this.value);      // Wählt das richtige Objekt aus

    // DURCHLÄUFT DIE OPTIONEN IM OBJEKT, UM AUSWAHLMÖGLICHKEITEN ZU ERSTELLEN
    var options = '<option>Bitte ein Modell auswählen</option>';
    var key;
    for (key in models) {                        // Durchläuft Modelle
      options += '<option value="' + key + '">' + models[key] + '</option>';
    } // Bei Anführungszeichen in Optionen muss der Schlüssel maskiert werden
    model.innerHTML = options;                    // Aktualisiert Auswahlfeld
  });

  function getModels(equipmentType) {
    if (equipmentType === 'cameras') {            // Beim Typ Kamera
      return cameras;                      // Gibt Objekt cameras zurück
    } else if (equipmentType === 'projectors') {  // Beim Typ Projektoren
      return projectors;                   // Gibt Objekt projectors zurück
    }
  }
}());