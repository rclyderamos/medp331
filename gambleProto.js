$(function() {

  var messages = {
      lower: 'you chose lower',
      higher: 'you chose higher',
      win: 'you won',
      correct: 'correct!',
      incorrect: 'oops, incorrect. click reset to start again',
  };

  var cards = [{'2': 1}, {'3': 2}, {'4': 3}, {'5': 4},
  {'6': 5}, {'7': 6}, {'8': 7}, {'9': 8}, {'10': 9},
  {'JACK': 10}, {'QUEEN': 11}, {'KING': 12}, {'ACE': 13}];

  $(".click-me1").click(
    function() {$("#result").text("you chose higher");}
    
  );

  $(".click-me2").click(function() {
    $("#result").text("you chose lower")
  });

  $(".reset").click(function(){
    location.reload();
  });

  const getcard = document.querySelector(".getcard");
fetch("https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1")
    .then((response) => {
        return response.json();
    })
    .then((cardjson) => {
        console.log(cardjson);
        deckid=cardjson.deck_id;
    })

getcard.onclick=draw;

function draw(){
    const pic=document.getElementById("pic");
    fetch(`https://deckofcardsapi.com/api/deck/${deckid}/draw/?count=1`)
        .then((response) => {
            return response.json();
        })
        .then((drawjson) => {
            console.log(drawjson);
            let cards=drawjson.cards[0];
            pic.src=cards.image;
        })
}
/*
var valueORG =
var valueNXT

function compare(){
  var valueORG
  var valueNXT


}
*/
})
