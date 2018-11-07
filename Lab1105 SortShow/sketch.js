
//Jakob Hachigian-Kreutzer
//Lab1022 WordSort
//what is being sorted
var diameter = 400;
var angles = [];
var data = [];
function preload(){
  data = loadJSON("population.json");
}

function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  backgound(20, 20, 20);
  bubbleSort(data);
  console.log(data.countrydata)
}

function draw() {
}

function bubbleSort(data) {
    var length = data.length;
    //number of passes
    for (var i = 0; i < length; i++) {
        //notice that j < (length - i)
        for (var j = 0; j < (length - i - 1); j++) {
            //Compare the adjacent positions
            var a = data[j].countrydata.country;
            var b = data[j+1].countrydata.country;
            if(a > b) {
                //swap the numbers
                //temperary variable
                var temp = data[j];
                //replace current string with adjacent string
                data[j] = data[j+1];
                //replace adjacent string with temp string (current string)
                data[j+1] = temp;
            }
        }
    }
}



function pieChart(diameter, data){
  var lastAngle = 0;
  for (var i = 0; i < data.length, 0, 255){
    var color = map(i, 0. data.length, 0, 255);
    fill()
    arc(400, 400, diameter, diameter, lastAngle, lastAngle + radians(angles[i]));
    lastAngle += radians(angles[i]);
  }
}
