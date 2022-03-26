$(function() {


  $(".click-me1").click(function() {
    $("#result").text("you chose higher")
  })

  $(".click-me2").click(function() {
    $("#result").text("you chose lower")
    })

  $(".reset").click(function(){
    location.reload();
  })


  $(".start").click()




  const getcard = document.querySelector(".getcard");
fetch("https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1")
    .then((response) => {
        return response.json();
    })
    .then((cardjson) => {
        console.log(cardjson);
        deckid=cardjson.deck_id;
    })
    .catch((err) => {
        // handle errors
    });

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
        .catch((err) => {
            // handle errors
        });
}

})
