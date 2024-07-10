function funcionExterna(){
  let contador = 0;
  funcionInterna();
  function funcionInterna(){
    let bucle = true;
    while(bucle){
      let opcion = prompt(`Ingrese una de las siguientes opciones: 
      \n1. Sumar 1 al contador.
      \n2. Mirar el contador.
      \n3. Salir.`);
      switch(opcion){
        case "1":
          contador++;
          continue;
        case "2":
          alert(`El contador vale ${contador}.`);
          continue;
        case "3":
          bucle = false;
      }
    }
  } 
}
funcionExterna();