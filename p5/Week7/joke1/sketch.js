var state = 0;

function setup() {
  // put setup code here
  createCanvas(800, 800);
}

function draw() {
  // put drawing code here
  background('blue');

  switch(state) {
    case 0:
      text("what is Marios jeans made of?", 100, 100);
      break;

    case 1:
      text("DenimDenimDenim", 100, 100);
      break;
  }
}

function mouseReleased() {
  state = state + 1;
  if (state > 1) {
  }
}
