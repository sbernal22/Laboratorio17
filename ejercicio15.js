const dividirAsync = (a, b, callback) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (b === 0) {
                const error = new Error("No se puede dividir entre cero");
                callback(error, null);
                reject(error);
            }
            else{
                const resultado = a / b;
                callback(null, resultado);
                resolve(resultado);
            }
        }, 1500);
    });
};
dividirAsync(10, 2, (error, resultado) => {
    if (error!=null){
        console.log("Error en callback:", error.message);
    }
    else{
        console.log("Resultado en callback:", resultado);
    }
})
    .then((resultado) => {
        console.log("Promesa recibió:", resultado);
    })
    .catch((error) => {
        console.log("Error en promesa:", error.message);
    });