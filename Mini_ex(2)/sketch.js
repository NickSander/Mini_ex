function setup() {
  createCanvas(300, 300);
  noFill();
}

function draw() {
  background(200, 0, 255);
  var t = map(mouseX, 0, width, -5, 5);
  curveTightness(t);
  beginShape();
  curveVertex(60, 76);
  curveVertex(60, 76);
  curveVertex(133, 74);
  curveVertex(133, 101);
  curveVertex(75, 105);
  curveVertex(75, 105);
  endShape();
}