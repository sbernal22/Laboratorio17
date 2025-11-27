const cargarMensaje = async () => {
    console.log("Iniciando carga de mensaje...");
    const resultado = await new Promise((resolve)=>{
        setTimeout(()=>{
            console.log("Mensaje cargado");
            resolve("Mensaje cargado");
        }, 1000);
    });
    console.log("Async/Await recibió:", resultado);
};
cargarMensaje();