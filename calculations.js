export function add_two(num) {
    return num + 2;
}

export function add(num1, num2) {
    return num1 + num2;
}

export function subtract(num1, num2) {
    return num1 - num2;
}

export function multiply(num1, num2) {
    return num1 * num2;
}

export function divide(num1, num2) {
    return num1 / num2;
}

export function modulo(num1, num2) {
    return num1 % num2;
}

export function integer(num1, num2) {
    return Math.floor(num1 / num2);
}

export function pythagorean(num1, num2) {
    return Math.sqrt(Math.pow(num1, 2) + Math.pow(num2, 2));
}

export function random(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}
