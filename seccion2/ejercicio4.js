console.log(
  "Intentando llamar a 'funcionDeclarada' antes de su declaración:"
);
try {
  console.log(funcionDeclarada());
} catch (error) {
  console.log("Error:", error.message);
}

console.log(
  "Intentando llamar a 'funcionExpresada' antes de su declaración:"
);
try {
  console.log(funcionExpresada());
} catch (error) {
  console.log("Error:", error.message);
}

// Declaración de una función declarada
function funcionDeclarada() {
  return "Función declarada ha sido llamada.";
}

// Declaración de una función expresada
const funcionExpresada = function () {
  return "Función expresada ha sido llamada.";
};

console.log("Llamando a 'funcionDeclarada' después de su declaración:");
console.log(funcionDeclarada());

console.log("Llamando a 'funcionExpresada' después de su declaración:");
console.log(funcionExpresada());

// 4.3

/* 
A) ¿Qué sucedió cuando intentaste llamar a las funciones antes de su declaración?: 
  La funcion declarada se ejecuto sin problema debido a su hoisting, la funcion expresada no puede ser llamada antes de su declaracion, entonces salio el error que no puede ser llamada antes de inicializacion.

B) ¿Cómo difieren los resultados entre la
funcióndeclarada y la función expresada?:
  La funcion declarada si puede ser llamada antes de ser inicializada, la expresada no.

C) ¿Qué indica esto sobre cómo el JavaScript maneja estas dos diferentes declaraciones de funciones?:
  Maneja un hoisting para la funcion declarada que no tiene la funcion expresada.
  */
