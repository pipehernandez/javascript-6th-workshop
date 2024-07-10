console.log("Mensaje 1: Inmediatamente");
setTimeout(() => {
    console.log("Mensaje 2: con timeout de 0 segundos.");
},0);
setTimeout(() => {
    console.log("Mensaje 3: con timeout de 1 segundo.");
},1000); //tiempo en milisegundos
