let earth;
let font;

function preload() {
  earth = loadImage('img/earth1.jpg');
  font = loadFont('RobotoMono-Bold.ttf');
}

function setup() {
  // put setup code here
  createCanvas(900, 800, WEBGL);
  textFont(font);

  textAlign(LEFT, CENTER)
}

function draw() {
  // put drawing code here

  if (mouseIsPressed) {
      background(51, 51, 77);

  textAlign(RIGHT);
  textSize(40);
  text('By night, he escapes his regular household life ', 184, 158);
  text('and plots to rule the world', 99, 190);

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
  sphere(200, 607);

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

    textAlign(RIGHT);
    textSize(40);
    text('This is a Leo the cat', 184, 158);
    text('a simple pet by day', 99, 190);
  }
}

function mousePressed() {
  console.log(mouseX + "," + mouseY);
}
