// IMPORT MODULES under test here:
import { add_two, add } from '../calculations.js';

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


test('add(4,5) function', (expect) => {
    // Arrange
    const input1 = 4;
    const input2 = 5;
    const expected = 9;

    // Act
    const actual = add(input1, input2);

    // Assert
    expect.equal(actual, expected, 'should add 3 and 2');
});