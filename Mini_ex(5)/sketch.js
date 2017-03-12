var rg;

function setup() {

  noCanvas();
  rg = new RiGrammar();
  rg.loadFrom('grammar.json');
  button = createButton('Generate New Haiku');
  button.mousePressed(newHaiku);
}

function newHaiku() {
  var result = rg.expand();
  createP(result);
}
