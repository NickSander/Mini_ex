"use strict"

var player1, player2, ball, goal, succes, epic, fft;
var slider;

function preload () {
  goal = loadSound('assets/point.wav');
  succes = loadSound('assets/succes.wav');
  epic = loadSound('assets/epic.mp3');

}

function setup() {
    var canvas = createCanvas(windowWidth, windowHeight-20);
    succes.setVolume(0.1);
    goal.setVolume(0.1);

    slider = createSlider(0,1.0,0.5,0);
    slider.position(width/2-100, height-20);
    slider.style('width','200px');
    slider.style('background-color', 0,0,0,50);


    player1 = new Board(createVector(width - 40, height / 2))
    player2 = new Board(createVector(20, height / 2))
    ball = new Ball()
    epic.loop();

    fft = new p5.FFT();
    epic.amp(0.5);
}


function draw() {
    var val = slider.value();
    epic.setVolume(val);

    push()
    background("BLACK")
    drawBackground()
    player1.draw()
    player2.draw()
    ball.draw()
    ball.update(player1, player2)
    player1.update()
    player2.update()
    displayScore()
    showFramerate()

    var waveform = fft.waveform();
      noFill();
      beginShape();
      stroke(255,0,0,99);
      strokeWeight(2);
      for (var i = 0; i< waveform.length; i++){
        var y = map(i, 0, waveform.length, 0, height);
        var x = map( waveform[i], -1, 1, 0, width);
        vertex(x,y);
      }
      endShape();
    pop()
}

function keyPressed() {
    if(keyCode === DOWN_ARROW) {
        player1.moveDown();
    } else if (keyCode === UP_ARROW) {
        player1.moveUp();
    }
    else if(key === "W") {
        player2.moveUp();
    } else if(key === "S") {
        player2.moveDown();
    }
}

function keyReleased() {
    if(key === "W" || key === "S") {
        player2.stopMoving();
    } else if(keyCode === DOWN_ARROW || keyCode === UP_ARROW) {
        player1.stopMoving();
    }
}

function displayScore() {
    push()
    textAlign(CENTER)
    textSize(60)
    fill("WHITE")
    text(player1.score + "  " + player2.score, width /2, 50)
    pop()
}

function showFramerate() {
    push()
    textAlign(LEFT)
    textSize(10)
    fill("WHITE")
    text(round(frameRate(), 0), width - 10, 10)
    pop()
}



function drawBackground() {
    push()
    stroke("WHITE")
    strokeWeight(5)
    // for(var y = 0; y<height; y+= 25) {
    //     line(width / 2, y, width / 2, y + 10)
    // }
    pop()
}
