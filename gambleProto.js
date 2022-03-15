$(function() {


  $("#click-me1").click(function() {
    $(".result").text("You clicked me!")
  })

  $("#click-me2").click(function() {
    $(".result").text("You clicked me!")
  })

  $.ajax({
    'url' : 'https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1',
    'deck_count' : 'post',
    'dataType': 'json'
  })

})
