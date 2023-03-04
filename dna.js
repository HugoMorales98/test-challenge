function limpiarDNA(dnaString) {
    // Si la cadena de ADN está vacía, devuelve una cadena vacía
    if (dnaString === "") {
      return "";
    }
  
    // Usamos una expresión regular para reemplazar cualquier valor no canónico de ADN (que no sea C, T, A o G) en la cadena con una cadena vacía.
    return dnaString.replace(/[^CTAG]/g, "");
  }
  
  module.exports = limpiarDNA;