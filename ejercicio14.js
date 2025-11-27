const cargarUsuario = (callback) => {
    return new Promise((resolve, reject)=>{
        const tiempoAleatorio = Math.floor(Math.random() * 701) + 800;
        setTimeout(() => {
            const usuario = {
                id: 1,
                nombre: "Juancito"
            };
            callback(usuario);
            resolve(usuario);
        }, tiempoAleatorio);
    });
};
cargarUsuario((usuario)=>{
    console.log("Usuario cargado:", usuario.nombre, "ID:", usuario.id)
})
    .then((resultado) => {
        console.log("Promesa recibió:", resultado);
    })
    .catch((error) => {
        console.log("Error:", error);
    });