
//Jakob Hachigian-Kreutzer
//Lab1022 WordSort
//what is being sorted
var diameter = 400;
var angles = [];
var data = [];
var total = 0
function preload(){
  data = loadJSON("population.json");
}

function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(20, 20, 20, 20);
  bubbleSort(data);
  getTotal();
}

function draw() {
  pieChart(400, data);
}

function bubbleSort(data) {
  console.log(data.countrydata)
  var length = Object.keys(data.countrydata).length;
  //number of passes
  for (var i = 0; i < length; i++) {
      //notice that j < (length - i)
      for (var j = 0; j < (length - i - 1); j++) {
          //Compare the adjacent positions
          var a = data.countrydata[j].total;
          var b = data.countrydata[j+1].total;
          if(a > b) {
              //swap the numbers
              //temperary variable
              var temp = data.countrydata[j];
              //replace current string with adjacent string
              data.countrydata[j] = data.countrydata[j+1];
              //replace adjacent string with temp string (current string)
              data.countrydata[j+1] = temp;
            }
        }
    }
}


function getTotal(){
  length = data.countrydata.length
  for (var i = 0; i < length; i++){
    total = total + data.countrydata[i].total;
  }
  console.log(total)
}


//PROGRESS
function pieChart(diameter, data){
  length = data.countrydata.length
  for (var i = 0; i < length; i++){
    var gray = map(i, 0, data.countrydata.length, 0, 255);
    fill(gray);
    var angle = (2*(PI)*(data.countrydata.total))/total
    arc(400, 400, diameter, diameter, 0, angle);
  }
}
