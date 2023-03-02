const { default: expect } = require('expect');

const calculator = require('../calculator');

test('adds a + b', () => {
    expect(calculator.sum(2, 3)).toBe(5);//
})

test('substracts a - b', () => {
    expect(calculator.substract(5, 3)).toBe(2);// //
})

test('multiplies a * b', () => {
    expect(calculator.multiply(2, 3)).toBe(6);//
})

test('divides a / b', () => {
    expect(calculator.divide(6, 3)).toBe(2);// Consider decimals
})

test('Raises to power a ^ b', () => {
    expect(calculator.power(4, 6)).toBe(4096);//
})

