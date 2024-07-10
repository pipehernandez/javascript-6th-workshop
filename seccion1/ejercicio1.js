alert(`Presta mucha atención al siguiente codigo:

// Global Scope
var globalVariable = "Soy una variable global.";

function testScope() {
  // Function Scope
  var functionVariable = "Soy una variable local.";

  if (true) {
    // Block Scope
    let blockVariable = "Soy una variable de bloque.";
    console.log("Dentro del bloque:", blockVariable);
  }

  console.log("Dentro de la función:", functionVariable);
}

console.log("Fuera de la función:", globalVariable);
testScope();)`);

const respuestaGlobal = prompt(
  "Es posible acceder a la variable `globalVariable` desde cualquier parte del codigo? si/no "
).toLowerCase();
if (!respuestaGlobal) {
  alert("Ingrese una opción valida.");
} else if (respuestaGlobal) {
  const justificaGlobal = prompt("Escriba por que? ");
  console.log(respuestaGlobal + justificaGlobal);
}

const respuestaFuncion = prompt(
  "Es posible acceder a la variable `functionVariable` desde cualquier parte del codigo? si/no "
).toLowerCase();
if (!respuestaFuncion) {
  alert("Ingrese una opción valida.");
}
if (respuestaFuncion) {
  const justificaFuncion = prompt("Escriba por que? ");
  console.log(respuestaFuncion + justificaFuncion);
}

const respuestaBloque = prompt(
  "Es posible acceder a la variable `blockVariable` desde cualquier parte del codigo? si/no "
).toLowerCase();
if (!respuestaBloque) {
  alert("Ingrese una opción valida.");
}
if (respuestaBloque) {
  const justificaBloque = prompt("Escriba por que? ");
  console.log(justificaBloque);
}

if (respuestaGlobal === "si") {
  alert(
    "Respuesta correcta, la variable `globalVariable` se puede acceder desde cualquier parte del codigo, debido a que tiene un scope global."
  );
} else respuestaGlobal === "no";
alert(
  "Respuesta incorrecta, por que la variable `globalVariable` se puede acceder desde cualquier parte del codigo, debido a que tiene un scope global."
);

if (respuestaFuncion === "si") {
  alert(
    "Respuesta correcta, la variable `functionVariable` se puede acceder desde cualquier parte del codigo, debido a que tiene un scope global por estar declarada con `var`."
  );
} else respuestaGlobal === "no";
alert(
  "Respuesta incorrecta, por que la variable `functionVariable` se puede acceder desde cualquier parte del codigo, debido a que tiene un scope global por estar declarada con `var`."
);

if (respuestaBloque === "no") {
  alert(
    "Respuesta correcta, la variable `blockVariable` no se puede acceder desde cualquier parte del codigo. Debido a que tiene un scope de bloque y esta declarada como let solo se puede acceder a ella dentro del bloque."
  );
} else respuestaBloque === "si";
alert(
  "Respuesta incorrecta, por que la variable `blockVariable` no se puede acceder desde cualquier parte del codigo. Debido a que tiene un scope de bloque y esta declarada como let solo se puede acceder a ella dentro del bloque."
);
