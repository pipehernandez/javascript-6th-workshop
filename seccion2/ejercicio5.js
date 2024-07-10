let llamar = function(){
    console.log("CallbackEjecutado");   
}

function manejarAsincronia(callback){
    new Promise((resolve, reject) => {
        setTimeout(() => {
            let seguir = confirm("Ok para seguir");
            if (seguir){
                resolve(console.log(`Promesa resuelta`)),callback();
            } else {
                reject(console.log(`Promesa rechazada`));
            }
        },2000)
        
        
    })
    
}
manejarAsincronia(llamar);
