const url = "https://jsonplaceholder.typicode.com/posts";

function cargarYmostrarDatos(){
    return new Promise((resolve, reject) => {
        let tiempo = Number(prompt(`Ingrese en cuantos segundos: `))*1000;
        setTimeout(() => {
        fetch(url)
            .then((respuesta) => {
                if(!respuesta){
                    throw new Error("Error al cargar los datos.");
                }
                return respuesta.json();
            })
            .then((datos) => {
                resolve(datos);
            })
            .catch((error) => {
                console.error(error);
                reject(error);
            });
        },tiempo);
    });
}
cargarYmostrarDatos()
    .then((url) => {
    console.log(url);
    })
    .catch((error) => {
        console.log(error);
    })
