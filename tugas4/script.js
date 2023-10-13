function calcDisplay(display){
    var expr = document.getElementById("display").value;
    if(expr=="undefined" || expr=="Infinity") expr="";
    expr += display;
    document.getElementById("display").value = expr;
}

function clearDisplay(){
    document.getElementById("display").value = "";
}

function calculate(){
    var exp = document.getElementById("display").value;
    var res = eval(exp);
    document.getElementById("display").value = res;
}