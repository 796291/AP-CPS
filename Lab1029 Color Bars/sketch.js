
//Jakob Hachigian-Kreutzer
//Lab1029 Color Bars
var Bars = [];

function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(20, 20, 20);
  //amount of bars being displayed
  numBars = 40;
  //loading that amount of balls
  loadBars(numBars);
  //call sorting function
  bubbleSort(Bars);
}

function draw() {
  background(20, 20, 20, 6000);
  noStroke();
  for(var i = 0; i < Bars.length; i++){
    Bars[i].run();
  }
}

function loadBars(numBars){
  for(var i = 0; i < numBars; i++){
    var w = 800/numBars;
    var h = 250;
    var loc = createVector(0+(w*i), 150);
    var red = random(0, 255);
    var green = random(0, 255);
    var blue = random(0, 255);
    var clr = color(red, green, blue);
    //find the average of the color values - what is be ng sorted by
    var clrAvg = (red + green + blue)/3;
    //create the colorbars through abstraction
    var bar = new colorbar(loc, w, h, clr, clrAvg);
    Bars.push(bar);
  }
}

function bubbleSort(Bars) {
    var length = Bars.length;
    for (var i = 0; i < length; i++) {
      for (var j = 0; j < (length - i - 1); j++) {
        var a = Bars[j].clrAvg;
        var b = Bars[j+1].clrAvg;
        if(a > b) {
          var temp = Bars[j];
          Bars[j] = Bars[j+1];
          Bars[j+1] = temp;
            }
        }
    }
}
