try{
    let x=null;
    x.nombre;
}
catch(e){
    if(e instanceof TypeError){
        console.log("TypeError: Error de tipo");
        console.log(e.message);
    }
    else{
        console.log("Error general");
        console.log(e.message);
    }
}