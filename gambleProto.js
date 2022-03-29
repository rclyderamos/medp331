$(function() {

  let myObject = {'fortunes': [
    'Your adventure could lead to happiness.',
    'You always bring others happiness.',
    'You are a person of another time.',
    'You are a talented storyteller.',
    'You are admired by everyone for your talent and ability.',
    'You are almost there.',
    'You are busy, but you are happy.',
    'You are generous to an extreme and always think of the other fellow.',
    'You are going to have some new clothes.',
    'You are in good hands this evening.',
    'You are interested in higher education, whether material or spiritual.',
    'You are modest and courteous.',
    'You are never selfish with your advice or your help',
    'You are next in line for promotion in your firm.',
    'You are offered the dream of a lifetime. Say yes',
    'You are open-minded and quick to make new friends.',
    'You are solid and dependable.',
    'You are soon going to change your present line of work.',
    'You are talented in many ways.',
    'You are the master of every situation.',
    'You are very expressive and positive in words, act and feeling.',
    'You are working hard.',
    'You begin to appreciate how important it is to share your personal beliefs.',
    'You can keep a secret.',
    'You can see a lot just by looking.',
    'You can’t steal second base and keep your foot on first.',
    'You desire recognition and you will find it.',
    'You have a deep appreciation of the arts and music.',
    'You have a deep interest in all that is artistic.',
    'You have a friendly heart and are well admired.',
    'You have a shrewd knack for spotting insincerity.',
    'You have a yearning for perfection.',
    'You have an active mind and a keen imagination.',
    'You have an ambitious nature and may make a name for yourself.',
    'You have an unusual equipment for success, use it properly.',
    'You have exceeded what was expected.',
    'You have had a good start. Work harder!',
    'You have the power to write your own fortune.',
    'You have yearning for perfection.',
    'You know where you are going and how to get there.',
    'You look pretty.',
    'You love challenge.',
    'You love chinese food.',
    'You make people realize that there exist other beauties in the world.',
    'You never hesitate to tackle the most difficult problems.',
    'You never know who you touch.',
    'You only treasure what you lost.',
    'You seek to shield those you love and like the role of provider.',
    'You should be able to make money and hold on to it.',
    'You should be able to undertake and complete anything.',
    'You understand how to have fun with others and to enjoy your solitude.',
    'You will always be surrounded by true friends.',
    'You will always get what you want through your charm and personality.',
    'You will always have good luck in your personal affairs.',
    'You will be a great success both in the business world and society.',
    'You will be blessed with longevity.',
    'You will be pleasantly surprised tonight.',
    'You will be sharing great news with all the people you love.',
    'You will be successful in your work.',
    'You will be traveling and coming into a fortune.',
    'You will be unusually successful in business.',
    'You will become a great philanthropist in your later years.',
    'You will become more and more wealthy.',
    'You will enjoy good health.',
    'You will enjoy good health; you will be surrounded by luxury.',
    'You will find great contentment in the daily, routine activities.',
    'You will have a fine capacity for the enjoyment of life.',
    'You will have gold pieces by the bushel.',
    'You will inherit a large sum of money.',
    'You will make change for the better.',
    'You will soon be surrounded by good friends and laughter.',
    'You will take a chance in something in near future.',
    'You will travel far and wide, both pleasure and business.',
    'You will travel far and wide,both pleasure and business.',
    'Your abilities are unparalleled.',
    'Your ability is appreciated.',
    'Your ability to juggle many tasks will take you far.',
    'Your biggest virtue is your modesty.',
    'Your character can be described as natural and unrestrained.',
    'Your difficulties will strengthen you.',
    'Your dreams are never silly; depend on them to guide you.',
    'Your dreams are worth your best efforts to achieve them.',
    'Your energy returns and you get things done.',
    'Your family is young, gifted and attractive.',
    'Your first love has never forgotten you.',
    'Your goal will be reached very soon.',
    'Your happiness is before you, not behind you! Cherish it.',
    'Your hard work will payoff today.',
    'Your heart will always make itself known through your words.',
    'Your home is the center of great love.',
    'Your ideals are well within your reach.',
    'Your infinite capacity for patience will be rewarded sooner or later.',
    'Your leadership qualities will be tested and proven.',
    'Your life will be happy and peaceful.',
    'Your life will get more and more exciting.',
    'Your love life will be happy and harmonious.']}

  $(".clickme1").click(function(){
    let counter = 0
    while(counter < 1) {
      W(getRandomItem(myObject.fortunes))
      counter++
    }
    function getRandomItem(array) {
      return array[Math.floor(Math.random()*array.length)]
    }
  })

  $(".reset").click(function(){
    location.reload();
  });

  const getcard = document.querySelector(".getcard");
  const result = document.querySelector("#result");
  const clickme1 = document.querySelector(".clickme1");
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





})
