var xoff = 0.0;

function setup() {
  createCanvas(300, 300);
  noFill();
    
}

function draw() {
  background(200, 0, 255);
  
  //Draws the shape with the use of curveVertex, whilest making the curveTightness dependent on the mouseplacement 
  var t = map(mouseX, mouseY, width, -5, 5);
  curveTightness(t);
  noFill();
    beginShape();
  curveVertex(60, 76);
  curveVertex(70, 76);
  curveVertex(133, 74);
  curveVertex(133, 101);
  curveVertex(75, 105);
  curveVertex(75, 105);
  endShape();
   
  //Writes the text 
    fill(255, 0, 0);
    textSize(16);
    textAlign(RIGHT);
    text("&ERROR #32&", 200, 200);
    
  //Makes a vertical line move randomly on the x axis 
       xoff = xoff + .01;
  var n = noise(xoff) * width;
    strokeWeight(2);
  line(n, 0, n, height);
    stroke(255);
    
}
