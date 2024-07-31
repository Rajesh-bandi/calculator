var exp="";
var newstr="";
for (let index = 0; index < 10; index++) {
    document.getElementById(index).addEventListener("click",function(){sendnumber(index);});
}
document.getElementById("+").addEventListener("click",function(){sendnumber("+");});
document.getElementById("-").addEventListener("click",function(){sendnumber("-");});
document.getElementById("x").addEventListener("click",function(){sendnumber("*");});
document.getElementById("/").addEventListener("click",function(){sendnumber("/");});
document.getElementById("(").addEventListener("click",function(){sendnumber("(");});
document.getElementById(")").addEventListener("click",function(){sendnumber(")");});
document.getElementById("Del").addEventListener("click",function(){del();});
document.getElementById(".").addEventListener("click",function(){sendnumber(".");});
document.getElementById("c").addEventListener("click",function(){clear();});
document.getElementById("=").addEventListener("click",function(){evaluate();});
function sendnumber(number){
  exp += number;
  document.getElementById("display").value=exp;
}
function clear(){
    exp="";
    document.getElementById("display").value=exp;
}
function del(){
    newstr=exp.slice(0,-1);
    exp=newstr;
    document.getElementById("display").value=exp;
}

function evaluate(){
    let result = eval(exp);
    document.getElementById("display").value=result;
}