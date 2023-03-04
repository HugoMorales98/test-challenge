const { default: expect } = require('expect');

const factorial = require('../factorial');

test('Factorial 5', () => {
    expect(factorial(5)).toBe(120);//
})