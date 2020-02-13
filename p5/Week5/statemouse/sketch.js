var myState = 0;

function setup() {
  // put setup code here
  createCanvas(800, 800);
}

function draw() {
  // put drawing code here
  switch (myState) {
    case 0 :
    background('black');
    text("This message lasts two mintues", 600, 600);
    break ;

    case 1 :
    background('red');
    text("This is for Rachel", 600, 600);
    break ;

    case 2 :
    background('blue');
    text("hello", 600, 600);
    break ;

    case 3 :
    background('yellow');
    text("hi", 300, 500);
    break ;

    case 4 :
    background('purple');
    text("hey", 500, 500);
    break ;

    case 5 :
    background('pink');
    text("bye", 500, 500);
    break ;
  }
}
function mouseReleased() {
  myState = myState + 1;
  if (myState > 5){
    myState = 0;
  }
}
