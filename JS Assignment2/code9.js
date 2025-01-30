const data =[
    {
      name: "Bob",
      age: 24
    },
    {
      name: "Alice",
      age: 21
    }
  ]

 
var obArrayDes=(data)=> {
    const[{age},{name}]=data;
    console.log(`${name} 's age is ${age}.`);}
obArrayDes(data);