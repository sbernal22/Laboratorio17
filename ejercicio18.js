const cargarUsuario = async () => {
    console.log("Iniciando carga de usuario...");
    const usuario = await new Promise((resolve) => {
        const tiempoAleatorio = Math.floor(Math.random() * 701) + 800;
        setTimeout(()=>{
            const usuarioDatos = {
                id: 1,
                nombre: "Juancito"
            };
            console.log("Usuario cargado:", usuario.nombre, "ID:", usuario.id);
            resolve(usuarioDatos);
        }, tiempoAleatorio);
    });
    console.log("Async/Await recibió:", usuario);
};
cargarUsuario();