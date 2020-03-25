var x = 0;

function setup() {
  // put setup code here
  createCanvas(600, 600);
  rectMode(CENTER);
  ellipseMode(CENTER);
}

function draw() {
  background('black');
  rect(x, 30, 50, 30);
  ellipse(x - 15, 50, 20, 20);
  ellipse(x + 15, 50, 20, 20);

  x = x + 3;
  if (x > width) {
    x = 0;

  }
}
