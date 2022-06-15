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
console.log(add(6,2),subtract(6,2),multiply(6,2),divide(6,2))

function operate(a,operator,b){
    return operator(a,b);
}
console.log(operate(5,subtract,4));