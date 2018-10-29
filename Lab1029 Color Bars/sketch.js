
//Jakob Hachigian-Kreutzer
//Lab1029 Color Bars
var bars = [];

function setup() {
  bubbleSort(bars);
}

function draw() {
}

function bubbleSort(bars) {
    var length = bar.length;
    for (var i = 0; i < length; i++) {
      for (var j = 0; j < (length - i - 1); j++) {
        bars[j].clrAvg
        if(bar[j] > bar[j+1]) {
          var temp = bar[j];
          bar[j] = bar[j+1];
          bar[j+1] = temp;
            }
        }
    }
}
