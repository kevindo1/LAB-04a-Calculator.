import { add } from './calculations.js';
import { subtract } from './calculations.js';
import { multiply } from './calculations.js';
import { divide } from './calculations.js';
import { modulo } from './calculations.js';
import { integer } from './calculations.js';
import { pythagorean } from './calculations.js';
import { random } from './calculations.js';


// import functions and grab DOM elements
const addInput1 = document.getElementById('add-input-1');
const addInput2 = document.getElementById('add-input-2');
const addOutput = document.getElementById('add-btn');
const addAnswer = document.getElementById('add-answer');

const subtractInput1 = document.getElementById('subtract-input-1');
const subtractInput2 = document.getElementById('subtract-input-2');
const subtractOutput = document.getElementById('subtract-btn');
const subtractAnswer = document.getElementById('subtract-answer');

const multiplyInput1 = document.getElementById('multiply-input-1');
const multiplyInput2 = document.getElementById('multiply-input-2');
const multiplyOutput = document.getElementById('multiply-btn');
const multiplyAnswer = document.getElementById('multiply-answer');

const divideInput1 = document.getElementById('divide-input-1');
const divideInput2 = document.getElementById('divide-input-2');
const divideOutput = document.getElementById('divide-btn');
const divideAnswer = document.getElementById('divide-answer');

const moduloInput1 = document.getElementById('modulo-input-1');
const moduloInput2 = document.getElementById('modulo-input-2');
const moduloOutput = document.getElementById('modulo-btn');
const moduloAnswer = document.getElementById('modulo-answer');

const integerInput1 = document.getElementById('integer-input-1');
const integerInput2 = document.getElementById('integer-input-2');
const integerOutput = document.getElementById('integer-btn');
const integerAnswer = document.getElementById('integer-answer');

const pythagoreanInput1 = document.getElementById('pythagorean-input-1');
const pythagoreanInput2 = document.getElementById('pythagorean-input-2');
const pythagoreanOutput = document.getElementById('pythagorean-btn');
const pythagoreanAnswer = document.getElementById('pythagorean-answer');

const randomOutput = document.getElementById('random-btn');
const randomAnswer = document.getElementById('random-answer');

addOutput.addEventListener('click', () => {
    const value1 = Number(addInput1.value);
    const value2 = Number(addInput2.value);
    const result = add(value1, value2);
    addAnswer.textContent = result;
});

subtractOutput.addEventListener('click', ()=> {
    const value1 = Number(subtractInput1.value);
    const value2 = Number(subtractInput2.value);
    const result = subtract(value1, value2);
    subtractAnswer.textContent = result;
});

multiplyOutput.addEventListener('click', ()=> {
    const value1 = Number(multiplyInput1.value);
    const value2 = Number(multiplyInput2.value);
    const result = multiply(value1, value2);
    multiplyAnswer.textContent = result;
});

divideOutput.addEventListener('click', ()=> {
    const value1 = Number(divideInput1.value);
    const value2 = Number(divideInput2.value);
    const result = divide(value1, value2);
    divideAnswer.textContent = result;
});

moduloOutput.addEventListener('click', ()=> {
    const value1 = Number(moduloInput1.value);
    const value2 = Number(moduloInput2.value);
    const result = modulo(value1, value2);
    moduloAnswer.textContent = result;
});

integerOutput.addEventListener('click', ()=> {
    const value1 = Number(integerInput1.value);
    const value2 = Number(integerInput2.value);
    const result = integer(value1, value2);
    integerAnswer.textContent = result;
});

pythagoreanOutput.addEventListener('click', ()=> {
    const value1 = Number(pythagoreanInput1.value);
    const value2 = Number(pythagoreanInput2.value);
    const result = pythagorean(value1, value2);
    pythagoreanAnswer.textContent = result;
});

randomOutput.addEventListener('click', ()=> {
    const result = random(0, 100);
    randomAnswer.textContent = result;
});

