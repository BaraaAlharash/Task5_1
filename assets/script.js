const btn_num = document.querySelectorAll('.btn-num');
const btn_result = document.querySelector('.btn-result');
const btn_comma = document.querySelector('.btn-comma');
const btn_operator = document.querySelectorAll('.btn-operator');
const btn_clearAll = document.querySelector('.btn-clearAll');
const btn_clear = document.querySelector('.btn-clear');
const screen = document.querySelector('.screen');

let value = '', first = '', second = '', operator = '', result = '';

btn_num.forEach(function(btn_num){
    btn_num.addEventListener('click',function(){
        value = btn_num.textContent;
        if(operator == ''){
            first += value; 
            screen.textContent = first;
        } else {
            second += value; 
            screen.textContent = second;
        }
    });
});
let i=0;
btn_operator.forEach(function(btn_operator){
    btn_operator.addEventListener('click',function(){
        if (first !== '' && i==0){
            i++;
            operator = btn_operator.textContent;
            screen.textContent = operator;
        }
    });
});

btn_comma.addEventListener('click', function(){
    if (operator == '') {
        if (!first.includes('.')) { 
            first += '.'; 
            screen.textContent = first;
        }
    } else {
        if (!second.includes('.')) { 
            second += '.';
            screen.textContent = second;
        }
    }
});

btn_result.addEventListener('click', calculator);

function calculator(){
    switch(operator){
        case '+':
            result = Number(first) + Number(second); 
            break;
        case '−':
            result = first - second; 
            break;
        case '×':
            result = first * second; 
            break;
        case '÷':
            result = first / second; 
            break;
            return;
    }
    screen.textContent = first + ' ' + operator + ' ' + second + ' = ' + result;
    first = '';
    second = '';
    operator = '';
    result = '';
    i=0;
    }

btn_clearAll.addEventListener('click', function(){
    first = '', second = '', operator = '', result = '';
    screen.textContent = ''; 
});

btn_clear.addEventListener('click', function(){
    if(operator == ''){
        first = first.slice(0, -1);
        screen.textContent = first;
    } else {
        second = second.slice(0, -1); 
        screen.textContent = second;
    }
});
