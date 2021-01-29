function display(value)
{
document.getElementById("output").value+=value;
}
function result()
{
var x = document.getElementById("output").value;
var y =eval(x);
document.getElementById("output").value=y;
}

function clr() 
 { 
 document.getElementById("output").value = ""; 
  } 

function back()
{
var delet = document.getElementById("output").value;
delet=delet.slice(0,-1);
document.getElementById("output").value=delet;
}