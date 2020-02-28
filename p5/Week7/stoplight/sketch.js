var myState = 0;
var timer = 200;
var x = 0;

function setup() {
  // put setup code here
  createCanvas(500, 500);
  rectMode(CENTER);
  ellipseMode(CENTER);
  background(230, 242, 255);
}

function draw() {
  // put drawing code here
  fill('black');
  rect(width/2, height/2, 50, 200);
  fill('red');
  ellipse(50, 20, 50, 50);

  switch (myState) {
    case 0:
      fill('black');
      rect(50, 50, 50, 200);
      fill('red');
      ellipse(50, 20, 50, 50);
      timer = timer + 1;
      if (timer > 200) {
        myState = 1;
        timer = 0;
      }
      break;

    case 1:
      fill('black');
      rect(50, 50, 50, 200);
      ellipse(50, 20, 50, 50);
      fill('green');
      ellipse(50, 120, 50, 50);
      timer = timer + 1;
      if (timer > 200) {
        myState = 2;
        timer = 0;
      }
      break;

    case 2:
      fill('black');
      rect(50, 50, 50, 200);
      fill('yellow');
      ellipse(50, 70, 50, 50);
      timer = timer + 1;
      if (timer > 200) {
        myState = 0;
        timer = 0;
      }
      break;

  }


  }
