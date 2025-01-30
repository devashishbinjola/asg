const arr1=[3,2,6,28];
const arr2=[...arr1,34,22];
var findMax=arr2.reduce((max,val)=>max>val ? max:val);
console.log("Max: " + findMax);