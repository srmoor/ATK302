var cars = [];
var frogpos;
var myState = 0;
var maxCars = 10;
var maxTimer = 15 * 60;
var timer = maxTimer;

function setup() {
  // put setup code here
  createCanvas(700, 600);

  //spawn cars
  for (var i = 0; i < maxCars; i++) {
    cars.push(new Car());
  }

  frogpos = createVector(300, height - 100);

  textAlign(CENTER);
}

function draw() {

  switch (myState) {

    case 0:
      background('yellow');
      fill('black');
      textSize(30);
      text("Welcome you dont have much time!", width / 2, height / 2);
      break;

    case 1:
      background('red');
      fill('white');
      textSize(30);
      text("COLLECT AS MUCH AS YOU CAN!", width / 2, height / 2);
      break;

    case 2: //game state
      game();

      timer = timer - 1;
      if (timer <= 0) {
        timer = maxTimer;
        myState = 4;
      }
      break;

    case 3: //win
      background('pink');
      fill('white');
      text("You Made It, Good Job!", width / 2, height / 2);
      break;

    case 4: //lose
      background('black');
      fill('white');
      text("Too Slow", width / 2, height / 2);
      break;

  }


}

function mouseReleased() {
  switch (myState) {
    case 0:
      myState = 1;
      break;

    case 1:
      myState = 2;
      break;

      //won
    case 3:
      //reset timer
      timer = maxTimer;

      //respawns cars
      cars = [];
      for (var i = 0; i < maxCars; i++) {
        cars.push(new Car());
      }
      myState = 0;
      break;

      //lose
    case 4:
      //reset timer
      timer = maxTimer;

      //respawns cars
      cars = [];
      for (var i = 0; i < maxCars; i++) {
        cars.push(new Car());
      }
      myState = 0;
      break;
  }
}


function game() {

  background('lightblue');

  for (var i = 0; i < cars.length; i++) {
    cars[i].display();
    cars[i].drive();
    if (cars[i].pos.dist(frogpos) < 50) {
      cars.splice(i, 1);
    }
  }
  if (cars.length == 2) {
    myState = 3;
  }
  // frog
  fill('green');
  ellipse(frogpos.x, frogpos.y, 50, 50);
  checkForKeys();

}

function checkForKeys() {
  if (keyIsDown(LEFT_ARROW)) frogpos.x -= 5;
  if (keyIsDown(RIGHT_ARROW)) frogpos.x += 5;
  if (keyIsDown(UP_ARROW)) frogpos.y -= 5;
  if (keyIsDown(DOWN_ARROW)) frogpos.y += 5;
}

// our Car class
function Car() {
  //attribute
  this.pos = createVector(random(width), random(height));
  this.vel = createVector(random(-5, 5), random(-5, 5));
  this.r = random(255);
  this.g = random(255);
  this.b = random(255);

  //methods
  this.display = function() {
    fill(this.r, this.g, this.b);
    rect(this.pos.x, this.pos.y, 20, 20, 20);
  }

  this.drive = function() {
    this.pos.add(this.vel);
    if (this.pos.x > width) this.pos.x = 0;
    if (this.pos.x < 0) this.pos.x = width;
    if (this.pos.y > height) this.pos.y = 0;
    if (this.pos.x < 0) this.pos.y = height;
  }


}
