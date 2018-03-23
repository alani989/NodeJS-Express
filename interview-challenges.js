// Challenege 1
// Given a list of numbers find the number of pairs that add to 0. Numbers are unique and will not repeat.
// Example: [-2, 1, 0, 2] => 1 pair since only -2 + 2 = 0

var myList = [-10, -9, -5, 0, 5, 8, 9, 9, 10];
var myListCopy = []
myList.forEach(function (e) {
    myListCopy.push(e);
});
var result = [];
var j = 0;
for (var i = 0; i < myList.length; i++) {
    if (myList[i] + myList[j] == 0) {
        result.push(myList[i]);
        result.push(myList[j]);
        j++;
        i = 0;
        myList.pop(i);
        myList.pop(j);
    }
}
console.log(result);
