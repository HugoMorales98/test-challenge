function fizzBuzz(num) { // Definir una función llamada fizzBuzz que toma un argumento num

    if (num % 3 === 0 && num % 5 === 0) { // Verificar si num es divisible entre 3 y entre 5
      return 'FizzBuzz'; // Si es divisible entyre 3 y entre 5, devolver 'FizzBuzz'

    } else if (num % 3 === 0) { // Verificar si num es divisible entre 3
      return 'Fizz'; // Si es divisible entre 3, devolver 'Fizz'

    } else if (num % 5 === 0) { // Verificar si num es divisible entre 5
      return 'Buzz'; // Si es divisible entre 5, devolver 'Buzz'

    } else { // Si no cumple ninguna de las condiciones anteriores
      return num; // Devolver el número que se pasó como argumento
    }
  }

  module.exports = fizzBuzz;
