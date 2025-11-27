const procesarLista = (arreglo, callback)=>{
    let procesados=0;
    const total = arreglo.length;
    arreglo.forEach((numero)=>{
        const tiempoAleatorio=Math.floor(Math.random()*1001)+500;
        setTimeout(()=>{
            console.log("Procesando", numero);
            procesados++;
            if (procesados === total) {
                callback("Proceso completado");
            }
        }, tiempoAleatorio);
    });
};
const numeros = [1, 2, 3, 4, 5];
procesarLista(numeros, (mensaje) => {
    console.log(mensaje);
});