function add(a,b){
    return a+b;
}
function subtract(a,b){
    return a-b;
}
function multiply(a,b){
    return a*b;
}
function divide(a,b){
    return a/b;
}
// console.log(add(6,2),subtract(6,2),multiply(6,2),divide(6,2))

function operate(a,operator,b){
    return operator(a,b);
}
// console.log(operate(5,subtract,4));

const buttons= document.querySelectorAll('.button');
const display=document.querySelector('.display');
const active =document.querySelector('.active');
const backspace=document.querySelector('.backspace');
buttons.forEach(button=>{
    button.addEventListener('click',()=>{
        if((display.textContent.includes('.'))&&button.textContent==='.'){
            return  ;
        }
        if(displayData.active){
            display.textContent='';
            displayData.active=0;
            displayData.equalactive=0;
        }
        if(displayData.equalactive){
            display.textContent='';
            displayData.equalactive=0;
            displayData.firstNumber=null}
            display.textContent+=button.textContent;
    })
})
let displayData={
    firstNumber:null,
    secondNumber:null,
    operator:null,
    active:0,
    equalactive:0,
}
const operators=document.querySelectorAll('.operator')
operators.forEach(operator=>{
    operator.addEventListener('click',()=>{
    if(displayData.equalactive)displayData.firstNumber=null;
        if(!displayData.active){
        if(displayData.firstNumber===null){displayData.firstNumber=Number(display.textContent);}
        else{
            displayData.secondNumber=Number(display.textContent);
            if(displayData.secondNumber ===0 && displayData.operator===divide){
                zerodivision();
                return;}
            display.textContent=operate(displayData.firstNumber,displayData.operator,displayData.secondNumber).toFixed(5);
            displayData.firstNumber=Number(display.textContent);
        }}
        if(operator.textContent==='+'){displayData.operator=add;}
        else if(operator.textContent==='-'){displayData.operator=subtract;}
        else if(operator.textContent==='*'){displayData.operator=multiply;}
        else if(operator.textContent==='/'){displayData.operator=divide;}
        // displayData.active ===1 ? displayData.firstNumber=display.textContent: displayData.secondNumber;
        displayData.active=1;
        displayData.equalactive=0;
})
    })
const equal=document.querySelector('.equal');
equal.addEventListener('click',()=>{

    if(displayData.equalactive || displayData.active)return;
    displayData.secondNumber=Number(display.textContent);
    if(displayData.secondNumber ===0 && displayData.operator===divide){
        zerodivision();
        return;}
    display.textContent=operate(displayData.firstNumber,displayData.operator,displayData.secondNumber).toFixed(5);
    displayData.firstNumber=Number(display.textContent);
    displayData.equalactive=1;
})
const clear=document.querySelector('.clear');
clear.addEventListener('click',()=>{
    displayData.firstNumber=null;
    displayData.secondNumber=null;
    displayData.operator=null;
    displayData.active=0;
    displayData.equalactive=0;
    display.textContent='';})

    function zerodivision(){
        displayData.firstNumber=null;
        displayData.secondNumber=null;
        displayData.operator=null;
        displayData.active=1;
        displayData.equalactive=1;
        display.textContent='Error  snarky zero division';
    }
backspace.addEventListener('click',()=>{
    let str=display.textContent;
    const strlen=str.length;
    display.textContent=display.textContent.substring(0,strlen-1)
})