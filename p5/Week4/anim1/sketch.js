var x = 0 ;

function setup() {
  // put setup code here
  createCanvas(500, 500);
}

function draw() {
  // put drawing code here
  background('purple');

push();
translate(x,0);
translate(0,y);
  ellipse(100,100,90,90);
pop();

  x = x + 5 ;
  if (x > width) {
    x = -100;
  }

 y = y + 5 ;
  if (y > height) {
    y = -100;
  }

}
