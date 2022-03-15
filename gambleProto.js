$.ajax({
  'url': 'https://api.kanye.rest/',
  'type': 'get',
  'dataType': 'json'
}).done(function(data) {

  //jQuery automatically parses the JSON for us
  console.log(‘data:’, data)
  $('#kanye-quote').text(data.quote)
}).fail(function() {
  //sometimes your request will fail, you can deal with that here
  $("#kanye-quote").text('Whoops, try again')

}).always(function() {
  console.log('if you want to do something whether it fails or not, do it here')
})
})
