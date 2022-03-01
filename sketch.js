let value = 204;
let value2=0;
let value3=0;
let value4= 0;
let value5= 0;
let cnv;

function setup() {
  cnv = createCanvas(602, 402);
  cnv.mouseOver(changeGray1);
  stroke(0);
  textSize(20);
  textFont('Georgia');
}

function changeGray1(){
  if (value === 0) {
    value = 204;
  }
  else {
    value = 0;
  }
}




function draw() {
  background('#EEEEEE');

  fill (value);
  rect(1,1,100,80);
  rect(100,1,100,80);
  rect(200,1,100,80);
  rect(300,1,100,80);
  rect(400,1,100,80);
  rect(500,1,100,80);

  //fill(value2);
  rect(1,81,50,80);
  rect(50,81,100,80);
  rect(150,81,100,80);
  rect(250,81,100,80);
  rect(350,81,100,80);
  rect(450,81,100,80);
  rect(550,81,50,80);

  //fill(value3);
  rect(1,161,100,80);
  rect(100,161,100,80);
  rect(200,161,100,80);
  rect(300,161,100,80);
  rect(400,161,100,80);
  rect(500,161,100,80);

  //fill(value4);
  rect(1,241,50,80);
  rect(50,241,100,80);
  rect(150,241,100,80);
  rect(250,241,100,80);
  rect(350,241,100,80);
  rect(450,241,100,80);
  rect(550,241,50,80);

  //fill(value5);
  rect(1,321,100,80);
  rect(100,321,100,80);
  rect(200,321,100,80);
  rect(300,321,100,80);
  rect(400,321,100,80);
  rect(500,321,100,80);

  fill(0);
  text("a", 45,45);
  text("poem", 125,45);
  text("builds", 225,45);
  text("line", 335,45);
  text("by", 440,45);
  text("line", 535,45);

  text("blueprints", 55,125);
  text("of", 190,125);
  text("ink", 287,125);
  text("and", 385,125);
  text("graphite", 465,125);

  text("nouns", 22,205);
  text("as", 140,205);
  text("bricks", 225,205);
  text("articles", 317,205);
  text("as", 440,205);
  text("mortar", 520,205);

  text("word", 71,285);
  text("by", 190,285);
  text("word", 280,285);
  text("by", 387,285);
  text("word", 475,285);

  text("an", 22,365);
  text("architect", 110,365);
  text("of", 240,365);
  text("your", 330,365);
  text("own", 435,365);
  text("design", 520,365);

  }
