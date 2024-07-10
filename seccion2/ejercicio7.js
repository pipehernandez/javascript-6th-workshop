console.log(`Presta mucha atencion al siguiente codigo para intentar predecir el orden en el que se va a ejecutar el codigo:

A) console.log("Inicio del script");

B) setTimeout(() => {
  console.log("Primer setTimeout");
}, 0);

C) setTimeout(() => {
  console.log("Segundo setTimeout");
}, 0);

D) Promise.resolve("Promesa resuelta").then(console.log);

E) console.log("Fin del script");`);

setTimeout(() => {
    let respuesta = true;
while (respuesta) {
  const respuesta1 = prompt(
    "Escriba la letra correspondiente al mensaje que considere se va a ejecutar primero: "
  ).toLowerCase();
  if (respuesta1 === "a") {
    alert(`Correcto, primero se va a ejecutar: "Inicio del script"`);
    const respuesta2 = prompt(
      "Escriba la letra correspondiente al mensaje que considere se va a ejecutar despues: "
    ).toLowerCase();

    if (respuesta2 === "e") {
      alert(`Correcto, despues se va a ejecutar: "Fin del script"`);
      const respuesta3 = prompt(
        "Escriba la letra correspondiente al mensaje que considere se va a ejecutar despues: "
      ).toLowerCase();

      if (respuesta3 === "d") {
        alert(`Correcto, despues se va a ejecutar "Promesa resuelta"`);
        const respuesta4 = prompt(
          "Escriba la letra correspondiente al mensaje que considere se va a ejecutar despues: "
        ).toLowerCase();

        if (respuesta4 === "b") {
          alert(`Correcto, despues se va a ejecutar "Primer setTimeout"`);
          const respuesta5 = prompt(
            "Escriba la letra correspondiente al mensaje que considere se va a ejecutar despues: "
          ).toLowerCase();

          if (respuesta5 === "c") {
            alert(`Correcto, despues se va a ejecutar "Segundo setTimeout"`);
            alert("Felicitaciones, has acertado todas las preguntas!!!");
          } else
            alert(
              `Respuesta incorrecta, despues se va a ejecutar: C) "Segundo setTimeout"`
            );
        } else
          alert(
            `Respuesta incorrecta, despues se va a ejecutar: B) "Primer setTimeout"`
          );
      } else
        alert(
          `Respuesta incorrecta, despues se va a ejecutar: D) "Promesa resuelta"`
        );
    } else
      alert(
        `Respuesta incorrecta, despues se va a ejecutar: E) "Fin del script"`
      );
  } else
    alert(
      `Respuesta incorrecta, primero se va ejecutar: A) "Inicio del script`
    );
}

},5000);
