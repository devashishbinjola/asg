var arr=[1,2,3,4];
function reversing(arr){
    var i=0;
    var j=arr.length-1;
    while(i<=j){
        var temp=arr[i];
        arr[i]=arr[j];
        arr[j]=temp;
        i++;
        j--;
    }
    return arr;
}
reversing(arr);
console.log(arr);
