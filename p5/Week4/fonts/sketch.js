var Lobster;



function setup() {
  // put setup code here
  createCanvas(800,800);

  Lobster = loadFont("assets/Lobster.ttf");
}

function draw() {
  // put drawing code here
textFont(Lobster, 128);
text("Birdy", 100, 200);

}
