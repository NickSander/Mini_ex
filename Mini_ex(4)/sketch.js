//variables for r,g,b values in the canvas background
var r = 0;
var g = 0;
var b = 0;

//var object for circle
var circle = {
  size: 80,
};

//var object for the circle color
var col = {
r: 255,
g: 0,
b: 0
};

function setup () {
  createCanvas(windowWidth,windowHeight);
  frameRate(10);
}

function draw () {
  //used map function to map the r,g and b values to match the canvas width and controlled with mouseX and mouseY
  r = map(mouseX,0,600,0,255);
  r = map(mouseY,0,400,255,0);
  g = map(mouseX,0,600,255,0);
  g = map(mouseY,0,400,0,255);
  b = map(mouseX,0,600,0,255);
  background(r,g,b);

//pulls the object from above and defines the ellipse size using mouseX and the map function
  circle.size = map(mouseX,0,windowWidth,0,80);

//makes the ellipses have random colors between rgb 0-255
  col.r = random(0,255);
  col.g = random(0,255);
  col.b = random(0,255);

//uses the for loop function to draw the ellipses
    for (x = 50; x <= width; x+=100){
    fill(col.r, col.g, col.b);
    ellipse(x, 50, circle.size, circle.size);
    }

      for (x = 50; x <= width; x+=100){
        fill(col.r, col.g, col.b);
        ellipse(x, 150, circle.size, circle.size);
      }

        for (x = 50; x <= width; x+=100){
          fill(col.r, col.g, col.b);
          ellipse(x, 250, circle.size, circle.size);
        }

          for (x = 50; x <= width; x+=100){
            fill(col.r, col.g, col.b);
            ellipse(x, 350, circle.size, circle.size);
          }

            for (x = 50; x <= width; x+=100){
              fill(col.r, col.g, col.b);
              ellipse(x, 450, circle.size, circle.size);
            }

              for (x = 50; x <= width; x+=100){
                fill(col.r, col.g, col.b);
                ellipse(x, 550, circle.size, circle.size);
              }

                for (x = 50; x <= width; x+=100){
                  fill(col.r, col.g, col.b);
                  ellipse(x, 650, circle.size, circle.size);
                }

  }
