var myState = 0;
var timer = 0;
var Lobster;

function setup() {
  // put setup code here
  createCanvas(800, 800);
  Lobster = loadFont("assets/Lobster.ttf");
}

function draw() {
  // put drawing code here
  switch (myState) {
    case 0:
      background('pink');
      textFont(Lobster, 78);
      text("Start Game", 99, 344);
      break;

    case 1:
      background(179, 255, 179);
      textFont(Lobster, 98);
      text("Find and Click", 98, 244);
      timer = timer + 1;
      if (timer > 200) {
        myState = 5;
        timer = 0;
      }
      rect(620, 450, 120, 120);
      break;

    case 2:
      background(153, 230, 255);
      textFont(Lobster, 98);
      text("hurry", 99, 244);
      timer = timer + 1;
      if (timer > 200) {
        myState = 5;
        timer = 0;
      }
      rect(200, 50, 60, 60);
      break;

    case 3:
      background(255, 255, 128);
      textFont(Lobster, 128);
      text("click, click, click", 99, 244);
      timer = timer + 1;
      if (timer > 200) {
        myState = 5;
        timer = 0;
      }
      rect(129, 535, 20, 20);
      break;

    case 4:
      background('purple');
      textFont(Lobster, 128);
      text("hey", 98, 244);
      timer = timer + 1;
      if (timer > 200) {
        myState = 5;
        timer = 0;
      }
      rect(743, 650, 15, 15);
      break;

    case 5:
      background(179, 179, 255);
      textFont(Lobster, 98);
      text("You Lose, Sorry", 98, 244);
      break;

      case 6:
        background(255, 179, 179);
        textFont(Lobster, 98);
        text("You Win", 98, 244);
        break;
  }
}

function mouseReleased() {
  myState = myState + 1;
  if (myState > 5) {
    myState = 0;
  }
}

function mousePressed() {
  console.log(mouseX + "," + mouseY);
}
