const validarEdad= edad=>{
    try{
        if(edad<0 || typeof edad==="number"){
            throw new Error("Edad inválida");
        }
    }
    catch(e){
        console.log("Error:", e.message);
    }
}
validarEdad(-20);