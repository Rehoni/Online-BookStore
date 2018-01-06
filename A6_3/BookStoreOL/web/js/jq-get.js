// NOTE: This example will only work if you run it on a web server (it will not work locally)

// This first variable creates the t-shirt options, the HTML for it is shown on p395
var vote = 
'<div id="vote">' +
  '<div class="third"><a href="votes.php?vote=grau">' +
	  '<img src="img/t-gray.png" id="grau" alt="gray" /></a></div>' +
  '<div class="third"><a href="votes.php?vote=gelb" id="yellow">' +
	  '<img src="img/t-yellow.png" id="gelb" alt="yellow" /></a></div>' +
  '<div class="third"><a href="votes.php?vote=grün">' +
	  '<img src="img/t-green.png" id="gruen" alt="green" /></a></div>' +
'</div>';
$('#selector').append(vote);

$('#selector a').on('click', function(e) {
  e.preventDefault();
  var queryString = 'vote=' + event.target.id;
  $.get('votes.php', queryString, function(data) {
    $('#selector').html(data);
  });
});