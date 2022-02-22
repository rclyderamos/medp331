const myTitle = 'line by line'
let myObject = {'lines': [
  'a poem begins line by line',
  'word by word',
  'nouns as bricks',
  'articles as mortar',
  'a foundation of paper',
  'blueprints of ink and graphite']}
//let myArticleArray = ['The', 'an', 'a']

function returnPoem(title, noun, adjective) {
  return title + ': ' + adjective + ' ' + noun
}

//W(returnPoem(myTitle, myArticleArray[0], myObject.adjectives[0],myObject.nouns[0]))

function forLoopPoem(title, lines) {
  W(title)
  for (i = 0; i < 11; i++) {
    W(lines[i])
  }
}

//forLoopPoem(myTitle, myObject.lines)


// while loop poem:
let counter = 0
while(counter < 4) {
  W(getRandomItem(myObject.lines))
  counter++
}

function getRandomItem(array) {
  //don't worry about the math here, this just selects a random item from the array
  //but it could be useful if you want to do something similar!

return array[Math.floor(Math.random()*array.length)]
}
