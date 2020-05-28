var display = document.getElementById('result');
var button;
var operand1 = 0;
var operand2;
var operator;
var ans = "";
buttons.addEventListener('click', function(event){
    button = event.target;
    var val = button.innerText;
    
    if(val=='+'||val=='-'||val=='/'||val=='*'||val=='%'){
        //console.log(val);
        display.innerText=val;
        operand1 = ans;
        console.log(operand1);
        operator = val;
        ans = "";
    }
    else if(val == '='){
        operand2 = ans;
        var result= evaluate(operand1,operand2,operator);
        if(result!=undefined||result=="0")
        ans = result;
        //console.log(result);
    }
    else if(val=='AC'){
        operand1="";
        operand2="";
        operator="";
        ans = "";
        display.innerText="";
    }
    else if(val=='+/-'){
        ans *= -1;
    }
    else if(val=='.'){
        ans = parseFloat(ans).toFixed(1);
        
    }
    else{
        if(ans != "" && ans.includes(".")){
            var num = (parseFloat(ans).toFixed());
            console.log(num);
            ans = parseFloat(num+"."+val).toFixed(1);
        }
        else{
            if(ans == "0"){
                ans = val;
            }else{
                ans += val;
            }
        }
        
    }
    if(ans != "" || ans == "0")
    display.innerText = ans;
});

function evaluate(operand1,operand2,operator){
    console.log(operand1+" "+operator+" "+operand2)
    if(operator == undefined || operand1 == undefined || operand2 == undefined) 
    return ;
    var res = eval(operand1+" "+operator+" "+operand2);
    if(res == Infinity) 
    return "Error";
    if(res == NaN) 
    return "0";
    console.log(res);
    return res;
}