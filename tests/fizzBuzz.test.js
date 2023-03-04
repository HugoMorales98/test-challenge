const { default: expect } = require('expect');

const fizzBuzz = require('../fizzBuzz');

test('Fizz-Buzz de 30', () => {
    expect(fizzBuzz(30)).toBe('FizzBuzz');//
})