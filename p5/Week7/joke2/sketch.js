var state = 0;
var myTimer = 0;

function setup() {
  // put setup code here
  createCanvas(800, 800);
}

function draw() {
  // put drawing code here
  background('black');

  switch(state) {
    case 0:
      text("I invented a new word", 100, 100);
      timer++;
      if (timer >= 200) {
        state = 1;
        timer = 0;
      }
      break;

    case 1:
      text("Plagarism", 100, 100);
      timer++;
      if (timer > 200){
        state = 0;
        timer = 0;
      }
      break;
  }
}
