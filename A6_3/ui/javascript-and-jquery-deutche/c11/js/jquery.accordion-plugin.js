(function($){                               // Verwendet $ als Variablenname
  $.fn.accordion = function(speed) {         // Gibt die jQuery-Auswahl zurück
    this.on('click', '.accordion-control', function(e){
        e.preventDefault();
        $(this)
            .next('.accordion-panel')
            .not(':animated')
            .slideToggle(speed);
    });
    return this;                            // Gibt die jQuery-Auswahl zurück
  }
})(jQuery);                                 // Übergibt das jQuery-Objekt