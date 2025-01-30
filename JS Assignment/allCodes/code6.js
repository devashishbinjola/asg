var arr=[1,2,3,4];
// Replace all occurrences of a number with another number.(2 with 9)
var target=2;
var replacement=9;
var updatedArray=arr.map(num => num===target ? replacement:num);
console.log(updatedArray);
