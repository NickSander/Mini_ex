
var wind; // A wind direction vector
var tempcolor ;
var position; // Circle position
var bubbles = [];

function setup() {

  createCanvas(windowWidth, windowHeight-100);
  // Request the data for Aarhus from apixu.com
  var url = 'http://api.apixu.com/v1/current.json?key=9fa3cf27383a49d0a16113336171703&q=Aarhus';
  loadJSON(url, gotWeather);
  wind = createVector();   // wind starts as (0,0)

  for (var i = 0; i < 20; i++)
    bubbles[i] = new Bubble()

}

function draw() {
  background(42, 42, 53);

  // This section draws an arrow pointing in the direction of wind
  push();
  translate(32, height - 32);
  rotate(wind.heading() + PI/2);  // Rotate by the wind's angle

  strokeWeight(1);
  stroke(1);
  fill(150);
  ellipse(0, 0, 48, 48);

  stroke(255, 0, 0);
  strokeWeight(3);
  line(0, -16, 0, 16);

  noStroke();
  fill(255, 0, 0);
  triangle(0, -18, -6, -10, 6, -10);
  pop();


    for (var i = 0; i < 20; i++) {
    bubbles[i].run();
  }
}

function Bubble() {
this.position = createVector(random(0,width), random(0,height));

this.run = function() {
  this.position.add(wind); // Move in the wind's direction

  stroke(0);
  noStroke();
    fill(55,180,213,);
    ellipse(this.position.x, this.position.y, random(41, 44), random(41, 44));

    //When the ellipses hits the canvas borders they 'reset'
    if (this.position.x > width)  this.position.x = 0;
    if (this.position.x < 0)      this.position.x = width;
    if (this.position.y > height) this.position.y = 0;
    if (this.position.y < 0)      this.position.y = height;
}
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
