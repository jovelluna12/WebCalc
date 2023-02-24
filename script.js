let Operator = ''
let num1 = 0;
let num2 = 0;
function printNumber(num){
    document.getElementById('input-field').innerHTML+=num;
}
function clearInput(){
    document.getElementById('input-field').innerHTML="";
}
function clearResult(){
    document.getElementById('result').innerHTML=0;
}
function setAddOperator(){
    Operator = '+';
    num1=document.getElementById('input-field').innerHTML;
    clearInput();
}
function setSubtractOperator(){
    Operator = '-';
    num1=document.getElementById('input-field').innerHTML;
    clearInput();
}
function setMultiplyOperator(){
    Operator = '*';
    num1=document.getElementById('input-field').innerHTML;
    clearInput();
}
function setDivideOperator(){
    Operator = '/';
    num1=document.getElementById('input-field').innerHTML;
    clearInput();
}
function getResult(){
    num2=document.getElementById('input-field').innerHTML;

    if (Operator == '+'){
        document.getElementById('result').innerHTML=Number(num1)+Number(num2);
    }
    else if (Operator == '-'){
        document.getElementById('result').innerHTML=Number(num1)-Number(num2);
    }
    else if (Operator == '*'){
        document.getElementById('result').innerHTML=Number(num1)*Number(num2);
    }
    else if (Operator == '/'){
        document.getElementById('result').innerHTML=Number(num1)/Number(num2);
    }
    clearInput()

}
