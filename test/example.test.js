// IMPORT MODULES under test here:
import { add_two, add, subtract, multiply, divide, modulo, integer, pythagorean } from '../calculations.js';

// import { example } from '../example.js';

const test = QUnit.test;


test('time to test a function', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = 4;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = add_two(2);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});


test('divide', (expect) => {
    // Arrange
    const input1 = 25;
    const input2 = 5;
    const expected = 5;

    // Act
    const actual = divide(input1, input2);

    // Assert
    expect.equal(actual, expected, 'should divide 25 and 5');
});