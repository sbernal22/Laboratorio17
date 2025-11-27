const cargarMensaje = (callback) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const mensaje = "Mensaje cargado";
            callback(mensaje);
            resolve(mensaje);
        }, 1000);
    });
};
cargarMensaje((mensaje)=>{
    console.log(mensaje);
})
    .then((resultado)=>{
        console.log("Promesa recibió:", resultado);
    })
    .catch((error)=>{
        console.log("Error:", error);
    });