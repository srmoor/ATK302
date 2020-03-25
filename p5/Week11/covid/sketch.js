var x = 0;

function setup() {

  createCanvas(500, 500);
  ellipseMode(CENTER);

}

function draw() {
  background('lightblue');


  push();
  translate(x, 0);
  makePaper();
  x = x + 3 ;
  if (x > width)
  x = 0 ;
  pop();

}

function makePaper() {
  noStroke();
  fill('green');
  ellipse(25, 80, 70, 70);
  ellipse(5, 105, 50, 50);
  ellipse(60, 90, 30, 30);
}
