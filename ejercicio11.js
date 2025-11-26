const dividirAsync= (a, b, callback)=>{
    setTimeout(()=>{
        if(b===0){
            callback(new Error("No se puede dividir entre cero", null));
        }
        else{
            callback(null, a/b);
        }
    }, 1500);
}
dividirAsync(1, 0, (error, resultado)=>{
    if(error==null){
        console.log("El resulatado es:", resultado)
    }
    else{
        console.log("Error:", error.message)
    }
})