function setup() {
  createCanvas(720, 400);
  background(76, 200, 255);
}

function draw() {
  background(179, 217, 255);
  noStroke();

fill('brown');
rect(57, 28, 63, 663);
fill('brown');
rect(271, 28, 63, 663);

fill(0, 179, 0);
rect(574, 231, 13, 363);

fill(51, 102, 0);
rect(6, 336, 740, 100);


fill('yellow');
ellipse(636, 47, 72, 72);


fill('white');
ellipse(436, 96, 52, 52);
fill('white');
ellipse(410, 105, 72, 52);
fill('white');
ellipse(448, 105, 72, 52);

fill('white');
ellipse(606, 96, 52, 52);
fill('white');
ellipse(610, 105, 72, 52);
fill('white');
ellipse(588, 105, 72, 52);

fill(204, 204, 0);
ellipse(580, 200, 30, 30);

translate(580, 200);
  noStroke();
  for (let i = 0; i < 10; i ++)
  { fill('pink');
   ellipse(5, 26, 20, 40);
    rotate(PI/5);}


fill(0);
textSize(40);
text(mouseX + "," + mouseY, 20, 20) ;
}
