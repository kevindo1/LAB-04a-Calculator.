const test = QUnit.test;
import { add, subtract, multiply, divide, modulo, integer, pythagorean } from '../calculations.js';


test('time to test a function', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = true;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = true;

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});
test('add', (expect) => {
    const input1 = 4;
    const input2 = 2;
    const expected = 6;

    const actual = add(input1, input2);

    expect.equal(actual, expected, 'should add 4 and 2');

});

test('subtract', (expect) => {
    const input1 = 4;
    const input2 = 2;
    const expected = 2;

    const actual = subtract(input1, input2);

    expect.equal(actual, expected, 'should subtract 4 and 2');

});

test('multiply', (expect) => {
    const input1 = 4;
    const input2 = 2;
    const expected = 8;

    const actual = multiply(input1, input2);

    expect.equal(actual, expected, 'should multiply 4 and 2');
});

test('divide', (expect) => {
    const input1 = 4;
    const input2 = 2;
    const expected = 2;

    const actual = divide(input1, input2);

    expect.equal(actual, expected, 'should divide 4 and 2');

});

test('modulo', (expect) => {
    const input1 = 4;
    const input2 = 2;
    const expected = 0;

    const actual = modulo(input1, input2);

    expect.equal(actual, expected, 'should modulo 4 and 2');
});

test('integer', (expect) => {
    const input1 = 5;
    const input2 = 3;
    const expected = 1;

    const actual = integer(input1, input2);

    expect.equal(actual, expected, 'should integer divide 5 and 3');
});

test('pythagorean', (expect) => {
    const input1 = 3;
    const input2 = 4;
    const expected = 5;

    const actual = pythagorean(input1, input2);

    expect.equal(actual, expected, 'should calculate hypotanouse with side of 3 and 4');
});