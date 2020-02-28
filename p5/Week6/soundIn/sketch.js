var mic;
var vol;
var y = 0 ;
var timer = 300;

function setup() {
  createCanvas(800, 800);

  mic = new p5.AudioIn();
  mic.start();
}

function draw() {
  
ellipse(y,200, 100, 100) ;
  vol = mic.getLevel(); // level is between 0 and 1
  vol = vol * 100; // you may need to change this

  if (vol > 3) {
    // do something
    y++ ;

  }

  textSize(18);
  text("Click Me, and get it across the screen before the color changes.  My volume is " + vol, 80, 400);

  timer = timer - 1;
  if (timer == 0){
    background(random(256), random(256), random(256),);
  timer = 300;
}
}


// you need to click the screen before the mic input will work.
function touchStarted() {
  getAudioContext().resume();
}
