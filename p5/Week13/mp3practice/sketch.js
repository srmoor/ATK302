var shopper1;

var item = [];

function setup() {
  createCanvas(600, 600);

shopper1 = new Shopper(width/2, height/2, 64);
for (var i = 0; i < 10; i++){
  item[i] = new Shopper(random(width), random(height), 16);
}

}

function draw() {
background('lightblue')

shopper1.show();
for (var i = 0; i < item.length; i++){
  item[i].show();
}

}

function Shopper(x, y, r) {
  this.pos = createVector(x, y);
  this.r = r;

  this.show = function() {
fill('white');
    ellipse(this.pos.x, this.pos.y, this.r*2, this.r*2);
  }
}
