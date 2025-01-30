const[first,...rest]=[1,2,3,4];
var ans=first+rest.reduce((total,val)=>(total+=val),0);
console.log(ans);