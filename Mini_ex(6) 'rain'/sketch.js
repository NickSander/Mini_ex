
var wind; // A wind direction vector
var position; // Circle position
var eSize; // Size for ellipses

function setup() {

  createCanvas(windowWidth, windowHeight-100);
  background(42, 42, 53);

  // Request the data from apixu.com
  var url = 'http://api.apixu.com/v1/current.json?key=9fa3cf27383a49d0a16113336171703&q=Aarhus';
  loadJSON(url, gotWeather);
  position = createVector(width/2, height/2); // Circle starts in the middle
  wind = createVector();   // wind starts as (0,0)

}

function draw() {
  // background(42, 42, 53);
  // This section draws an arrow pointing in the direction of wind
  push();
  translate(32, height - 32);
  rotate(wind.heading() + PI/2); // Rotate by the wind's angle
  strokeWeight(5);
  fill(150);
  ellipse(0, 0, 48, 48);

  stroke(255, 0, 0);
  strokeWeight(3);
  line(0, -16, 0, 16);

  noStroke();
  fill(255, 0, 0);
  triangle(0, -18, -6, -10, 6, -10);
  pop();

  // Move in the wind's direction
  position.add(wind);

  //Section that draws the ellipses
  eSize = random(26,56); //var for random ellipse sizes

  stroke(0);
  noStroke();

  //The constinues lines to indicate wind direction better
  fill(random(50,55),random(59,180),random(213,239),200);
  ellipse(position.x, position.y, eSize, eSize);
  ellipse(position.x - 300, position.y, eSize, eSize);
  ellipse(position.x + 300, position.y, eSize, eSize);

  //Pseudorandom raindrops following the winddir and windspeed
  fill(random(50,55),random(59,180),random(213,239),200);
  ellipse(position.x + random(0, width), position.y+random(-height/10,height/10), eSize, eSize);
  ellipse(position.x + random(0, -width), position.y+random(-height/10,height/10), eSize, eSize);

  //When the ellipses hit the canvas borders, they 'reset'
  if (position.x > width)  position.x = 0;
  if (position.x < 0)      position.x = width;
  if (position.y > height) position.y = 0;
  if (position.y < 0)      position.y = height;

}

function gotWeather(weather) {

  // Get the angle from the api (then converts the cardinal degree to the 'correct' angle so that the ellipses blow with the direction)
  var angle = radians(Number(weather.current.wind_degree+90));
  // Get the wind speed in kilometers per hour
  var windspeed = Number(weather.current.wind_kph);
  // Display as HTML elements
  var location = createDiv("Location: " + weather.location.name);
  var temperatureDiv = createDiv("Temperature: " + floor(weather.current.temp_c) + '&deg; <small>C</small>');
  var winddir = createDiv("Wind direction: " + (weather.current.wind_dir));
  var windDiv = createDiv("Wind: " + (windspeed/3600*1000).toFixed(2) + " <small>m/s</small>"); //converts kph to m/s and fixes the decimals to only print 2
  var condition = createDiv("Weather: " + weather.current.condition.text);

  // Make a vector for the wind
  wind = p5.Vector.fromAngle(angle);
}
