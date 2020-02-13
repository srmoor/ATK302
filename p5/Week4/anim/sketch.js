var x = 0;

function setup() {
  // put setup code here
  createCanvas(800, 800);
}

function draw() {
  // put drawing code here
  background('black');

  push();
  translate(x, 0);
  Leo();
  pop();

  x = x + 4;
if (x > width){
  x = -700;
}

}

function Leo() {
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
}
