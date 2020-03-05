var myState = 0;
var timer = 0;
var Lobster;
var song;
var fx;
var ulose;
var uwin;

function preload() {
  song = loadSound('assets/choa.mp3');
  fx = loadSound('assets/yay.mp3');
  uwin = loadSound('assets/win.mp3');
  ulose = loadSound('assets/lose.mp3');
  song.loop();
}

function setup() {

  // put setup code here
  createCanvas(800, 600);
  Lobster = loadFont("assets/Lobster.ttf");
  song.play();
}

function draw() {
  // put drawing code here
  switch (myState) {
    case 0:
      background('pink');
      textFont(Lobster, 88);
      text("Start Game", 99, 344);

      uwin.stop();
      ulose.stop();
      break;

    case 1:
      background(179, 255, 179);
      textFont(Lobster, 68);
      text("Find and Click", 98, 244);
      timer = timer + 1;
      if (timer > 200) {
        myState = 6;
        timer = 0;
      }
      rect(10,610, 50, 50);
      break;

    case 2:
      background(153, 230, 255);
      textFont(Lobster, 68);
      text("hurry", 99, 244);
      timer = timer + 1;
      if (timer > 200) {
        myState = 6;
        timer = 0;
      }
      rect(20, 220, 25, 25);
      break;

    case 3:
      background(255, 255, 128);
      textFont(Lobster, 68);
      text("click, click, click", 99, 244);
      timer = timer + 1;
      if (timer > 300) {
        myState = 6;
        timer = 0;
      }
      rect(300, 300, 30, 30);
      break;

    case 4:
      background(255, 179, 128);
      textFont(Lobster, 68);
      text("Last Chance", 98, 244);
      timer = timer + 1;
      if (timer > 300) {
        myState = 6;
        timer = 0;
      }
      rect(40, 40, 40, 40);

      break;

    case 5:
      background(255, 179, 179);
      textFont(Lobster, 98);
      text("You Win", 98, 244);
      timer = timer + 1;
      if (timer > 400) {
        myState = 0;
        timer = 0;
      }
      song.stop();
      uwin.play();
      break;

    case 6:

      background(179, 179, 255);
      textFont(Lobster, 98);
      text("You Lose, Sorry", 98, 244);
      timer = timer + 1;
      if (timer > 400) {
        myState = 0;
        timer = 0;
      }
      song.stop();
      ulose.play();
    
      break;
  }
}

function mouseReleased() {
  fx.play();
  myState = myState + 1;
  if (myState > 6) {
    myState = 0;
  }
}

function touchStarted() {
  getAudioContent().resume();
}

function mousePressed() {
  console.log(mouseX + "," + mouseY);
}
