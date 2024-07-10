alert(`Presta mucha atención al siguiente codigo:

// vars call
console.log("Valor de a:", a);
console.log("Valor de b:", b);
console.log("Valor de c:", c);

// functions call
console.log("Resultado de funcionDeclarada:", funcionDeclarada());
console.log("Resultado de funcionExpresada:", funcionExpresada());

// vars declaration
var a = 1;
let b = 2;
const c = 3;

// functions declarations
function funcionDeclarada() {
  return "Función declarada ha sido llamada.";
}

const funcionExpresada = function () {
  return "Función expresada ha sido llamada.";
};`);

// Respuesta 1
const respuesta1 = prompt(`Escribe aqui el resultado de la primera operación. \nSi crees que va a salir un error escribe cual: `).toLowerCase();
if (respuesta1 === "undefined"){
    alert(`Correcto, si las variables declaradas con "var" son llamadas antes de declararlas, son inicializadas con "undefined"`);
} else if (respuesta1){
    alert(`Incorrecto, las variables "var" que se llaman antes de declararlas, son inicializadas con "undefined"`);
} else if(!respuesta1)
    alert("Ingrese una opción valida.")
console.log(respuesta1);

// Respuesta 2
const respuesta2 = prompt(`Escribe aqui el resultado de la segunda operación. \nSi crees que va a salir un error escribe cual: `).toLowerCase();
if (respuesta2 === "uncaught referenceerror"){
    alert(`Correcto, no se puede acceder a una variable declarada con "let" antes de declararla. Saldrá el error: "uncaught referenceError`);
} else if (respuesta2){
    alert(`Incorrecto, las variables "let" no pueden ser accedidas antes de su declaración, saldra el error: "uncaught referenceError`);
} else if (!respuesta2)
    alert("Ingrese una opción valida.")
console.log(respuesta2);

// Respuesta 3
const respuesta3 = prompt(`Escribe aqui el resultado de la tercera operación. \nSi crees que va a salir un error escribe cual: `).toLowerCase();
if (respuesta3 === "uncaught referenceerror"){
    alert(`Correcto, no se puede acceder a una variable declarada con "const" antes de declararla. Saldrá el error: "uncaught referenceError`);
} else if (respuesta3){
    alert(`Incorrecto, las variables "const" no pueden ser accedidas antes de su declaración, saldra el error: "uncaught referenceError`);
} else if (!respuesta3)
    alert("Ingrese una opción valida.")
console.log(respuesta3);

// Respuesta 4
const respuesta4 = prompt(`Escribe aqui el resultado de la cuarta operación. \nSi crees que va a salir un error escribe cual: `).toLowerCase();
if (respuesta4 === "funcion declarada ha sido llamada"){
    alert(`Correcto, una funcion declarada puede ser llamada antes de su declaracíon.`);
} else if (respuesta4){
    alert(`Incorrecto, por que una funcion declarada puede ser llamada antes de su declaracíon. La respuesta correcta es: "funcion declarada ha sido llamada"`);
} else if (!respuesta4)
    alert("Ingrese una opción valida.")
console.log(respuesta4);

// Respuesta 5
const respuesta5 = prompt(`Escribe aqui el resultado de la quinta operación. \nSi crees que va a salir un error escribe cual: `).toLowerCase();
if (respuesta5 === "uncaught referenceerror"){
    alert(`Correcto, una función expresada no puede ser llamada antes de declararla.`);
} else if (respuesta5){
    alert(`Incorrecto, por que una función expresada no puede ser llamada antes de declararla, saldra el error: "uncaught referenceError`);
} else if (!respuesta5)
    alert("Ingrese una opción valida.")
console.log(respuesta5);