
//Jakob Hachigian-Kreutzer
//Lab1022 WordSort
function setup() {
  //remove blank black screen
  noCanvas();
}

function draw() {
  //call sorting function
  bubbleSort(txt);
}
//what is being sorted
var txt = ["bat", "cat", "rat", "scum", "rum", "food", "dude"];
//print original text
console.log(txt);
function bubbleSort(txt) {
    var length = txt.length;
    //number of passes
    for (var i = 0; i < length; i++) {
        //notice that j < (length - i)
        for (var j = 0; j < (length - i - 1); j++) {
            //Compare the adjacent positions
            var az = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
            //look at the 1st letters of the 2 words being compared
            var txt1 = az.indexOf(txt[j].charAt(0));
            var txt2 = az.indexOf(txt[j+1].charAt(0));
            if(txt1 > txt2) {
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
