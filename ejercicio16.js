const procesarLista = (arreglo, callback) => {
    return new Promise((resolve, reject) => {
        let procesados = 0;
        const total = arreglo.length;
        arreglo.forEach((numero) => {
            const tiempoAleatorio = Math.floor(Math.random() * 1001) + 500;
            setTimeout(() => {
                console.log(`Procesando ${numero}...`);
                procesados++;
                if (procesados === total) {
                    const mensaje = "Proceso completado";
                    callback(mensaje);
                    resolve(mensaje);
                }
            }, tiempoAleatorio);
        });
    });
};
const numeros = [1, 2, 3, 4, 5];
procesarLista(numeros, (mensaje) => {
    console.log("Callback recibió:", mensaje);
})
    .then((resultado) => {
        console.log("Promesa recibió:", resultado);
    })
    .catch((error) => {
        console.log("Error:", error);
    });