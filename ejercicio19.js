const dividirAsync = async (a, b) => {
    try{
        const resultado = await new Promise((resolve, reject) => {
            setTimeout(() =>{
                if(b === 0){
                    reject(new Error("No se puede dividir entre cero"));
                }
                else{
                    const division = a/b;
                    console.log("División completada.");
                    resolve(division);
                }
            }, 1500);
        });
        
        console.log("Async/Await recibió:", resultado);
    }
    catch (error){
        console.log("Error:", error.message);
    }
};
dividirAsync(10, 2);