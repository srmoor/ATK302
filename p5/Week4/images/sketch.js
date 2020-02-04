var birds1;
var birds2;
var birds3;

function setup() {
  // put setup code here
  createCanvas(800, 800);
  

birds1 = loadImage("assets/birds1.jpg");
birds2 = loadImage("assets/birds2.jpg");
birds3 = loadImage("assets/birds3.jpg");

}

function draw() {
  // put drawing code here
  image(birds1, width/2, 0, 210, 200);
  image(birds2, width/2, 200, 210, 200);
  image(birds3, width/2, 400, 210, 200);
}
