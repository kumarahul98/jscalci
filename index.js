function calc()
{
 
    var a=parseFloat(document.getElementById("A").value);
    var b=parseFloat(document.getElementById("B").value);
    if(isNaN(a)||isNaN(b))
        alert("Invalid Input");

    document.getElementById('add').onclick = function() {alert(a+b)}
    document.getElementById('sub').onclick = function() {alert(a-b)}
    document.getElementById('mul').onclick = function() {alert(a*b)}
    document.getElementById('divi').onclick = function() {alert(a/b)}
       
}