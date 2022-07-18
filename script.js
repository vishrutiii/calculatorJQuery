let num1 = '';
let num2 = '';
let operator = '';
let result = '';
let flag = 0;
// let display = document.getElementById('display');
// let clear = document.getElementById('clear');
// let equals = document.getElementById('equals');

$(document).ready(function() {
    $('button').on('click', function(e) {
        let btn = e.target.innerHTML;
        if(btn >= '0' && btn <= '9'){
            handleNumber(btn);
        }
        else if(btn === '+' || btn === '-' || btn === 'X' || btn === '/'){
            handleOperator(btn);
        }
        else if(btn === 'CLR'){
            num1 = '';
            num2 = '';
            operator = '';
            result = '';
            flag = 0;
            $('.display').text('');
        }
        else if(btn === '.'){
            if(flag === 0){
                num1 += '.';
                $('.display').text(num1);
            }
            else if(flag ===1){
                num2 += '.';
                $('.display').text(num2);
            }
        }
    });
});

function handleNumber(num){
    if(num1 === ""){ //operator === ''
        num1 += num;
        $('.display').html(num1);
    }
    else{
        num2 += num;
        flag = 1;
        $('.display').html(num2);
    }
    displayButton(num);
}

function handleOperator(op){
    if(num1 !== '' && num2 === ''){
        operator = op;
    }
    else{
        calculate();
        operator = op;
        num1 = result;
        flag = 0;
        num2 = '';
    }
}

function calculate(){
    switch(operator){
        case '+':
            result = parseInt(num1) + parseInt(num2);
            displayButton(result);
            break;
        case '-':
            result = parseInt(num1) - parseInt(num2);
            displayButton(result);
            break;
        case 'X':
            result = parseInt(num1) * parseInt(num2);
            displayButton(result);
            break;
        case '/':
            result = parseInt(num1) / parseInt(num2);
            displayButton(result);
            break;
    }
}

function displayButton(btn){
    $('.display').text(btn);
}

