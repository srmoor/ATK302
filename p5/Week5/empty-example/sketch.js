var x = 0;

function setup() {
  // put setup code here
  createCanvas(500, 500);
}

function draw() {
  // put drawing code here
  background('black');
  text("hi there", x, 50);

  x = x + 4;
if (x > width){
  x = -20;
}
