var rain;

function preload() {
  rain = loadSound('assets/rain.mp3');
}

function setup() {

  createCanvas(720, 200);
  background(0, 0, 255);
  rain.play();  // this is what starts the sound

}

function draw() {

}
