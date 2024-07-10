// Ruta del archivo data.json
const url = "seccion5/data.json"; // Cambiar por la ruta correcta
let totalReservas = [];
let id = 0;
// Función para cargar y mostrar el contenido de data.json
function cargarYMostrarData() {
  // Retorna una nueva promesa que se resuelve después del setTimeout
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // Realiza la solicitud fetch dentro del setTimeout
      fetch(url)
        .then((response) => {
          if (!response.ok) {
            throw new Error("Error al cargar los datos.");
          }
          return response.json();
        })
        .then((data) => {
          console.log("Habitaciones:", data.rooms);
          console.log("Tipos de Habitaciones:", data.roomTypes);
          resolve(data); // Resuelve la promesa con los datos cargados
        })
        .catch((error) => {
          console.error(error);
          reject(error); // Rechaza la promesa si hay un error
        });
    }, 3000);
  });
}

cargarYMostrarData()
  .then(({ rooms, roomTypes }) => {
    let flag = true;
    while (flag) {
      let opcion = prompt(`Elige la opcion que deseas hacer: 
            \n1. Hacer una reserva.
            \n2. Ver reservas.
            \n3. Cancelar reserva.
            \n4. Editar reserva.
            \n5. Salir.`);
      switch (opcion) {
        case "1":
          let nombre = prompt(`Ingrese su nombre para hacer la reserva.`);
          let entrada = prompt(`Ingrese la fecha de ingreso (DD/MM/AAAA)`);
          let salida = prompt(`Ingrese la fecha de salida (DD/MM/AAA)`);
          let personas = prompt(`Ingrese la cantidad de personas para la reserva: `);
          let chequeador = roomTypes.filter((elemento) => elemento.capacity >= personas).map((elemento) => elemento.id);
          let chequeadorHabitaciones = rooms.filter((elemento) => chequeador.includes(elemento.roomTypeId));
          let habitacion = prompt(
            `Ingrese el numero de habitacion a reservar: ` +
              chequeadorHabitaciones.map((room) => {
                return `\nRoom Number: ${room.number}, (${roomTypes.find((type) => type.id === room.roomTypeId).name})`;
              })
          );
          id++;
          let reserva = { habitacion, entrada, salida, nombre, id };
          totalReservas.push(reserva);
          alert(`La reserva se ha creado con exito.`);
          break;
        case "2":
          let nombreReserva = prompt("Ingrese el nombre con el cual se hizo la reserva: ");
          console.log(verReserva(nombreReserva));
          break;
        case "3":
          let nombreReservaCancelar = prompt("Ingrese el nombre con el cual se hizo la reserva: ");
          nombreReservaCancelar = verReserva(nombreReservaCancelar);
          console.log(nombreReservaCancelar);
          let idAELiminar = prompt("Ingrese el id de la reserva a eliminar: ");
          cancelarReserva(nombreReservaCancelar, idAELiminar);
          alert("Reserva cancelada exitosamente.");
          console.log(totalReservas);
          break;
        case "4":
          let nombreReservaEditar = prompt("Ingrese el nombre con el cual se hizo la reserva: ");
          nombreReservaEditar = verReserva(nombreReservaEditar);
          console.log(nombreReservaEditar);
          let idAEditar = prompt("Ingrese el id de la reserva a editar: ");
      }
    }
  })
  .catch((error) => {
    console.error("Error al manejar la promesa:", error);
  });

function verReserva(busqueda) {
  return totalReservas.filter((elemento) => elemento.nombre === busqueda);
}

function cancelarReserva(cancelar, id) {
  cancelar = totalReservas;
  return totalReservas.splice(id.indexOf(id), 1);
}


