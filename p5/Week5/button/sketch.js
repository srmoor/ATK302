
function setup() {
  // put setup code here
  createCanvas(800, 800);
    background('black');
}

function draw() {
  // put drawing code here

rect(100,100,100,100);
}

function mouseReleased(){
if ( (mouseX > 100) && (mouseX < 200) && (mouseY > 100) && (mouseY < 200) )
  background(random(255), random(255), random(255));
}
