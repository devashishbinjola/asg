var arr=[1, [2, [3, [4, 5]]]];
function flattenArray(arr,obj=[]){

    for(let i=0;i<arr.length;i++){
        if(Array.isArray(arr[i])){
            flattenArray(arr[i],obj);
        }else{
            obj.push(arr[i]);
        }
    }
    return obj;
}

console.log(flattenArray(arr));
