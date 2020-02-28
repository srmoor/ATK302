var x = 0 ;

function setup() {
  // put setup code here
  createCanvas(500, 500);
}

function draw() {
  // put drawing code here
  background('purple');

  translate(x, 0);
  fill('blue');
  rect(100, 430, 50, 30);
  fill('black');
  ellipse(110,450,20,20);
  fill('black');
  ellipse(80,450,20,20);

  x = x + 3;
  if (x > width) {
    x = -100;
  }

}
