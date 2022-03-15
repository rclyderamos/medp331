$(function() {


  $(".click-me1").click(function() {
    $("#result").text("you chose higher")

  })

  $(".click-me2").click(function() {
    $("#result").text("you chose lower")
    })


  let reset = 'deck_count=1 '
  let deckNumber = ''

  $(".reset").click(function () {
    $.getJSON(`https://deckofcardsapi.com/api/deck/new/shuffle/?${reset}`, function(data) {
          console.log('data: ', data)
        })

  })

})
