// Definimos una función recursiva para calcular el factorial de un número
function factorial(num) {
    // Caso: si el número es 0 o 1, el factorial es 1
    if (num === 0 || num === 1) {
      return 1;
    }
    // Caso recursivo: si el número es mayor que 1, se llama a la función recursivamente
    else {
      // La función se llama a sí misma con un argumento menor en cada llamada hasta llegar al caso base
      return num * factorial(num - 1);
    }
  }

   module.exports = factorial;
  
