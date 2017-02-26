function planet(speed, distance, size, color) { // the template planet.
  var rot = 360/speed*(frameCount%speed);       // NB: the speed parameter is inverted!
  rotate(radians(rot));                         // (higher value -> slower speed)
  fill(color);
  ellipse(0, distance, size, size);
}

function setup() {
  createCanvas(windowWidth, windowHeight);
    background(0);
  frameRate(60); // framerate is pre-set for uniform speed across different devices
    
           stroke(255);
 for (var i = 0; i < 2000; i++) {
  var r = random(0, 2000);
  point(i, r);
 }
}

function draw() {
    
    
    noStroke(0);
    fill(0, 95);
  ellipse(width/2,height/2, 610.610);
    
    push();
    translate(width/2,height/2)
    noStroke(0);
    fill(255);
    ellipse(100, 100,2,2);
    ellipse(-80, 120,2,2);
    ellipse(-200, 150,2,2);
    ellipse(220, 250,2,2);
    ellipse(-50, -100,2,2);
    ellipse(200, -50,2,2);
    ellipse(-100,-50,2,2);
    ellipse(-270, -20,2,2);
    ellipse(-30, 290,2,2);
    ellipse(0, 100,2,2);
    ellipse(20, 200,2,2);
    ellipse(200, -200,2,2);
    ellipse(150, -100,2,2);
    ellipse(50, -270,2,2);
    ellipse(-150, -150,2,2);
    ellipse(-50, -270,2,2);
    ellipse(-100, 240,2,2);
    ellipse(-150, 150,2,2);
    ellipse(50, 150,2,2);
    ellipse(20, -150,2,2);

    pop();
    
  noStroke();
  var words = ['Solar system', 'orbit'];
  textAlign(CENTER, CENTER);
  textFont('Helvetica');
  textSize(24);
  fill('white');
  text(words[0], width/2, height/20);
  text(words[1], width/2, height/20*19);
  push();
  translate(width/2, height/2);
  planet(0, 0, 75, '#ff9030');      // sun
  planet(1000, 80, 2, '#726291');    // mercury
  planet(800, 100, 5, '#e8ce96');   // venus
  planet(500, 115, 5, '#4494d6');  // earth
  planet(750, 140, 3, '#bf5e0f');   // mars
  planet(9000, 165, 24, '#d8c5b6'); // jupiter
  planet(6000, 210, 19, '#ccad70'); // saturn (doesn't have rings, sue me)
    //planet(6000, 210, 30, '#a77c29'); (ring, not finished)
  planet(2200, 234, 9, '#3da4db');  // uranus
  planet(3000, 275, 6, '#2364d3');  // neptune
  planet(4000, 300, 2, '#bcbab1');  // pluto
  pop();
}

function windowResized() { // makes canvas still fit if window is resized
  resizeCanvas(windowWidth, windowHeight);
}