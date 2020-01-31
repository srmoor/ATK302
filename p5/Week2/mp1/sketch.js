let earth;

function preload() {
  earth = loadImage('img/earth1.jpg');
}

function setup() {
  // put setup code here
  createCanvas(800, 800, WEBGL);

}

function draw() {
  // put drawing code here

  if (mouseIsPressed) {
      background(51, 51, 77);

  fill(191, 128, 64);
    ellipse(252, 144, 202, 202);
  fill('pink');
    triangle(228, 163, 245, 180, 261, 163);
  fill(191, 128, 64);
    triangle(174, 78, 163, 8, 208, 50);
  fill(191, 128, 64);
    triangle(275, 43, 320, 8, 320, 71);
  fill(102);
 rect(142, 82, 93, 15);
    fill(102);
 rect(269, 82, 93, 15);

    fill('yellow');
    ellipse(199, 122, 50, 50);
    fill('yellow');
    ellipse(290, 122, 50, 50);
    fill('black');
    ellipse(199, 122, 40, 40);
    fill('black');
    ellipse(290, 122, 40, 40);

    texture(earth);
  sphere(240);

    fill(102,102,51);
    ellipse(380, 520, 520, 520);


  }
  else {
background(128, 223, 255);

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
    ellipse(138, 327, 10, 10);
    fill('black');
    ellipse(164, 327, 10, 10);
  }
}

function mousePressed() {
  console.log(mouseX + "," + mouseY);
}
