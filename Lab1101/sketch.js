
//Jakob Hachigian-Kreutzer
//Lab1022 WordSort
//what is being sorted
var json = [];
function preload(){
  json = loadStrings("data.json");
}

function setup() {
  //remove blank black screen
  noCanvas();
  console.log(json.objects)
  bubbleSort(json);
}

function draw() {
}

function bubbleSort(json) {
    var length = json.length;
    //number of passes
    for (var i = 0; i < length; i++) {
        //notice that j < (length - i)
        for (var j = 0; j < (length - i - 1); j++) {
            //Compare the adjacent positions
            var a = json.objects.name[j];
            var b = json.objects.name[j];
            if(json[j] > json[j+1]) {
                //swap the numbers
                //temperary variable
                var temp = json[j];
                //replace current string with adjacent string
                json[j] = json[j+1];
                //replace adjacent string with temp string (current string)
                json[j+1] = temp;
            }
        }
    }
}
