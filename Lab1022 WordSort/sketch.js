
//Jakob Hachigian-Kreutzer
//Lab1022 WordSort
//what is being sorted
var txt = ["manked", "zoot", "yeet", "edibog", "mental", "fridge"];
function setup() {
  //remove blank black screen
  noCanvas();
  console.log(txt)
  bubbleSort(txt);
}

function draw() {
}

function bubbleSort(txt) {
    var length = txt.length;
    //number of passes
    for (var i = 0; i < length; i++) {
        //notice that j < (length - i)
        for (var j = 0; j < (length - i - 1); j++) {
            //Compare the adjacent positions
            if(txt[j] > txt[j+1]) {
                //swap the numbers
                //temperary variable
                var temp = txt[j];
                //replace current string with adjacent string
                txt[j] = txt[j+1];
                //replace adjacent string with temp string (current string)
                txt[j+1] = temp;
                //print sorting progress
                console.log(txt);
            }
        }
    }
}
