const { default: expect } = require('expect');

const limpiarDNA = require('../dna');

test('Prueba de limpiar el DNA', () => {
    expect(limpiarDNA("CTAGGGTATQXY")).toBe("CTAGGGTA");//
})

