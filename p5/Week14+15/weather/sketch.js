var weather;
var temp = 0;
var weatherID = 0; // returned in the JSON weather element
var myState = 0;
var x = 0;
var ws = 0;
var temper = 0;

function setup() {
  createCanvas(400, 400);

  // HERE Is the call to get the weather. PLEASE PUT YOUR OWN ID IN HERE!!!
  // MINE WILL STOP WORKING IF EVERYONE USES IT!!!

  var myJSONString = 'https://api.openweathermap.org/data/2.5/weather?zip=61761,us&units=imperial&';
  var myIDString = 'appid=405a98f3ac41669a7a503f0062876f63'; // Take out the x’s and ADD YOUR ID!!!
  loadJSON(myJSONString + myIDString, gotData); // look - that gotData function happens when JSON comes back.

}


function gotData(data) {
  weather = data;
  console.log(data); // for debugging purposes, print out the JSON data when we get it.
  ws = weather.wind.speed;
  temper = weather.main.temp;
}


function draw() {
  switch (myState) {
    case 0:
      if (weather) {
          myState = 1;
      }
      break;

    case 1:
    background(200) ;
    fill('black');
    text("We have weather!", 20, 20) ;
// parse the weather object and put some text or images using at least 3 different weather data!
fill('black');
text("The temperature is " + weather.main.temp, 20, 40) ;
text("The humidty is " + weather.main.humidity, 20, 60) ;
text("The wind speed is " + weather.wind.speed, 20, 80) ;

fill('white') ;
noStroke();
ellipse(x,300,90,50);
x = x + ws/2 ;
if (x > width) x = 0 ;

fill('red');
var tmp = 0;
tmp = map(temper, -10, 90, 2, height-10);
rect(width-40, height-10, 30, -tmp );

      break;

  }
}
