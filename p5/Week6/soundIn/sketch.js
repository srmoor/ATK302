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
  fill(191, 128, 64);
  ellipse(247, 343, 120, 95);
  fill(191, 128, 64);
  ellipse(155, 338, 72, 72);
  fill(191, 128, 64);
  triangle(127, 316, 116, 283, 143, 302);
  fill(191, 128, 64);
  triangle(162, 303, 186, 280, 181, 310);
  fill('pink');
  triangle(146, 345, 152, 353, 159, 345);
  fill('yellow');
  ellipse(138, 327, 20, 20);
  fill('yellow');
  ellipse(164, 327, 20, 20);
  fill('black');
  ellipse(138, 327, 5, 10);
  fill('black');
  ellipse(164, 327, 5, 10);

ellipse(y,200, 100, 100) ;
  vol = mic.getLevel(); // level is between 0 and 1
  vol = vol * 100; // you may need to change this

  if (vol > 3) {
    // do something
    y++ ;

  }

  textSize(18);
  text("Click Me.  My volume is " + vol, 80, 400);

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
