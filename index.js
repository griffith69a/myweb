const Label = document.getElementById('MyLabel');
const eightBtn = document.getElementById('eightBtn');
const nineBtn = document.getElementById('nineBtn');
const zeroBtn = document.getElementById('zeroBtn');
const oneBtn = document.getElementById('oneBtn');
const twoBtn = document.getElementById('twoBtn');
const threeBtn = document.getElementById('threeBtn');
const fourBtn = document.getElementById('fourBtn');
const fiveBtn = document.getElementById('fiveBtn');
const sixBtn = document.getElementById('sixBtn');
const sevenBtn = document.getElementById('sevenBtn');
const plusBtn = document.getElementById('plusBtn');
const equalBtn = document.getElementById('equalBtn');
const minusBtn = document.getElementById('minusBtn');
const sur = document.getElementById('sur');
const multiBtn = document.getElementById('multiBtn');
const deleteBtn = document.getElementById('deleteBtn'); // Assuming you add this in your HTML

let calculation = '';

plusBtn.onclick = function () {
    calculation = calculation + '+';
    Label.textContent = calculation;
};

zeroBtn.onclick = function () {
    calculation = calculation + '0';
    Label.textContent = calculation;
};

oneBtn.onclick = function () {
    calculation = calculation + '1';
    Label.textContent = calculation;
};

twoBtn.onclick = function () {
    calculation = calculation + '2';
    Label.textContent = calculation;
};

threeBtn.onclick = function () {
    calculation = calculation + '3';
    Label.textContent = calculation;
};

fourBtn.onclick = function () {
    calculation = calculation + '4';
    Label.textContent = calculation;
};

fiveBtn.onclick = function () {
    calculation = calculation + '5';
    Label.textContent = calculation;
};

sixBtn.onclick = function () {
    calculation = calculation + '6';
    Label.textContent = calculation;
};

sevenBtn.onclick = function () {
    calculation = calculation + '7';
    Label.textContent = calculation;
};

eightBtn.onclick = function () {
    calculation = calculation + '8';
    Label.textContent = calculation;
};

nineBtn.onclick = function () {
    calculation = calculation + '9';
    Label.textContent = calculation;
};

deleteBtn.onclick = function () {
    calculation = '';
    Label.textContent = calculation;
};

minusBtn.onclick = function () {
    calculation = calculation + '-';
    Label.textContent = calculation;
};

sur.onclick = function () {
    calculation = calculation + '/';
    Label.textContent = calculation;
};

multiBtn.onclick = function () {
    calculation = calculation + 'x';
    Label.textContent = calculation;
};

function calc() {
    if (calculation.indexOf('+') != -1) {
        let x = parseFloat(calculation.substring(0, calculation.indexOf('+')));
        let y = parseFloat(calculation.substring(calculation.indexOf('+') + 1, calculation.length));
        return (x + y);
    }
    else if (calculation.indexOf('-') != -1) {
        let x = parseFloat(calculation.substring(0, calculation.indexOf('-')));
        let y = parseFloat(calculation.substring(calculation.indexOf('-') + 1, calculation.length));
        return (x - y);
    }
    else if (calculation.indexOf('/') != -1) {
        let x = parseFloat(calculation.substring(0, calculation.indexOf('/')));
        let y = parseFloat(calculation.substring(calculation.indexOf('/') + 1, calculation.length));
        return (x / y);
    }
    else if (calculation.indexOf('x') != -1) {
        let x = parseFloat(calculation.substring(0, calculation.indexOf('x')));
        let y = parseFloat(calculation.substring(calculation.indexOf('x') + 1, calculation.length));
        return (x * y);
    }
}

equalBtn.onclick = function () {
    Label.textContent = calc();
    calculation = ''; // Reset the calculation after displaying the result
};
