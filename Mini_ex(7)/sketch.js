var sound, amplitude, cnv;
var sliders = [];

function preload(){
   sound = loadSound('hum.mp3');
}

function setup() {
  cnv = createCanvas(800,100);
  cnv.position(10,10);
  background(252,207,73);
  textFont('Helvetica');
  textSize(54);
  text('"HMM HM HM, HMM HM HM"',40,70);
  amplitude = new p5.Amplitude(.5);
  sound.loop();

  for (i = 0; i < 45; i++) {
    sliders[i] = createSlider(0, 300, 0);
    sliders[i].position(-140+i*18,260);
    sliders[i].style('rotate', -90);
    sliders[i].size(300);
  }
}

function draw() {

  for (i = 0; i < sliders.length; i++) {
    var level = amplitude.getLevel();
    var x = map(level, 0, 1, 0, 10000);
    sliders[i].value(x);
  }
}
