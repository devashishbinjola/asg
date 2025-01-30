let deepClone= (obj)=>{
if(obj===null || obj !=="object"){
return obj;
}
let newObj={};
for(var key in obj){
if(typeof obj[key] ==="object" && obj[key] !=null){
 newObj[key]= deepClone(obj[key]);
}else{
newObj[key] = obj[key];
}
}
return newObj;
}
const obj={name:"Devashish",address:{ city:"Roorkee",state:"Uttrakhand"}};
const cloneObj =deepClone(obj);
cloneObj.address.city="Dehradun";
console.log(obj.address.city);
