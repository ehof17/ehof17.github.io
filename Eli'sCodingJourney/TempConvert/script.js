const answers = new URLSearchParams(window.location.search);

const num = answers.get('number');
const type1 = answers.get('toconvert');
const type2 = answers.get('converted');

const num1El = document.getElementById('temp1');
const num2El = document.getElementById('temp2');
const type1El = document.getElementById('type1');
const type2El = document.getElementById('type2');

num1El.innerText = num;
type1El.innerText = type1;
type2El.innerText = type2;
let num2 = 0;

if (type1 === 'Celcius'){
    if (type2 === 'Fahrenheit'){
        num2 = (Number(num) * 9/5) + 32;
    }
    else if (type2 === 'Kelvin'){
        num2 = Number(num) + 273;
    }
    else{
        num2 = num;
    }

}
else if (type1 === 'Fahrenheit'){
    num2 = (Number(num) *5/9) - 32;
    if(type2 === 'Kelvin'){
        num2 +=273;
    }
    else if (type2 !== 'Celcius'){
        num2 = Number(num);
    }

}
else{
    num2 = Number(num)-273;
    if(type2 === 'Fahrenheit'){
        num2 = (Number(num) * 9/5) + 32;
    }
    else if(type2 !== 'Celcius'){
       num2 = Number(num)
    }

}
num2 = Math.round((num2 + Number.EPSILON) * 100) / 100;
temp2.innerText = num2;






