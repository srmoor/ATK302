var song1;
var song2;
var song3;
var myState = 0;

function preload() {
  song1 = loadSound('assets/donkey.mp3');
  song2 = loadSound('assets/skate.mp3');
  song3 = loadSound('assets/thrill.mp3');
}

function setup() {

  createCanvas(720, 200);
  background(0, 0, 255);
  song1.start();
  song1.loop();
  song2.start();
  song2.loop();
  song3.start();
  song3.loop();
}

function draw() {

  switch (myState) {
    case 0:
      song1.play();
      state = 1;
      break;
    case 1:
      break;

    case 2:
      song2.play();
      state = 3;
      break;
    case 3:
      break;

    case 4:
      song3.play();
      state = 5;
      break;
    case 5:
      break;
  }
}

function mouseReleased() {
  song1.pause();
  song2.pause();
  song3.pause();

  state++ ;
  if (myState > 5){
    myState = 0;
  }
}
function touchStarted(){
  getAudioContent().resume();
}
