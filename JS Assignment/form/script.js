
function validateForm(){
    var name = document.getElementById("name").value;
    var age  = document.getElementById("age").value;
    if(age<18 || name ===""){
        alert("Invalid");
        return false;
    }else{
        alert("Successfully Submitted");
        return true;
    }
}
document.getElementById("hover").onmouseover= function(){mouseOver()};
document.getElementById("hover").onmouseout= function(){mouseOut()};
function mouseOver(){
    document.getElementById("hover").style.color="red";
}
function mouseOut(){
    document.getElementById("hover").style.color="black";
}


var arr=[1,2,3,4];
arr.push(5);
console.log(arr);