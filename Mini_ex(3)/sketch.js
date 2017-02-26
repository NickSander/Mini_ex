var img;

function preload() { 
    img = loadImage('image/youtube.jpg'); //preloads the youtube screenshot
}

function setup() {
 createCanvas(1000, 1000);
image(img,0,0); //YT screenshot
 frameRate (60);  //Framerate controlls the throbbers speed
}

function draw() {
   fill(0, 20); //Draws a rect with alphavalue (20) behind spinning ellipses to create a 'tail'
    rect(108, 61, 635, 315);
 
    //draws the four throbbers with num%, X, Y, color values
 drawThrobber(60, 0, 0, 'blue');
 drawThrobber(60, 14, 9, 'yellow');
 drawThrobber(60, 0, -17,'red');
 drawThrobber(60, -11, 11,'green');
}

function drawThrobber(num, X, Y, color) { 
    push();
    //the magic behind getting the ellipses to spin around
  translate(430, 240);
  var cir = 360/num*(frameCount%num);
  rotate(radians(cir));
  noStroke();
  fill(color); 
  ellipse(X,Y,15,15);  //the moving dots, the x,y is the distance from the center, the two last values are size
    pop();
    
}
