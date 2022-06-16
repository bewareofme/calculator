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
buttons.forEach(button=>{
    button.addEventListener('click',()=>{
        display.textContent+=button.textContent;
    })
})
let displayData={
    firstNumber:null,
    secondNumber:null,
    operator:null,
}
const operators=document.querySelectorAll('.operator')
operators.forEach(operator=>{
    operator.addEventListener('click',()=>{
        if(operator.textContent==='+'){displayData.operator=add;}
        else if(operator.textContent==='-'){displayData.operator=subtract;}
        else if(operator.textContent==='*'){displayData.operator=multiply;}
        else if(operator.textContent==='/'){displayData.operator=divide;}
        console.log(operator);
        console.log(active);
        operator.classList.add('active');
        if(displayData.firstNumber===null){
        displayData.firstNumber=Number(display.textContent);}
        else{
            displayData.secondNumber=Number(display.textContent);
            display.textContent=operate(displayData.firstNumber,displayData.operator,displayData.secondNumber);
            displayData.firstNumber=operate(displayData.firstNumber,displayData.operator,displayData.secondNumber);
            operator.classList.remove('active');
            console.log(active)
            }
})
    })
const equal=document.querySelector('.equal');
equal.addEventListener('click',()=>{
    display.secondNumber=Number(display.textContent)

})
