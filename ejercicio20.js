const procesarLista = async (arreglo) =>{
    const resultado = await new Promise((resolve) =>{
        let procesados=0;
        const total=arreglo.length;
        arreglo.forEach((numero) => {
            const tiempoAleatorio = Math.floor(Math.random() * 1001) + 500;
            setTimeout(() =>{
                console.log("Procesando", numero);
                procesados++;
                if (procesados === total) {
                    console.log("Proceso completado");
                    resolve("Proceso completado");
                }
            }, tiempoAleatorio);
        });
    });
    console.log("Async/Await recibió:", resultado);
};
const numeros = [1, 2, 3, 4, 5];
procesarLista(numeros);